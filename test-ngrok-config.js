const { exec } = require('child_process');

console.log('Running ngrok config check...');
exec('ngrok config check', (err, stdout, stderr) => {
  console.log('check STDOUT:', stdout);
  console.log('check STDERR:', stderr);
});

console.log('Checking ngrok config path...');
exec('ngrok config show', (err, stdout, stderr) => {
  console.log('show STDOUT:', stdout);
  console.log('show STDERR:', stderr);
});
