const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { createServer } = require('vite');
const ngrok = require('@ngrok/ngrok');

// Membaca file .env jika ada
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value.trim();
    }
  });
}

let viteServer;
let sshProcess;
let ngrokListener;

async function start() {
  console.log('Starting Vite development server...');
  try {
    // Start Vite server
    viteServer = await createServer({
      configFile: false,
      root: __dirname,
      server: {
        port: 3000,
        host: true,
        allowedHosts: ['.ngrok-free.app', '.lhr.life']
      }
    });
    await viteServer.listen();
    console.log(`Vite server running at http://localhost:3000`);
  } catch (err) {
    console.error('Gagal menjalankan Vite server:', err);
    process.exit(1);
  }

  // Tentukan apakah menggunakan Ngrok atau SSH Tunnel (localhost.run)
  const hasAuthtoken = process.env.NGROK_AUTHTOKEN && 
                       process.env.NGROK_AUTHTOKEN !== 'your_authtoken_here' && 
                       process.env.NGROK_AUTHTOKEN.trim() !== '';

  if (hasAuthtoken) {
    await startNgrok();
  } else {
    console.log('\n⚠️  Authtoken Ngrok tidak diisi di .env.');
    console.log('🔗 Menggunakan alternatif SSH Tunnel (localhost.run) yang GRATIS & instan...');
    await startSshTunnel();
  }
}

async function startNgrok() {
  console.log('Connecting ngrok tunnel using official SDK...');
  try {
    ngrokListener = await ngrok.forward({
      addr: 3000,
      authtoken: process.env.NGROK_AUTHTOKEN
    });
    
    console.log(`\n========================================`);
    console.log(`🚀 Ngrok Tunnel Aktif!`);
    console.log(`Public URL: ${ngrokListener.url()}`);
    console.log(`Local URL:  http://localhost:3000`);
    console.log(`========================================\n`);
  } catch (err) {
    console.error('\n❌ Gagal menghubungkan tunnel ngrok.');
    console.error('Detail Error:', err.message || err);
    console.log('Mencoba beralih ke SSH Tunnel gratis...');
    await startSshTunnel();
  }
}

async function startSshTunnel() {
  console.log('Connecting SSH tunnel to localhost.run...');
  
  sshProcess = spawn('ssh', [
    '-o', 'StrictHostKeyChecking=no',
    '-o', 'ServerAliveInterval=60',
    '-R', '80:127.0.0.1:3000',
    'nokey@localhost.run'
  ], {
    stdio: 'pipe'
  });

  let urlFound = false;

  sshProcess.stdout.on('data', (data) => {
    const output = data.toString();
    const urlMatch = output.match(/https:\/\/[a-zA-Z0-9.-]+\.lhr\.life/);
    if (urlMatch && !urlFound) {
      urlFound = true;
      const url = urlMatch[0];
      console.log(`\n========================================`);
      console.log(`🚀 SSH Tunnel Aktif (localhost.run)!`);
      console.log(`Public URL: ${url}`);
      console.log(`Local URL:  http://localhost:3000`);
      console.log(`========================================\n`);
      console.log('Tips: Buka Public URL di HP untuk menguji PWA dengan HTTPS.');
    }
  });

  sshProcess.stderr.on('data', (data) => {
    const errOutput = data.toString();
    if (!errOutput.includes('Pseudo-terminal')) {
      // console.error(`[SSH] ${errOutput.trim()}`);
    }
  });

  sshProcess.on('close', (code) => {
    console.log(`SSH Tunnel ditutup (code ${code})`);
  });
}

// Tangani terminasi agar port bersih kembali
const cleanUp = async () => {
  console.log('\nCleaning up processes...');
  if (sshProcess) {
    try { sshProcess.kill(); } catch(e) {}
  }
  if (ngrokListener) {
    try { await ngrokListener.close(); } catch(e) {}
  }
  if (viteServer) {
    try { viteServer.close(); } catch(e) {}
  }
  process.exit();
};

process.on('SIGINT', cleanUp);
process.on('SIGTERM', cleanUp);

start();
