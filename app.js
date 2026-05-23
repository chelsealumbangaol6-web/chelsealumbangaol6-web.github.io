// SEDAF: Strategic Eco-Defense Archives Framework
// Main Application Controller (State, GIS, AI Engine, SOP Converter, & Inter-agency Workflow)

// ==================== INITIAL MOCK DATABASE STATES ====================
let state = {
  activeRole: 'BPBD', // Initial Role: BPBD / BNPB
  archives: [
    {
      id: 'ARC-001',
      title: 'Laporan Komprehensif Banjir Besar Citarum 1996',
      disaster_type: 'Banjir',
      event_date: '1996-02-14',
      location: 'Kab. Karawang',
      classification: 'Publik',
      uploaded_by: 'ANRI / Arsiparis',
      description: 'Laporan administrasi lengkap dan catatan debit limpasan pintu air Jatiluhur tahun 1996. Banjir mencapai 2.5 meter di pusat Pamanukan.',
      metadata: { code: 'ANRI-KB/1996/JABAR', page_count: 145, document_type: 'Laporan Resmi' }
    },
    {
      id: 'ARC-002',
      title: 'Kajian Seismotektonik Sesar Lembang & Risiko Bandung',
      disaster_type: 'Gempa',
      event_date: '2023-08-10',
      location: 'Kab. Bandung Barat',
      classification: 'Internal',
      uploaded_by: 'BMKG (Geofisika)',
      description: 'Kajian mendalam pergerakan patahan aktif Sesar Lembang dengan probabilitas pelepasan energi magnitudo 6.8 SR.',
      metadata: { code: 'BMKG-SL/2023/K08', page_count: 82, document_type: 'Studi Akademik' }
    },
    {
      id: 'ARC-003',
      title: 'Dokumen Rencana Evakuasi Tsunami Pesisir Selatan Bali',
      disaster_type: 'Tsunami',
      event_date: '2019-11-05',
      location: 'Pesisir Selatan Bali',
      classification: 'Rahasia',
      uploaded_by: 'BNPB / Pusdatin',
      description: 'Rencana pertahanan kontingensi taktis evakuasi militer, titik safe haven rahasia, dan koordinasi logistik taktis pasca tsunami.',
      metadata: { code: 'TNI-BNPB-TS/2019/BALI', page_count: 210, document_type: 'Rencana Kontingensi' }
    },
    {
      id: 'ARC-004',
      title: 'Evaluasi Dampak Kekeringan El-Nino Jawa Barat 2015',
      disaster_type: 'Kekeringan',
      event_date: '2015-09-20',
      location: 'Kab. Indramayu',
      classification: 'Publik',
      uploaded_by: 'BPBD Jabar',
      description: 'Rekaman kegagalan panen 45,000 hektar sawah tadah hujan di Pantura dan rekomendasi adaptasi embung air mikro.',
      metadata: { code: 'BPBD-ELNINO/2015/09', page_count: 64, document_type: 'Laporan Evaluasi' }
    },
    {
      id: 'ARC-005',
      title: 'Arsip Penanganan Longsor Sukabumi & Tata Guna Lahan',
      disaster_type: 'Longsor',
      event_date: '2018-12-31',
      location: 'Kab. Sukabumi',
      classification: 'Internal',
      uploaded_by: 'ANRI / Arsiparis',
      description: 'Penelitian pergeseran tanah lempung basah pasca alih fungsi lahan hutan lindung menjadi kawasan agrowisata.',
      metadata: { code: 'ANRI-LS/2018/SUKABUMI', page_count: 48, document_type: 'Catatan Kasus' }
    }
  ],
  operations: [
    {
      id: 'OP-101',
      location: 'Sektor B - Citarum Hilir, Karawang',
      evacuees: 340,
      logistics_status: 'Kurang',
      lat: '-6.1284',
      lng: '107.2941',
      notes: 'Tanggul primer Citarum rembes sepanjang 4 meter. Pengungsi balita membutuhkan susu formula tambahan. Evakuasi dibantu Kodim.',
      reported_by: 'BPBD Kab. Karawang',
      reported_at: '2026-05-17 15:42',
      status: 'Verified'
    },
    {
      id: 'OP-102',
      location: 'Gedung Olahraga Pamanukan, Subang',
      evacuees: 850,
      logistics_status: 'Cukup',
      lat: '-6.2731',
      lng: '107.8105',
      notes: 'Titik aman teruji historis sejak banjir 2007. Fasilitas MCK dan dapur umum TNI AD beroperasi dengan kapasitas penuh.',
      reported_by: 'Relawan Subang',
      reported_at: '2026-05-17 11:05',
      status: 'Verified'
    },
    {
      id: 'OP-103',
      location: 'Dusun Ciherang, Sukabumi',
      evacuees: 45,
      logistics_status: 'Kritis',
      lat: '-6.9248',
      lng: '106.9264',
      notes: 'Terjadi retakan tanah baru sepanjang 20 meter. Akses jalan utama tertimbun longsoran kecil. Tim SAR gabungan Polri menuju lokasi.',
      reported_by: 'Polres Sukabumi',
      reported_at: '2026-05-17 08:30',
      status: 'Pending_Verification'
    }
  ],
  sops: [
    {
      id: 'SOP-001',
      title: 'Protokol Evakuasi Pintu Air Citarum Hilir',
      disaster_type: 'Banjir',
      source: 'Kombinasi Arsip 1996 & BPBD 2021',
      year: '2021',
      summary: 'Langkah taktis pintu air Citarum saat tinggi muka air (TMA) menyentuh Siaga 1 (di atas 8.5 meter).',
      steps: [
        'Bunyikan sirine peringatan dini di 12 dusun bantaran sungai.',
        'Koordinasikan pembukaan pintu limpasan waduk Jatiluhur dengan BMKG/PJT II.',
        'Kerahkan unit perahu karet Kodim dan BPBD ke titik evakuasi Sektor A.',
        'Masyarakat dievakuasi ke GOR Pamanukan (Safe Haven Teruji 2007).'
      ]
    },
    {
      id: 'SOP-002',
      title: 'Manajemen Logistik Kontingensi Pasca Tsunami Pesisir',
      disaster_type: 'Tsunami',
      source: 'Pengalaman Operasi BNPB & TNI AD',
      year: '2020',
      summary: 'Prosedur pemindahan logistik bantuan pangan dari bandara terdekat menuju posko aman dalam waktu kurang dari 6 jam.',
      steps: [
        'Aktivasi titik kumpul logistik di pangkalan militer penyangga.',
        'Gunakan transportasi bahari (KRI) jika jalur darat mengalami patahan gempa.',
        'Distribusi prioritas: Makanan bayi, obat-obatan sanitasi, dan selimut.',
        'Lakukan audit stok harian terhubung sistem cloud terpusat.'
      ]
    }
  ],
  auditLogs: [
    { timestamp: '2026-05-17 19:42', user: 'Letkol. Budi Susilo (BPBD)', action: 'Mengubah Status Operasi OP-101', status: 'Internal', details: 'Status evakuasi ditandai diverifikasi' },
    { timestamp: '2026-05-17 18:15', user: 'Dra. Retno Wulandari (ANRI)', action: 'Unggah Arsip Baru ARC-005', status: 'Publik', details: 'Katalogisasi dokumen mitigasi longsor' },
    { timestamp: '2026-05-17 17:01', user: 'System AI Engine', action: 'Update Indeks Risiko Jawa Barat', status: 'Publik', details: 'Korelasi anomali curah hujan BMKG mendeteksi tren 1996' }
  ],
  gisSelectedRegion: 'Jawa',
  qualityChartInstance: null
};

// ==================== PWA ROUTER / TAB SWITCHER ====================
function switchView(viewId) {
  // Hide all views
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });
  
  // Show target view
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Update navigation active states (Sidebar)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.getElementById(`nav-${viewId}`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Update navigation active states (Mobile Bottom Nav)
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeMobileLink = document.getElementById(`m-nav-${viewId}`);
  if (activeMobileLink) {
    activeMobileLink.classList.add('active');
  }

  // Dynamic initialization per view
  if (viewId === 'dashboard') {
    initCharts();
  }

  // Ensiklopedia: always start at landing when switching to this view from outside
  if (viewId === 'ensiklopedia') {
    backToEncycloLanding();
  }
  
  // Re-trigger Lucide Icons render
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Close sidebar drawer on mobile
  closeSidebarDrawer();
  
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

// ==================== ENSIKLOPEDIA NAVIGATION ====================
function showKayoriDetail() {
  const landing = document.getElementById('encyclo-landing');
  const detail  = document.getElementById('kayori-detail');
  if (landing) landing.classList.add('hidden');
  if (detail)  detail.classList.remove('hidden');
  // Scroll to top of content area
  const viewport = document.querySelector('.flex-1.overflow-y-auto');
  if (viewport) viewport.scrollTo({ top: 0, behavior: 'smooth' });
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function backToEncycloLanding() {
  const landing = document.getElementById('encyclo-landing');
  const detail  = document.getElementById('kayori-detail');
  if (landing) landing.classList.remove('hidden');
  if (detail)  detail.classList.add('hidden');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}


// ==================== MOBILE SLIDE DRAWER ====================
function openSidebarDrawer() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
  }
}

function closeSidebarDrawer() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}

// ==================== LIGHT / DARK THEME TOGGLE ====================
function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('light-mode', isLight);
  }

  // Update localStorage preference
  localStorage.setItem('sedaf-theme', isLight ? 'light' : 'dark');

  // Update Theme Trigger Icon
  updateThemeIcon(isLight);
  
  if (isLight) {
    showToast('Mode Terang Aktif', 'success');
  } else {
    showToast('Mode Gelap Aktif', 'success');
  }

  // Redraw charts to match light background colors
  const activeView = document.querySelector('.page-view.active');
  if (activeView && activeView.id === 'view-dashboard') {
    initCharts();
  }
}

function updateThemeIcon(isLight) {
  const icon = document.getElementById('theme-toggle-icon');
  if (icon) {
    if (isLight) {
      icon.setAttribute('data-lucide', 'moon');
    } else {
      icon.setAttribute('data-lucide', 'sun');
    }
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('sedaf-theme');
  const isLight = (savedTheme === 'light');
  
  const sidebar = document.getElementById('sidebar');
  if (isLight) {
    document.body.classList.add('light-mode');
    if (sidebar) sidebar.classList.add('light-mode');
    updateThemeIcon(true);
  } else {
    document.body.classList.remove('light-mode');
    if (sidebar) sidebar.classList.remove('light-mode');
    updateThemeIcon(false);
  }
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'success') {
  let displayMessage = message;
  if (typeof currentLanguage !== 'undefined' && currentLanguage === 'en' && typeof translationDictionary !== 'undefined' && translationDictionary[message]) {
    displayMessage = translationDictionary[message];
  }
  const toast = document.createElement('div');
  toast.className = `fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 text-xs font-semibold select-none`;
  
  if (type === 'success') {
    toast.className += ' bg-accentGreen/15 border-accentGreen text-accentGreen';
    toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> ${displayMessage}`;
  } else if (type === 'warning') {
    toast.className += ' bg-accentAmber/15 border-accentAmber text-accentAmber';
    toast.innerHTML = `<i data-lucide="alert-circle" class="w-4 h-4"></i> ${displayMessage}`;
  } else {
    toast.className += ' bg-accentRed/15 border-accentRed text-accentRed';
    toast.innerHTML = `<i data-lucide="x-circle" class="w-4 h-4"></i> ${displayMessage}`;
  }

  document.body.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Animate In
  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 50);

  // Animate Out & Remove
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// ==================== INTERACTIVE REGION GIS SANDBOX ====================
function selectMapRegion(name, riskScore, recommendation) {
  // Update UI Elements
  document.getElementById('map-region-name').innerText = name;
  document.getElementById('map-region-risk').innerText = riskScore.toFixed(2);
  document.getElementById('map-region-desc').innerText = recommendation;

  // Add active selected classes in SVGs
  document.querySelectorAll('.svg-region').forEach(reg => {
    reg.classList.remove('selected');
  });

  const targetReg = document.getElementById(`region-${name.toLowerCase().replace(/\s+/g, '')}`);
  if (targetReg) {
    targetReg.classList.add('selected');
  }

  // Sync Google Map iframe and Safe Haven routes list
  updateEvacuationRoutesAndMap(name);

  // Sync GIS text matrix as well so they are unified
  const activeGisName = document.getElementById('gis-matrix-name');
  if (activeGisName) {
    activeGisName.innerText = name;
    document.getElementById('gis-matrix-stats').innerHTML = `Indeks Kerentanan: <span class="text-accentRed font-bold">${(riskScore * 100).toFixed(0)}%</span> • Rekomendasi Terintegrasi`;
    document.getElementById('gis-matrix-hotspot').innerText = recommendation;
  }
  
  showToast(`Wilayah Terpilih: ${name}`, 'success');
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

function selectGisRegion(name, riskPercent, count, hazardType, hotspot) {
  // Update matrix boxes
  document.getElementById('gis-matrix-name').innerText = name;
  document.getElementById('gis-matrix-stats').innerHTML = `Indeks Kerentanan: <span class="text-accentRed font-bold">${riskPercent}%</span> • Riwayat: ${count} Bencana`;
  document.getElementById('gis-matrix-hotspot').innerText = hotspot;

  // Sync active regional SVG elements
  document.querySelectorAll('#gis-map-canvas .svg-region').forEach(reg => {
    reg.classList.remove('selected');
  });

  const targetReg = document.getElementById(`gis-region-${name.toLowerCase().replace(/\s+/g, '')}`);
  if (targetReg) {
    targetReg.classList.add('selected');
  }

  // Update Google Maps & Nearest Evacuation safe havens
  updateEvacuationRoutesAndMap(name);

  showToast(`Detail Spasial Wilayah ${name} dimuat`, 'success');
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

// ==================== GOOGLE MAPS & EVACUATION ROUTES ENGINE ====================
function updateEvacuationRoutesAndMap(regionName) {
  const regionCoords = {
    'Sumatra': { lat: -3.3194, lng: 103.9144 },
    'Jawa': { lat: -6.2731, lng: 107.8105 },
    'Kalimantan': { lat: -1.4822, lng: 114.3122 },
    'Sulawesi': { lat: -1.4300, lng: 120.0294 },
    'Nusa Tenggara & Bali': { lat: -8.6500, lng: 115.2166 },
    'Maluku': { lat: -3.1333, lng: 129.1333 },
    'Papua': { lat: -2.5833, lng: 140.5166 }
  };

  const safeHavens = {
    'Sumatra': [
      { name: 'Kantor Bupati Musi Banyuasin', dist: '2.8 km', time: '8 mnt', cap: '600 Jiwa', status: 'Cukup Aman', lat: -3.3150, lng: 103.9180 },
      { name: 'Stadion Sekayu', dist: '4.2 km', time: '12 mnt', cap: '1500 Jiwa', status: 'Siaga', lat: -3.3250, lng: 103.9050 }
    ],
    'Jawa': [
      { name: 'GOR Pamanukan (Safe Haven)', dist: '1.2 km', time: '4 mnt', cap: '850 Jiwa', status: 'Cukup Aman', lat: -6.2710, lng: 107.8120 },
      { name: 'Masjid Agung Subang', dist: '3.5 km', time: '10 mnt', cap: '1200 Jiwa', status: 'Siaga', lat: -6.2850, lng: 107.8010 },
      { name: 'Lapangan Sepakbola Pamanukan', dist: '2.1 km', time: '7 mnt', cap: '500 Jiwa', status: 'Penuh', lat: -6.2620, lng: 107.8250 }
    ],
    'Kalimantan': [
      { name: 'Posko Induk Bencana Kapuas', dist: '1.5 km', time: '5 mnt', cap: '400 Jiwa', status: 'Cukup Aman', lat: -1.4800, lng: 114.3150 }
    ],
    'Sulawesi': [
      { name: 'Huntap Tondo (Palu)', dist: '5.1 km', time: '15 mnt', cap: '2000 Jiwa', status: 'Siaga', lat: -1.4250, lng: 120.0350 }
    ],
    'Nusa Tenggara & Bali': [
      { name: 'Lapangan Puputan Badung', dist: '3.0 km', time: '9 mnt', cap: '1000 Jiwa', status: 'Cukup Aman', lat: -8.6520, lng: 115.2180 }
    ],
    'Maluku': [
      { name: 'Posko Pengungsi SBB', dist: '2.0 km', time: '6 mnt', cap: '300 Jiwa', status: 'Cukup Aman', lat: -3.1300, lng: 129.1350 }
    ],
    'Papua': [
      { name: 'Stadion Lukas Enembe', dist: '6.4 km', time: '18 mnt', cap: '3000 Jiwa', status: 'Siaga', lat: -2.5850, lng: 140.5180 }
    ]
  };

  const coords = regionCoords[regionName] || regionCoords['Jawa'];
  const havens = safeHavens[regionName] || safeHavens['Jawa'];

  // Update Coordinates Badge
  const badge = document.getElementById('gis-coords-badge');
  if (badge) {
    badge.innerText = `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}`;
  }

  // Update Google Maps Iframe
  const iframe = document.getElementById('google-maps-iframe');
  if (iframe) {
    iframe.src = `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }

  // Render Safe Havens List
  const container = document.getElementById('evacuation-routes-list');
  if (container) {
    container.innerHTML = '';
    havens.forEach(h => {
      let capClass = 'text-accentGreen';
      if (h.status === 'Siaga') capClass = 'text-accentAmber';
      if (h.status === 'Penuh') capClass = 'text-accentRed';

      const card = document.createElement('div');
      card.className = 'glass-card p-3 rounded-xl border border-white/5 flex items-center justify-between gap-3 text-xs';
      card.innerHTML = `
        <div class="space-y-1">
          <h4 class="font-bold text-slate-100">${h.name}</h4>
          <div class="flex items-center gap-3 text-[10px] text-secGray font-medium">
            <span><i data-lucide="navigation" class="w-3 h-3 inline mr-1 text-accentBlue"></i>${h.dist} (${h.time})</span>
            <span><i data-lucide="users" class="w-3 h-3 inline mr-1 text-accentGreen"></i>${h.cap}</span>
          </div>
        </div>
        <div class="flex flex-col items-end gap-1.5 shrink-0">
          <span class="text-[8px] font-bold px-1.5 py-0.5 rounded border border-white/10 ${capClass}">${h.status.toUpperCase()}</span>
          <a href="https://www.google.com/maps/dir/?api=1&origin=${coords.lat},${coords.lng}&destination=${h.lat},${h.lng}&travelmode=driving" target="_blank" class="bg-accentBlue/20 hover:bg-accentBlue hover:text-white text-accentBlue font-bold px-2 py-1 rounded text-[9px] transition-all flex items-center gap-0.5">
            <i data-lucide="milestone" class="w-3 h-3"></i> Navigasi
          </a>
        </div>
      `;
      container.appendChild(card);
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

const GEMINI_API_KEY = 'AIzaSyBcGuvkpA2NCk8ULY44nta8xK7JSPh6dEo';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

function requestLocationAndUpdateEvacuation() {
  if (!navigator.geolocation) {
    showToast('Browser tidak mendukung akses lokasi.', 'danger');
    return;
  }

  const statusText = document.getElementById('splash-status-text');
  if (statusText) {
    statusText.innerHTML = '<span class="h-2.5 w-2.5 rounded-full bg-accentGreen animate-pulse"></span> Meminta izin lokasi...';
  }

  navigator.geolocation.getCurrentPosition(async (position) => {
    const userCoords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    showToast('Lokasi diterima. Mencari titik evakuasi terdekat...', 'success');
    const nearestHaven = updateEvacuationRoutesWithUserLocation(userCoords);
    await generateEvacuationAdvice(userCoords, nearestHaven);
  }, (error) => {
    console.warn('Geolocation error:', error);
    showToast('Akses lokasi ditolak atau gagal. Menampilkan rute default.', 'warning');
    renderLocationFallback();
  }, {
    enableHighAccuracy: true,
    timeout: 12000,
    maximumAge: 60000
  });
}

function renderLocationFallback() {
  updateEvacuationRoutesAndMap('Jawa');
  const adviceBox = document.getElementById('evacuation-advice');
  if (adviceBox) {
    adviceBox.innerHTML = '<p class="text-slate-300 text-xs">Akses lokasi tidak tersedia. Silakan gunakan tombol "Gunakan Lokasi Saya" jika Anda ingin mencoba lagi.</p>';
  }
}

function getAllSafeHavens() {
  const safeHavens = {
    'Sumatra': [
      { name: 'Kantor Bupati Musi Banyuasin', dist: '2.8 km', time: '8 mnt', cap: '600 Jiwa', status: 'Cukup Aman', lat: -3.3150, lng: 103.9180, region: 'Sumatra' },
      { name: 'Stadion Sekayu', dist: '4.2 km', time: '12 mnt', cap: '1500 Jiwa', status: 'Siaga', lat: -3.3250, lng: 103.9050, region: 'Sumatra' }
    ],
    'Jawa': [
      { name: 'GOR Pamanukan (Safe Haven)', dist: '1.2 km', time: '4 mnt', cap: '850 Jiwa', status: 'Cukup Aman', lat: -6.2710, lng: 107.8120, region: 'Jawa' },
      { name: 'Masjid Agung Subang', dist: '3.5 km', time: '10 mnt', cap: '1200 Jiwa', status: 'Siaga', lat: -6.2850, lng: 107.8010, region: 'Jawa' },
      { name: 'Lapangan Sepakbola Pamanukan', dist: '2.1 km', time: '7 mnt', cap: '500 Jiwa', status: 'Penuh', lat: -6.2620, lng: 107.8250, region: 'Jawa' }
    ],
    'Kalimantan': [
      { name: 'Posko Induk Bencana Kapuas', dist: '1.5 km', time: '5 mnt', cap: '400 Jiwa', status: 'Cukup Aman', lat: -1.4800, lng: 114.3150, region: 'Kalimantan' }
    ],
    'Sulawesi': [
      { name: 'Huntap Tondo (Palu)', dist: '5.1 km', time: '15 mnt', cap: '2000 Jiwa', status: 'Siaga', lat: -1.4250, lng: 120.0350, region: 'Sulawesi' }
    ],
    'Nusa Tenggara & Bali': [
      { name: 'Lapangan Puputan Badung', dist: '3.0 km', time: '9 mnt', cap: '1000 Jiwa', status: 'Cukup Aman', lat: -8.6520, lng: 115.2180, region: 'Nusa Tenggara & Bali' }
    ],
    'Maluku': [
      { name: 'Posko Pengungsi SBB', dist: '2.0 km', time: '6 mnt', cap: '300 Jiwa', status: 'Cukup Aman', lat: -3.1300, lng: 129.1350, region: 'Maluku' }
    ],
    'Papua': [
      { name: 'Stadion Lukas Enembe', dist: '6.4 km', time: '18 mnt', cap: '3000 Jiwa', status: 'Siaga', lat: -2.5850, lng: 140.5180, region: 'Papua' }
    ]
  };

  return Object.values(safeHavens).flat();
}

function calculateDistanceKm(lat1, lng1, lat2, lng2) {
  const toRad = value => value * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const R = 6371;
  return R * c;
}

function updateEvacuationRoutesWithUserLocation(userCoords) {
  const allHavens = getAllSafeHavens();
  const sorted = allHavens.map(h => ({
    ...h,
    actualDistance: calculateDistanceKm(userCoords.lat, userCoords.lng, h.lat, h.lng)
  })).sort((a, b) => a.actualDistance - b.actualDistance);

  const nearestHaven = sorted[0];

  const badge = document.getElementById('gis-coords-badge');
  if (badge) {
    badge.innerText = `${userCoords.lat.toFixed(4)}, ${userCoords.lng.toFixed(4)}`;
  }

  const iframe = document.getElementById('google-maps-iframe');
  if (iframe) {
    iframe.src = `https://maps.google.com/maps?q=${userCoords.lat},${userCoords.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }

  const container = document.getElementById('evacuation-routes-list');
  if (container) {
    container.innerHTML = '';
    sorted.slice(0, 5).forEach(h => {
      const card = document.createElement('div');
      let capClass = 'text-accentGreen';
      if (h.status === 'Siaga') capClass = 'text-accentAmber';
      if (h.status === 'Penuh') capClass = 'text-accentRed';

      card.className = 'glass-card p-3 rounded-xl border border-white/5 flex items-center justify-between gap-3 text-xs';
      card.innerHTML = `
        <div class="space-y-1">
          <h4 class="font-bold text-slate-100">${h.name}</h4>
          <div class="flex flex-wrap gap-2 text-[10px] text-secGray font-medium">
            <span><i data-lucide="navigation" class="w-3 h-3 inline mr-1 text-accentBlue"></i>${h.actualDistance.toFixed(1)} km</span>
            <span><i data-lucide="clock" class="w-3 h-3 inline mr-1 text-accentGreen"></i>${h.time}</span>
            <span><i data-lucide="users" class="w-3 h-3 inline mr-1 text-accentGreen"></i>${h.cap}</span>
          </div>
        </div>
        <div class="flex flex-col items-end gap-1.5 shrink-0">
          <span class="text-[8px] font-bold px-1.5 py-0.5 rounded border border-white/10 ${capClass}">${h.status.toUpperCase()}</span>
          <a href="https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${h.lat},${h.lng}&travelmode=driving" target="_blank" class="bg-accentBlue/20 hover:bg-accentBlue hover:text-white text-accentBlue font-bold px-2 py-1 rounded text-[9px] transition-all flex items-center gap-0.5">
            <i data-lucide="milestone" class="w-3 h-3"></i> Navigasi
          </a>
        </div>
      `;
      container.appendChild(card);
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  const title = document.getElementById('evacuation-card-title');
  if (title) {
    title.innerText = 'Titik Evakuasi Terdekat (Berbasis Lokasi Anda)';
  }

  const adviceBox = document.getElementById('evacuation-advice');
  if (adviceBox) {
    adviceBox.innerHTML = '<p class="text-slate-300 text-xs">Menentukan tujuan evakuasi terdekat...</p>';
  }

  return nearestHaven;
}

async function generateEvacuationAdvice(userCoords, nearestHaven) {
  const adviceBox = document.getElementById('evacuation-advice');
  if (!adviceBox) return;

  const promptText = `Saya berada di koordinat ${userCoords.lat.toFixed(5)},${userCoords.lng.toFixed(5)} di Indonesia. Titik evakuasi terdekat adalah ${nearestHaven.name} (${nearestHaven.region}). Berikan arahan ringkas dan aman untuk menuju ke sana, termasuk mode transportasi terbaik, potensi hambatan, dan langkah kesiapsiagaan darurat.`;

  adviceBox.innerHTML = '<p class="text-slate-300 text-xs">Meminta arahan evakuasi dari AI...</p>';

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: promptText
              }
            ]
          }
        ]
      })
    });

    const result = await response.json();
    let aiText = '';

    if (Array.isArray(result?.candidates) && result.candidates.length) {
      aiText = result.candidates[0].content.map(item => item.text || '').join(' ');
    } else if (Array.isArray(result?.output) && result.output.length && Array.isArray(result.output[0]?.content)) {
      aiText = result.output[0].content.map(item => item.text || '').join(' ');
    }

    if (!aiText) {
      aiText = 'AI tidak dapat menghasilkan saran evakuasi saat ini. Silakan coba lagi nanti.';
    }

    adviceBox.innerHTML = `<p class="text-slate-300 text-xs">${aiText}</p>`;
  } catch (error) {
    console.error('Gemini API error:', error);
    adviceBox.innerHTML = '<p class="text-slate-300 text-xs">Gagal memuat arahan evakuasi AI. Silakan periksa koneksi atau coba lagi.</p>';
  }
}

function toggleGisLayer(layerName) {
  const layers = ['banjir', 'gempa', 'tsunami', 'longsor'];
  layers.forEach(lay => {
    const btn = document.getElementById(`layer-${lay}`);
    if (lay === layerName) {
      btn.className = "bg-accentRed text-white text-xs font-semibold py-1.5 px-3 rounded-lg border border-accentRed/30 flex items-center gap-1.5 transition-all";
    } else {
      btn.className = "bg-borderNavy text-secGray text-xs font-semibold py-1.5 px-3 rounded-lg border border-white/5 flex items-center gap-1.5 transition-all";
    }
  });

  // Update layer description box
  const infoBox = document.getElementById('gis-layer-info');
  if (layerName === 'banjir') {
    infoBox.innerHTML = `Menampilkan layer <span class="text-accentRed font-semibold">Banjir</span>. Wilayah berkerentanan tinggi diformat merah transparan. Data diperbarui real-time.`;
  } else if (layerName === 'gempa') {
    infoBox.innerHTML = `Menampilkan layer <span class="text-accentAmber font-semibold">Gempa Bumi</span>. Titik patahan (sesar aktif) Jawa & Sumatra ditandai dengan garis oranye tebal.`;
  } else if (layerName === 'tsunami') {
    infoBox.innerHTML = `Menampilkan layer <span class="text-accentBlue font-semibold">Tsunami</span>. Garis pantai selatan Jawa, Bali, dan barat Sumatra bertanda risiko gelombang tinggi.`;
  } else {
    infoBox.innerHTML = `Menampilkan layer <span class="text-accentAmber font-semibold">Tanah Longsor</span>. Wilayah bergunung dengan kemiringan curam berwarna kuning/oranye.`;
  }

  showToast(`Layer spasial ${layerName.toUpperCase()} aktif`, 'warning');
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

// ==================== DYNAMIC DATA RENDERERS ====================
function renderArchives() {
  const container = document.getElementById('archives-list-container');
  if (!container) return;

  const searchQuery = document.getElementById('archive-search').value.toLowerCase();
  const filterType = document.getElementById('archive-filter-type').value;
  const filterClass = document.getElementById('archive-filter-classification').value;

  container.innerHTML = '';

  // Access check: Publik role only sees "Publik" classification
  const filtered = state.archives.filter(arc => {
    // Search match
    const matchesSearch = arc.title.toLowerCase().includes(searchQuery) || 
                          arc.description.toLowerCase().includes(searchQuery) ||
                          arc.location.toLowerCase().includes(searchQuery);
    
    // Type match
    const matchesType = filterType === 'Semua' || arc.disaster_type === filterType;
    
    // Classification match
    const matchesClass = filterClass === 'Semua' || arc.classification === filterClass;

    // RBAC Security Gate: If user role is "Publik", hide Internal/Rahasia data
    if (state.activeRole === 'Publik' && arc.classification !== 'Publik') {
      return false;
    }
    
    // Relawan can only see Publik & Internal, hide Rahasia
    if (state.activeRole === 'Relawan' && arc.classification === 'Rahasia') {
      return false;
    }

    return matchesSearch && matchesType && matchesClass;
  });

  document.getElementById('archive-count').innerText = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-secGray">
        <i data-lucide="archive-x" class="w-12 h-12 mx-auto mb-2 text-secGray opacity-50"></i>
        <p class="text-sm font-semibold">Tidak ada arsip yang cocok atau Anda tidak memiliki hak akses.</p>
      </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  filtered.forEach(arc => {
    let badgeClass = 'badge-publik';
    if (arc.classification === 'Internal') badgeClass = 'badge-internal';
    if (arc.classification === 'Rahasia') badgeClass = 'badge-rahasia';

    const card = document.createElement('div');
    card.className = 'glass-card p-4 rounded-xl border border-white/5 space-y-3';
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <div>
          <span class="text-[9px] font-bold uppercase tracking-widest text-accentBlue bg-accentBlue/10 border border-accentBlue/20 px-2 py-0.5 rounded">${arc.disaster_type}</span>
          <h4 class="font-bold text-sm text-slate-100 mt-1">${arc.title}</h4>
        </div>
        <span class="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${badgeClass}">
          ${arc.classification}
        </span>
      </div>
      <p class="text-xs text-secGray leading-relaxed">${arc.description}</p>
      <div class="flex flex-wrap items-center justify-between gap-2 text-[10px] text-secGray border-t border-borderNavy pt-2.5">
        <div class="flex items-center gap-3">
          <span><i data-lucide="calendar" class="w-3.5 h-3.5 inline mr-1"></i>${arc.event_date}</span>
          <span><i data-lucide="map-pin" class="w-3.5 h-3.5 inline mr-1"></i>${arc.location}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-mono text-[9px] bg-borderNavy px-2 py-0.5 rounded border border-white/5">${arc.metadata.code}</span>
          <button onclick="downloadArchiveMock('${arc.title}')" class="text-accentBlue hover:underline flex items-center gap-1 font-semibold">
            <i data-lucide="download" class="w-3 h-3"></i> Unduh
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

function filterArchives() {
  renderArchives();
}

function renderOperations() {
  const container = document.getElementById('operations-list-container');
  if (!container) return;

  container.innerHTML = '';
  document.getElementById('operations-count').innerText = `${state.operations.length} Laporan Lapangan`;

  state.operations.forEach(op => {
    let logClass = 'bg-accentGreen/10 border-accentGreen text-accentGreen';
    let pulseStyle = '';
    
    if (op.logistics_status === 'Kurang') {
      logClass = 'bg-accentAmber/10 border-accentAmber text-accentAmber';
    } else if (op.logistics_status === 'Kritis') {
      logClass = 'bg-accentRed/10 border-accentRed text-accentRed pulse-red';
    }

    const card = document.createElement('div');
    card.className = 'glass-card p-4 rounded-xl border border-white/5 space-y-3';
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <div>
          <h4 class="font-bold text-sm text-slate-100">${op.location}</h4>
          <span class="text-[10px] text-secGray mt-0.5 block">Dilaporkan oleh: <strong>${op.reported_by}</strong> (${op.reported_at})</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="text-[9px] font-bold px-2 py-0.5 rounded border border-white/10 uppercase tracking-widest ${op.status === 'Verified' ? 'text-accentGreen bg-accentGreen/5' : 'text-accentAmber bg-accentAmber/5'}">
            ${op.status === 'Verified' ? 'TERVERIFIKASI' : 'PENDING'}
          </span>
        </div>
      </div>
      <p class="text-xs text-slate-300 leading-relaxed">${op.notes}</p>
      
      <div class="grid grid-cols-3 gap-2 border-t border-borderNavy pt-2.5 text-[10px]">
        <div class="p-2 bg-borderNavy/30 rounded-lg border border-white/5 text-center">
          <span class="text-secGray block text-[8px] uppercase font-bold">Evakuasi</span>
          <span class="font-bold text-white text-sm">${op.evacuees} Jiwa</span>
        </div>
        <div class="p-2 bg-borderNavy/30 rounded-lg border border-white/5 text-center flex flex-col justify-between">
          <span class="text-secGray block text-[8px] uppercase font-bold">Logistik</span>
          <span class="font-bold uppercase ${op.logistics_status === 'Kritis' ? 'text-accentRed' : op.logistics_status === 'Kurang' ? 'text-accentAmber' : 'text-accentGreen'}">${op.logistics_status}</span>
        </div>
        <div class="p-2 bg-borderNavy/30 rounded-lg border border-white/5 text-center flex flex-col justify-center gap-1">
          <span class="text-secGray block text-[8px] uppercase font-bold">Spasial</span>
          <a href="https://maps.google.com/?q=${op.lat},${op.lng}" target="_blank" class="text-accentBlue hover:underline font-mono text-[9px] flex items-center justify-center gap-0.5">
            <i data-lucide="external-link" class="w-3 h-3"></i> ${op.lat},${op.lng}
          </a>
        </div>
      </div>

      <!-- Quick Action: Verification workflow for authorities -->
      ${(state.activeRole === 'Admin' || state.activeRole === 'BPBD') && op.status !== 'Verified' ? `
        <div class="flex justify-end pt-1">
          <button onclick="verifyOperation('${op.id}')" class="bg-accentGreen hover:bg-emerald-600 text-deepNavy font-bold px-3 py-1.5 rounded-lg text-[10px] transition-colors flex items-center gap-1">
            <i data-lucide="check" class="w-3.5 h-3.5"></i> Verifikasi Data Lapangan
          </button>
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }}

function verifyOperation(opId) {
  const op = state.operations.find(o => o.id === opId);
  if (op) {
    op.status = 'Verified';
    
    // Log to Audit Trail
    state.auditLogs.unshift({
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
      user: `${state.activeRole} Otoritas`,
      action: `Verifikasi Laporan Lapangan ${opId}`,
      status: 'Internal',
      details: `Laporan di sektor ${op.location} ditandai aman & valid`
    });

    renderOperations();
    renderAuditTrail();
    showToast('Data operasi berhasil diverifikasi!', 'success');
  }
}

function renderCollaborationMatrix() {
  const tbody = document.getElementById('collab-matrix-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  
  // Renders data requiring approval/verification from different agencies
  const pendingData = [
    { id: 'DATA-091', agency: 'BMKG', title: 'Data Telemetri Pasang Air Laut Pamanukan', security: 'Publik', date: '17 Mei 2026', status: 'Pending Review' },
    { id: 'DATA-092', agency: 'ANRI', title: 'Administrasi Kebijakan Pasca Banjir Citarum 1996', security: 'Internal', date: '16 Mei 2026', status: 'Pending Review' },
    { id: 'DATA-093', agency: 'BPBD Subang', title: 'Peta Pengungsian Sektor C (Rawan Longsor)', security: 'Rahasia', date: '15 Mei 2026', status: 'Approved' }
  ];

  const pendingCount = pendingData.filter(d => d.status === 'Pending Review').length;
  document.getElementById('collab-pending-count').innerText = `${pendingCount} Data`;

  pendingData.forEach(d => {
    let rowClass = 'hover:bg-borderNavy/10 transition-colors';
    let badgeSecClass = 'badge-publik';
    if (d.security === 'Internal') badgeSecClass = 'badge-internal';
    if (d.security === 'Rahasia') badgeSecClass = 'badge-rahasia';

    const tr = document.createElement('tr');
    tr.className = rowClass;
    tr.innerHTML = `
      <td class="p-3.5 font-mono font-bold text-accentBlue">${d.id}</td>
      <td class="p-3.5 font-semibold text-slate-200">${d.agency}</td>
      <td class="p-3.5 text-secGray font-medium max-w-xs truncate">${d.title}</td>
      <td class="p-3.5">
        <span class="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${badgeSecClass}">${d.security}</span>
      </td>
      <td class="p-3.5 text-secGray font-mono text-[10px]">${d.date}</td>
      <td class="p-3.5">
        <span class="text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${d.status === 'Approved' ? 'bg-accentGreen/15 text-accentGreen' : 'bg-accentAmber/15 text-accentAmber'}">
          ${d.status}
        </span>
      </td>
      <td class="p-3.5 text-right flex justify-end gap-1.5">
        ${d.status === 'Pending Review' ? `
          <button onclick="approveCollabData('${d.id}')" class="bg-accentGreen/20 hover:bg-accentGreen text-accentGreen hover:text-deepNavy font-bold px-2.5 py-1 rounded text-[10px] transition-all flex items-center gap-0.5">
            <i data-lucide="check" class="w-3 h-3"></i> Setujui
          </button>
          <button onclick="rejectCollabData('${d.id}')" class="bg-accentRed/20 hover:bg-accentRed text-accentRed hover:text-white font-bold px-2.5 py-1 rounded text-[10px] transition-all flex items-center gap-0.5">
            <i data-lucide="x" class="w-3 h-3"></i> Revisi
          </button>
        ` : `
          <span class="text-[10px] text-accentGreen font-semibold flex items-center gap-1"><i data-lucide="shield-check" class="w-4 h-4"></i> Data Sah</span>
        `}
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

function approveCollabData(id) {
  showToast(`Data ${id} telah disetujui & dipromosikan ke arsip utama!`, 'success');
  // Refresh Matrix
  setTimeout(() => {
    renderCollaborationMatrix();
  }, 300);
}

function rejectCollabData(id) {
  showToast(`Permohonan revisi data ${id} dikirim ke instansi pengunggah.`, 'warning');
}

function renderAuditTrail() {
  const container = document.getElementById('audit-trail-container');
  if (!container) return;

  container.innerHTML = '';
  
  state.auditLogs.forEach(log => {
    let secBadge = 'badge-publik';
    if (log.status === 'Internal') secBadge = 'badge-internal';
    if (log.status === 'Rahasia') secBadge = 'badge-rahasia';

    const card = document.createElement('div');
    card.className = 'glass-card p-3 rounded-xl border border-white/5 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3';
    card.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="text-[9px] font-mono text-secGray">${log.timestamp}</span>
          <span class="text-[10px] font-bold text-white">${log.user}</span>
        </div>
        <p class="text-slate-300 font-semibold">${log.action}</p>
        <p class="text-[10px] text-secGray">${log.details}</p>
      </div>
      <span class="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${secBadge} self-end sm:self-center shrink-0">
        ${log.status}
      </span>
    `;
    container.appendChild(card);
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

function renderSops() {
  const container = document.getElementById('sops-list-container');
  if (!container) return;

  container.innerHTML = '';
  document.getElementById('sop-count').innerText = `${state.sops.length} SOP Tersimpan`;

  state.sops.forEach(sop => {
    const card = document.createElement('div');
    card.className = 'glass-card p-4 rounded-xl border border-white/5 space-y-3';
    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <span class="text-[9px] font-bold text-accentAmber bg-accentAmber/10 border border-accentAmber/20 px-2 py-0.5 rounded">${sop.disaster_type}</span>
          <h4 class="font-bold text-sm text-slate-100 mt-1">${sop.title}</h4>
        </div>
        <span class="text-[10px] text-secGray font-mono">${sop.source} (${sop.year})</span>
      </div>
      <p class="text-xs text-secGray leading-relaxed">${sop.summary}</p>
      
      <!-- Collapsible Steps List -->
      <div class="space-y-1.5 pt-2 border-t border-borderNavy">
        <span class="text-[10px] font-bold text-white block uppercase tracking-wider">Tahapan Taktis Protokol:</span>
        <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1 pl-1">
          ${sop.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    `;
    container.appendChild(card);
  });
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

// ==================== ACTIONS & FORMS HANDLERS ====================
function handleArchiveUpload(event) {
  event.preventDefault();

  const title = document.getElementById('arc-title').value;
  const type = document.getElementById('arc-type').value;
  const classification = document.getElementById('arc-classification').value;
  const date = document.getElementById('arc-date').value;
  const location = document.getElementById('arc-location').value;
  const desc = document.getElementById('arc-desc').value;

  const newId = `ARC-00${state.archives.length + 1}`;
  
  const newArchive = {
    id: newId,
    title,
    disaster_type: type,
    event_date: date,
    location,
    classification,
    uploaded_by: `${state.activeRole} Officer`,
    description: desc,
    metadata: { code: `SEDAF-${type.slice(0, 2).toUpperCase()}/${new Date().getFullYear()}`, page_count: 1, document_type: 'Arsip Lapangan' }
  };

  state.archives.unshift(newArchive);

  // Increment counters
  const currentCount = parseInt(document.getElementById('stat-archives').innerText.replace(',', '')) || 0;
  document.getElementById('stat-archives').innerText = (currentCount + 1).toLocaleString();

  // Audit trail entry
  state.auditLogs.unshift({
    timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
    user: `${state.activeRole} Officer`,
    action: `Unggah Berkas Baru ${newId}`,
    status: classification,
    details: `Judul: ${title} (${location})`
  });

  // Reset form
  document.getElementById('archive-upload-form').reset();
  
  showToast('Arsip Berhasil Diunggah & Dikatalogisasi!', 'success');
  
  // Render updates & switch tab back
  renderArchives();
  renderAuditTrail();
  switchView('archives');
}

function handleOperationSubmit(event) {
  event.preventDefault();

  const location = document.getElementById('op-location').value;
  const evacuees = parseInt(document.getElementById('op-evacuees').value);
  const logistics = document.getElementById('op-logistics').value;
  const lat = document.getElementById('op-lat').value;
  const lng = document.getElementById('op-lng').value;
  const notes = document.getElementById('op-notes').value;

  const newId = `OP-10${state.operations.length + 1}`;

  const newOp = {
    id: newId,
    location,
    evacuees,
    logistics_status: logistics,
    lat,
    lng,
    notes,
    reported_by: `${state.activeRole} Field Team`,
    reported_at: new Date().toISOString().replace('T', ' ').slice(0, 16),
    status: 'Pending_Verification'
  };

  state.operations.unshift(newOp);

  // Increment counters
  const currentOpCount = parseInt(document.getElementById('stat-operations').innerText) || 0;
  document.getElementById('stat-operations').innerText = currentOpCount + 1;

  // Audit log
  state.auditLogs.unshift({
    timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
    user: `${state.activeRole} Field Team`,
    action: `Kirim Laporan Lapangan ${newId}`,
    status: 'Internal',
    details: `Sektor: ${location} | Evakuasi: ${evacuees} Jiwa`
  });

  // Reset form
  document.getElementById('operation-report-form').reset();

  showToast('Laporan Operasi Terkirim & Mengantre Verifikasi!', 'success');

  // Render updates
  renderOperations();
  renderAuditTrail();
}

function changeUserRole(role) {
  state.activeRole = role;
  showToast(`Role Otorisasi Diubah: ${role}`, 'warning');

  // Update profile visual values dynamically
  const profileName = document.getElementById('profile-name');
  const profileInst = document.getElementById('profile-institution');
  const profileBadge = document.getElementById('profile-role-badge');
  const profileScope = document.getElementById('profile-scope');
  const profileEmail = document.getElementById('profile-email');

  if (role === 'Admin') {
    profileName.innerText = 'Ir. H. Dwi Wahyuni, M.Si';
    profileInst.innerText = 'BNPB / Kepala Sekretariat Nasional';
    profileBadge.innerText = 'Role: Nasional Admin';
    profileScope.innerText = 'Seluruh Akses Publik, Internal & Rahasia Negara';
    profileEmail.innerText = 'dwi.wahyuni@bnpb.go.id';
  } else if (role === 'BPBD') {
    profileName.innerText = 'Kolonel (TNI) Dr. Haryanto';
    profileInst.innerText = 'BPBD / Komando Penanganan Darurat';
    profileBadge.innerText = 'Role: BNPB / BPBD';
    profileScope.innerText = 'Tingkat Internal & Rahasia Lapangan';
    profileEmail.innerText = 'haryanto@bpbd.go.id';
  } else if (role === 'BMKG') {
    profileName.innerText = 'Dr. Andi Pratama (Sensor Lab)';
    profileInst.innerText = 'BMKG / Divisi Prediksi Meteorologi';
    profileBadge.innerText = 'Role: BMKG (Sensor)';
    profileScope.innerText = 'Akses Data Telemetri & Sensor Spasial';
    profileEmail.innerText = 'andi.pratama@bmkg.go.id';
  } else if (role === 'ANRI') {
    profileName.innerText = 'Dra. Retno Wulandari';
    profileInst.innerText = 'ANRI / Kepala Seksi Arsip Kebencanaan';
    profileBadge.innerText = 'Role: ANRI (Arsiparis)';
    profileScope.innerText = 'Kurasi Arsip, Unggah & Validasi Metadata';
    profileEmail.innerText = 'retno.wulandari@anri.go.id';
  } else if (role === 'TNI_Polri') {
    profileName.innerText = 'Letkol (Inf) Bagus Setiawan';
    profileInst.innerText = 'KODIM 0605 / Komando Operasi Bhakti';
    profileBadge.innerText = 'Role: TNI / POLRI';
    profileScope.innerText = 'Operasi Evakuasi Lapangan & Keamanan';
    profileEmail.innerText = 'bagus.setiawan@mil.id';
  } else if (role === 'Relawan') {
    profileName.innerText = 'Fajar Ramadhan (Koordinator)';
    profileInst.innerText = 'Relawan Sipil Pantura / Rescue Jabar';
    profileBadge.innerText = 'Role: Relawan';
    profileScope.innerText = 'Pengisian Laporan Lapangan & Logistik';
    profileEmail.innerText = 'fajar.rescue@gmail.com';
  } else {
    profileName.innerText = 'Masyarakat Umum / Publik';
    profileInst.innerText = 'Warga Negara Republik Indonesia';
    profileBadge.innerText = 'Role: Publik';
    profileScope.innerText = 'Hanya Akses Informasi Publik';
    profileEmail.innerText = 'publik@sedaf.id';
  }

  // Update navigation items visibility based on RBAC roles
  const adminNav = document.getElementById('nav-admin-panel');
  if (role === 'Publik' || role === 'Relawan') {
    adminNav.style.display = 'none';
  } else {
    adminNav.style.display = 'flex';
  }

  // Update Dynamic Dashboard Role Mandate Panel
  renderRoleMandatePanel(role);

  // Refresh lists & tables to hide/show data according to security permissions
  renderArchives();
  renderOperations();
  renderCollaborationMatrix();
  renderAuditTrail();
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

// ==================== DYNAMIC ROLE MANDATES & TACTICAL QUICK ACTIONS ====================
function renderRoleMandatePanel(role) {
  const container = document.getElementById('role-mandate-panel');
  if (!container) return;

  const roleSpecs = {
    'Admin': {
      title: 'Otoritas Tertinggi: BNPB Nasional Admin',
      clearance: 'RAHASIA NEGARA',
      borderClass: 'border-accentRed',
      badgeClass: 'bg-accentRed/15 text-accentRed border border-accentRed/30',
      mandate: 'Mengawasi koordinasi antarkementerian, mengaudit log sistem keamanan data, dan memvalidasi akses informasi kebencanaan taktis sensitif.',
      actions: [
        { label: 'Audit Jejak Sistem', key: 'audit', icon: 'shield' },
        { label: 'Paksa Sinkronisasi AI', key: 'forcesync', icon: 'sparkles' },
        { label: 'Kelola Hak Akses', key: 'permissions', icon: 'key' }
      ]
    },
    'BPBD': {
      title: 'Komando Lapangan: BNPB / BPBD Daerah',
      clearance: 'INTERNAL & TAKTIS',
      borderClass: 'border-accentAmber',
      badgeClass: 'bg-accentAmber/15 text-accentAmber border border-accentAmber/30',
      mandate: 'Memimpin mitigasi darurat taktis daerah, mengumumkan siaga bencana, dan memvalidasi laporan insiden lapangan dari jaringan relawan.',
      actions: [
        { label: 'Verifikasi Laporan', key: 'pending', icon: 'check-circle' },
        { label: 'Deklarasikan Siaga 1', key: 'siaga', icon: 'alert-triangle' },
        { label: 'Alokasikan Logistik', key: 'alloc', icon: 'truck' }
      ]
    },
    'BMKG': {
      title: 'Kanal Data Sensor: Divisi Geofisika BMKG',
      clearance: 'DATA TELEMETRI',
      borderClass: 'border-accentBlue',
      badgeClass: 'bg-accentBlue/15 text-accentBlue border border-accentBlue/30',
      mandate: 'Memonitor sensor gempa bumi, anomali laut, curah hujan, pergerakan sesar patahan aktif, dan mengalirkan data spasial ke portal GIS.',
      actions: [
        { label: 'Kalibrasi Seismograf', key: 'calibrate', icon: 'sliders' },
        { label: 'Simulasi Gempa Lembang', key: 'simulate', icon: 'activity' },
        { label: 'Buka Layer Spasial', key: 'layertoggle', icon: 'map' }
      ]
    },
    'ANRI': {
      title: 'Kurasi Sejarah: Arsiparis Kebencanaan ANRI',
      clearance: 'RESTU HISTORIS',
      borderClass: 'border-purple-500',
      badgeClass: 'bg-purple-500/15 text-purple-500 border border-purple-500/30',
      mandate: 'Mengumpulkan, mengklasifikasi dokumen sejarah bencana multidekade, mendigitalisasi catatan lama 1996, dan menginventarisasi metadata.',
      actions: [
        { label: 'Scan Laporan Fisik', key: 'scan', icon: 'file-text' },
        { label: 'Katalogisasi Berkas', key: 'catalog', icon: 'plus-circle' },
        { label: 'Ekspor Data Sejarah', key: 'export', icon: 'download' }
      ]
    },
    'TNI_Polri': {
      title: 'Kekuatan Taktis: KODIM & Satgas Kepolisian',
      clearance: 'KEAMANAN & EVAKUASI',
      borderClass: 'border-accentGreen',
      badgeClass: 'bg-accentGreen/15 text-accentGreen border border-accentGreen/30',
      mandate: 'Mengamankan perimeter bencana, membangun infrastruktur darurat/transit, mengawal pemindahan logistik bantuan, dan mendata okupansi Safe Havens.',
      actions: [
        { label: 'Kawal Posko Pengungsi', key: 'forces', icon: 'shield-check' },
        { label: 'Buka Jalur Evakuasi', key: 'clearpath', icon: 'hammer' },
        { label: 'Petakan Rute Taktis', key: 'tactical_map', icon: 'route' }
      ]
    },
    'Relawan': {
      title: 'Aktivis Operasi: Relawan Sipil Kemanusiaan',
      clearance: 'LAPORAN LAPANGAN',
      borderClass: 'border-yellow-400',
      badgeClass: 'bg-yellow-400/15 text-yellow-600 dark:text-yellow-400 border border-yellow-400/30',
      mandate: 'Membantu proses evakuasi langsung, mencatat kebutuhan logistik mendesak posko pengungsian, dan mengirim laporan koordinat kejadian nyata.',
      actions: [
        { label: 'Buat Laporan Baru', key: 'new_report', icon: 'file-plus' },
        { label: 'Minta Ambulans Medis', key: 'medical', icon: 'heart-handshake' },
        { label: 'Pantau Stok Posko', key: 'stock', icon: 'clipboard-list' }
      ]
    },
    'Publik': {
      title: 'Masyarakat Sipil & Warga Negara',
      clearance: 'INFORMASI PUBLIK',
      borderClass: 'border-slate-400',
      badgeClass: 'bg-slate-400/15 text-slate-600 dark:text-slate-400 border border-slate-400/30',
      mandate: 'Mengakses panduan kebencanaan mandiri, memetakan rute evakuasi terdekat ke Safe Haven, dan menyumbangkan ingatan bencana lokal warga.',
      actions: [
        { label: 'Rute Evakuasi Terdekat', key: 'find_haven', icon: 'compass' },
        { label: 'Kirim Testimoni Lokal', key: 'submit_story', icon: 'message-square' },
        { label: 'Unduh Buku Mitigasi', key: 'download_mitigation', icon: 'file' }
      ]
    }
  };

  const spec = roleSpecs[role] || roleSpecs['Publik'];

  container.className = `glass-panel p-5 rounded-3xl border-l-4 ${spec.borderClass} border-t border-r border-b border-borderNavy space-y-4 shadow-xl transition-all duration-300`;
  container.innerHTML = `
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
      <div class="space-y-1.5">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${spec.badgeClass}">${spec.clearance}</span>
          <h3 class="font-extrabold text-sm text-slate-100 font-outfit">${spec.title}</h3>
        </div>
        <p class="text-xs text-secGray leading-relaxed max-w-4xl"><strong class="text-slate-100">MANDAT UTAMA:</strong> ${spec.mandate}</p>
      </div>
      
      <!-- Interactive Role-based Tools Grid -->
      <div class="flex flex-wrap gap-2 shrink-0 w-full lg:w-auto">
        ${spec.actions.map(act => `
          <button onclick="triggerRoleAction('${role}', '${act.key}')" class="bg-borderNavy hover:bg-accentBlue hover:text-white border border-white/5 hover:border-accentBlue text-[10px] font-bold py-2 px-3 rounded-xl transition-all flex items-center gap-1.5 text-slate-300">
            <i data-lucide="${act.icon}" class="w-3.5 h-3.5"></i>
            ${act.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

function triggerRoleAction(role, actionKey) {
  if (role === 'Admin') {
    if (actionKey === 'audit') {
      switchView('admin-panel');
      showToast('Menampilkan halaman Audit Log Otoritas Nasional', 'success');
    } else if (actionKey === 'forcesync') {
      runAiPrediction();
      showToast('AI Force-Sync: Model adaptasi disinkronkan ulang dengan 1,420 arsip terbaru!', 'success');
    } else if (actionKey === 'permissions') {
      showToast('Akses ditolak: Portal manajemen hak akses memerlukan koneksi VPN Kementerian.', 'danger');
    }
  } else if (role === 'BPBD') {
    if (actionKey === 'pending') {
      switchView('operations');
      const container = document.getElementById('operations-list-container');
      if (container) container.scrollIntoView({ behavior: 'smooth' });
      showToast('Menampilkan daftar Laporan Operasi Lapangan', 'success');
    } else if (actionKey === 'siaga') {
      showToast('Deklarasi SIAGA 1 diumumkan ke seluruh posko sektor Citarum!', 'warning');
    } else if (actionKey === 'alloc') {
      showToast('Logistik dialokasikan ulang: Mengirim perahu karet & dapur umum ke Sektor B.', 'success');
    }
  } else if (role === 'BMKG') {
    if (actionKey === 'calibrate') {
      showToast('Sensor Seismik Sesar Lembang dikalibrasi. Kepekaan sensor: 0.1 mm deformasi.', 'success');
    } else if (actionKey === 'simulate') {
      showToast('Simulasi Sesar Lembang 6.8 SR dijalankan. Kawasan Bandung Utara terancam deformasi!', 'warning');
    } else if (actionKey === 'layertoggle') {
      switchView('gis');
      toggleGisLayer('gempa');
      showToast('Menampilkan Peta Spasial Gempa & Sesar BMKG', 'success');
    }
  } else if (role === 'ANRI') {
    if (actionKey === 'scan') {
      showToast('PDF "Arsip Laporan Banjir Pamanukan 1974" diunggah & dikatalogisasi.', 'success');
    } else if (actionKey === 'catalog') {
      switchView('archives');
      const container = document.getElementById('archives-list-container');
      if (container) container.scrollIntoView({ behavior: 'smooth' });
      showToast('Katalogisasi Arsip Kebencanaan Baru dibuka', 'success');
    } else if (actionKey === 'export') {
      triggerExportData('archives');
    }
  } else if (role === 'TNI_Polri') {
    if (actionKey === 'forces') {
      showToast('Satuan KODIM 0605 dikerahkan menjaga ketertiban logistik posko.', 'success');
    } else if (actionKey === 'clearpath') {
      showToast('Unit Zeni Konstruksi dikerahkan membersihkan jalur longsor Sukabumi.', 'warning');
    } else if (actionKey === 'tactical_map') {
      switchView('gis');
      showToast('Membuka rute taktis militer & jalur evakuasi', 'success');
    }
  } else if (role === 'Relawan') {
    if (actionKey === 'new_report') {
      switchView('operations');
      const form = document.getElementById('operation-report-form');
      if (form) form.scrollIntoView({ behavior: 'smooth' });
      showToast('Membuka formulir laporan insiden lapangan baru', 'success');
    } else if (actionKey === 'medical') {
      showToast('Sinyal DARURAT dikirim: Meminta ambulans darurat di Dusun Ciherang!', 'danger');
    } else if (actionKey === 'stock') {
      showToast('Stok logistik GOR Pamanukan terdata kritis untuk 2 hari kedepan.', 'warning');
    }
  } else if (role === 'Publik') {
    if (actionKey === 'find_haven') {
      switchView('gis');
      const list = document.getElementById('evacuation-routes-list');
      if (list) list.scrollIntoView({ behavior: 'smooth' });
      showToast('Menampilkan rute evakuasi Safe Haven terdekat', 'success');
    } else if (actionKey === 'submit_story') {
      switchView('tacit-knowledge');
      const input = document.getElementById('wit-transcript');
      if (input) input.scrollIntoView({ behavior: 'smooth' });
      showToast('Silakan bagikan memori sejarah bencana Anda', 'success');
    } else if (actionKey === 'download_mitigation') {
      showToast('Mengunduh Buku Saku Kesiapsiagaan Bencana Mandiri BNPB.pdf (1.4MB)', 'success');
    }
  }
}

// ==================== TACIT TO EXPLICIT KNOWLEDGE CONVERTER ====================
let tempGeneratedSop = null;

function convertTacitToExplicit() {
  const name = document.getElementById('wit-name').value;
  const disaster = document.getElementById('wit-disaster').value;
  const transcript = document.getElementById('wit-transcript').value;

  if (!name || !disaster || !transcript) {
    showToast('Lengkapi seluruh formulir wawancara!', 'danger');
    return;
  }

  // Trigger loading visual states
  showToast('AI memproses bahasa transkrip...', 'warning');

  setTimeout(() => {
    // Simulated NLP SOP extraction
    tempGeneratedSop = {
      title: `SOP Mitigasi Penyelamatan ${disaster} (${name})`,
      disaster_type: disaster.includes('Banjir') ? 'Banjir' : disaster.includes('Gempa') ? 'Gempa' : 'Longsor',
      source: `Wawancara Ahli: ${name}`,
      year: new Date().getFullYear().toString(),
      summary: `Prosedur aksi lokal adaptasi mitigasi taktis berbasis testimoni dan memori sejarah bencana oleh ${name}.`,
      steps: [
        'Aktivasi sistem peringatan dini manual (misal pukulan tiang listrik 3x cepat) saat terdeteksi anomali parit keruh.',
        'Evakuasi utama diarahkan menuju elevasi tanah tinggi di mushola/sektor utara wilayah.',
        'Hindari rute pematang sebelah barat akibat ancaman deformasi tanah lempung basah/longsor.',
        'Siapkan titik pertahanan tumpukan pasir penahan air di batas bantaran dalam waktu 30 menit.'
      ]
    };

    // Show output display container
    const resultBox = document.getElementById('sop-conversion-result');
    resultBox.classList.remove('hidden');
    
    document.getElementById('sop-res-title').innerText = tempGeneratedSop.title;
    document.getElementById('sop-res-content').innerHTML = `
      <p class="mb-2 italic text-secGray">"${transcript.slice(0, 120)}..."</p>
      <div class="space-y-1">
        <strong class="text-accentAmber uppercase text-[9px] tracking-wider block">Langkah SOP Yang Diekstraksi:</strong>
        <ol class="list-decimal list-inside pl-1 space-y-0.5">
          ${tempGeneratedSop.steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>
    `;

    showToast('SOP Berhasil Diformulasikan AI!', 'success');
    if (typeof applyTranslation !== 'undefined') {
      applyTranslation();
    }
  }, 1000);
}

function saveGeneratedSop() {
  if (tempGeneratedSop) {
    state.sops.unshift(tempGeneratedSop);
    
    // Audit Log
    state.auditLogs.unshift({
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
      user: 'AI NLP Parser',
      action: 'Promosi Testimoni Tacit ke SOP Formal',
      status: 'Publik',
      details: tempGeneratedSop.title
    });

    renderSops();
    renderAuditTrail();

    // Close output panel
    document.getElementById('sop-conversion-result').classList.add('hidden');
    tempGeneratedSop = null;

    showToast('SOP berhasil dimasukkan ke basis pengetahuan utama!', 'success');
  }
}

function discardSop() {
  document.getElementById('sop-conversion-result').classList.add('hidden');
  tempGeneratedSop = null;
  showToast('Draf SOP dibatalkan.', 'warning');
}

// ==================== DYNAMIC AI PREDICTIONS ENGINE ====================
const mockAiModels = [
  { region: 'Jawa', risk: 0.89, alert: 'EKSTRIM (Siaga Banjir Pesisir)', rec: 'Aktivasi pompa pembuang air di Pamanukan Hilir, perkuat sandbag tanggul Citarum.', insight: 'Mencocokkan curah hujan tinggi ekstrem saat ini dengan karakteristik banjir besar tahun 2007. Diperkirakan debit sungai Citarum akan meningkat tajam.' },
  { region: 'Sumatra', risk: 0.65, alert: 'SIAGA (Kerawanan Karhutla)', rec: 'Basahi lahan basah gambut terdegradasi di Riau & Jambi selatan.', insight: 'Anomali temperatur mikro di atas rata-rata 3 dekade menunjukkan peningkatan titik kering di areal perkebunan monokultur.' },
  { region: 'Sulawesi', risk: 0.54, alert: 'WASPADA (Pergerakan Tanah)', rec: 'Batasi lalu lintas lereng curam Sukabumi/Sigi pasca hujan lebat berkelanjutan.', insight: 'Integrasi data kemiringan tanah GIS (35 derajat) dengan data saturasi air tanah di atas 80% meningkatkan status pergeseran mikro.' },
  { region: 'Kalimantan', risk: 0.12, alert: 'AMAN / NORMAL', rec: 'Lakukan patroli visual rutin mingguan untuk pengawasan hutan adat.', insight: 'Stabilitas iklim basah terjaga dengan tutupan kanopi luas, minimalisasi limpasan limpah sungai.' }
];

function runAiPrediction() {
  const icon = document.getElementById('ai-spin-icon');
  icon.classList.add('animate-spin');

  showToast('Menjalankan korelasi model multi-dekade AI...', 'warning');

  setTimeout(() => {
    icon.classList.remove('animate-spin');
    
    // Refresh predictions view
    const grid = document.getElementById('ai-predictions-grid');
    if (!grid) return;

    grid.innerHTML = '';
    mockAiModels.forEach(m => {
      let riskColor = 'text-accentGreen bg-accentGreen/10 border-accentGreen/20';
      if (m.risk > 0.5 && m.risk < 0.8) riskColor = 'text-accentAmber bg-accentAmber/10 border-accentAmber/20';
      if (m.risk >= 0.8) riskColor = 'text-accentRed bg-accentRed/10 border-accentRed/20 pulse-red';

      const card = document.createElement('div');
      card.className = 'glass-card p-4 rounded-xl border border-white/5 space-y-2.5';
      card.innerHTML = `
        <div class="flex justify-between items-center border-b border-borderNavy pb-2">
          <span class="font-bold text-sm text-slate-100 flex items-center gap-1"><i data-lucide="map-pin" class="w-4 h-4 text-accentBlue"></i> Wilayah ${m.region}</span>
          <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${riskColor}">${m.alert}</span>
        </div>
        <div class="flex items-center justify-between text-xs">
          <span class="text-secGray">Nilai Indeks Risiko Adaptif:</span>
          <span class="font-mono font-bold text-slate-200">${m.risk.toFixed(2)} / 1.00</span>
        </div>
        <div class="text-[11px] space-y-1">
          <strong class="text-accentBlue font-bold block uppercase tracking-wider">Rekomendasi Aksi:</strong>
          <p class="text-slate-300 leading-relaxed">${m.rec}</p>
        </div>
      `;
      grid.appendChild(card);
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
    showToast('Simulasi & Prediksi AI Diperbarui!', 'success');
    if (typeof applyTranslation !== 'undefined') {
      applyTranslation();
    }
  }, 1000);
}

// ==================== DISCUSSION COORDINATION CHANNEL ====================
function postCollabComment() {
  const input = document.getElementById('collab-comment-input');
  const text = input.value;
  if (!text) return;

  const box = document.getElementById('collab-comments-box');
  const newMsg = document.createElement('div');
  newMsg.className = 'text-xs space-y-1 pl-4 border-l border-accentGreen animate-fadeIn';
  newMsg.innerHTML = `
    <div class="flex items-center justify-between text-secGray font-semibold text-[10px]">
      <span>[${state.activeRole}] Anda</span>
      <span>Baru saja</span>
    </div>
    <p class="text-slate-300">"${text}"</p>
  `;
  box.appendChild(newMsg);
  
  // Auto Scroll to bottom
  box.scrollTop = box.scrollHeight;
  input.value = '';
  showToast('Catatan kolaborasi dikirim!', 'success');
  if (typeof applyTranslation !== 'undefined') {
    applyTranslation();
  }
}

// ==================== AUTOMATED REPORTS & EXPORTS SYSTEM ====================
function exportData() {
  const format = document.getElementById('rep-format').value;
  const security = document.getElementById('rep-security').value;
  let dataStr = "";
  let filename = `SEDAF_Laporan_${new Date().toISOString().slice(0, 10)}`;

  if (format === 'JSON') {
    // Compile Memory States to JSON
    const payload = {
      export_meta: { timestamp: new Date().toISOString(), security_classification: security, exporter: state.activeRole },
      archives: state.archives.filter(a => security === 'Restricted' || a.classification === 'Publik'),
      operations: state.operations
    };
    dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
    filename += ".json";
  } else {
    // Compile Memory States to CSV
    let csvRows = ["ID,Judul,Jenis Bencana,Tanggal,Lokasi,Klasifikasi,Unggahan\n"];
    state.archives.forEach(a => {
      if (security === 'Restricted' || a.classification === 'Publik') {
        csvRows.push(`"${a.id}","${a.title}","${a.disaster_type}","${a.event_date}","${a.location}","${a.classification}","${a.uploaded_by}"\n`);
      }
    });
    dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvRows.join(''));
    filename += ".csv";
  }

  // Trigger Real Browser File Download
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast(`Berkas ${filename.toUpperCase()} Berhasil Diekspor!`, 'success');
}

function triggerPrintReport() {
  window.print();
}

function downloadArchiveMock(title) {
  showToast(`Mengunduh dokumen: "${title}"`, 'success');
}

// ==================== CHART INITIALIZATIONS ====================
function initCharts() {
  const ctx = document.getElementById('qualityChart');
  if (!ctx) return;

  // Destroy previous instance to avoid canvas re-render crashes
  if (state.qualityChartInstance) {
    state.qualityChartInstance.destroy();
  }

  const isLight = document.body.classList.contains('light-mode');
  const textColor = isLight ? '#64748B' : '#94A3B8';
  const borderColor = isLight ? '#FFFFFF' : '#141C33';

  // Render a clean Doughnut representing Data Completeness per Instansi
  state.qualityChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['BPBD', 'ANRI', 'BMKG', 'TNI/Polri'],
      datasets: [{
        data: [35, 25, 25, 15],
        backgroundColor: [
          '#EF476F', // Red warning
          '#3A86FF', // Deep Blue
          '#06D6A0', // Emerald Green
          '#FFD166'  // Yellow amber
        ],
        borderWidth: 1,
        borderColor: borderColor
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: textColor,
            font: { size: 10, family: 'Inter' }
          }
        }
      },
      cutout: '65%'
    }
  });
}

// ==================== PWA INSTALL LOGIC ====================
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to show the install button container
  const installContainer = document.getElementById('pwa-install-container');
  if (installContainer) {
    installContainer.classList.remove('hidden');
  }
});

const installBtn = document.getElementById('pwa-install-btn');
if (installBtn) {
  installBtn.addEventListener('click', (e) => {
    // Hide the app provided install promotion
    const installContainer = document.getElementById('pwa-install-container');
    if (installContainer) installContainer.classList.add('hidden');
    
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast('Terima kasih telah menginstal SEDAF PWA!', 'success');
      } else {
        showToast('Instalasi dibatalkan.', 'warning');
      }
      deferredPrompt = null;
    });
  });
}

// Online/Offline Listeners
window.addEventListener('online', () => {
  const status = document.getElementById('connection-status');
  if (status) {
    status.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-accentGreen pulse-green"></span> ONLINE`;
    status.className = "flex items-center gap-1.5 font-semibold text-accentGreen";
  }
  showToast('Koneksi internet terhubung kembali!', 'success');
});

window.addEventListener('offline', () => {
  const status = document.getElementById('connection-status');
  if (status) {
    status.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-accentRed pulse-red"></span> OFFLINE (LOCAL CACHE)`;
    status.className = "flex items-center gap-1.5 font-semibold text-accentRed";
  }
  showToast('Koneksi internet terputus. Bekerja dalam mode offline.', 'danger');
});

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  // Load Saved Theme Setting
  loadSavedTheme();

  // Navigation sidebar events
  const openSidebarBtn = document.getElementById('open-sidebar');
  const closeSidebarBtn = document.getElementById('close-sidebar');

  if (openSidebarBtn) {
    openSidebarBtn.addEventListener('click', openSidebarDrawer);
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeSidebarDrawer);
  }

  // Load Initial Lists & Charts
  renderArchives();
  renderOperations();
  renderCollaborationMatrix();
  renderAuditTrail();
  renderSops();
  runAiPrediction();

  // Load Default Evacuation Route and map (Jawa region by default)
  updateEvacuationRoutesAndMap('Jawa');

  // Render default BPBD mandate panel on startup
  renderRoleMandatePanel('BPBD');
  
  // Set default charts
  setTimeout(() => {
    initCharts();
  }, 100);

  // Load Saved Language Setting for Dashboard
  const savedDashboardLang = localStorage.getItem('sedaf-dashboard-lang') || 'id';
  setDashboardLanguage(savedDashboardLang, true); // Pass true to suppress toast on startup

  // Load Saved Global Language Setting
  const savedGlobalLang = localStorage.getItem('sedaf-global-lang') || 'id';
  if (savedGlobalLang === 'en') {
    setGlobalLanguage('en', true);
  }

  // Hide splash screen after singkat loading dan minta lokasi pengguna
  setTimeout(() => {
    hideSplashScreen();
    requestLocationAndUpdateEvacuation();
  }, 2400);

  // Register PWA Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('SEDAF ServiceWorker registered: ', reg.scope);
      }).catch((err) => {
        console.warn('SEDAF ServiceWorker registration failed: ', err);
      });
    });
  }
});

function hideSplashScreen() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;
  splash.classList.add('opacity-0');
  document.body.classList.remove('loading-active');
  setTimeout(() => {
    splash.style.visibility = 'hidden';
    splash.style.pointerEvents = 'none';
    if (splash.parentNode) {
      splash.parentNode.removeChild(splash);
    }
  }, 350);
}

// Toggle notifications box
function toggleNotificationPanel() {
  const box = document.getElementById('notification-box');
  if (box) {
    box.classList.toggle('hidden');
  }
}

function clearNotifications() {
  const list = document.getElementById('notification-list');
  if (list) {
    list.innerHTML = `<p class="text-center text-secGray py-6 text-[10px]">Tidak ada notifikasi baru.</p>`;
  }
  showToast('Seluruh notifikasi dibersihkan', 'success');
}

// ==================== DASHBOARD LANGUAGE TRANSLATION ====================
function setDashboardLanguage(lang, isStartup = false) {
  const translations = {
    id: {
      title: "Selamat Datang di SEDAF",
      desc: "Solusi berkelanjutan untuk manajemen risiko bencana di Indonesia melalui integrasi arsip iklim historis, data operasi lapangan, dan platform integrasi data.",
      btnGis: "Buka Peta Risiko GIS",
      btnAi: "Lihat Rekomendasi AI",
      btnHeritage: "Jelajahi Warisan"
    },
    en: {
      title: "Welcome to SEDAF",
      desc: "A sustainable solution for disaster risk management in Indonesia through the integration of historical ecological archives, field operations data, and a data integration platform.",
      btnGis: "Open GIS Risk Map",
      btnAi: "View AI Recommendations",
      btnHeritage: "Explore Heritage"
    }
  };

  const current = translations[lang] || translations.id;
  
  // Update texts
  const titleEl = document.getElementById('welcome-title');
  const descEl = document.getElementById('welcome-desc');
  const btnGisEl = document.getElementById('btn-text-gis');
  const btnAiEl = document.getElementById('btn-text-ai');
  const btnHeritageEl = document.getElementById('btn-text-heritage');

  if (titleEl) titleEl.innerText = current.title;
  if (descEl) descEl.innerText = current.desc;
  if (btnGisEl) btnGisEl.innerText = current.btnGis;
  if (btnAiEl) btnAiEl.innerText = current.btnAi;
  if (btnHeritageEl) btnHeritageEl.innerText = current.btnHeritage;

  // Toggle active button states
  const btnId = document.getElementById('lang-btn-id');
  const btnEn = document.getElementById('lang-btn-en');
  
  if (btnId && btnEn) {
    if (lang === 'en') {
      btnEn.classList.add('bg-accentBlue', 'text-white');
      btnEn.classList.remove('text-secGray');
      btnId.classList.remove('bg-accentBlue', 'text-white');
      btnId.classList.add('text-secGray');
    } else {
      btnId.classList.add('bg-accentBlue', 'text-white');
      btnId.classList.remove('text-secGray');
      btnEn.classList.remove('bg-accentBlue', 'text-white');
      btnEn.classList.add('text-secGray');
    }
  }

  // Save selection
  localStorage.setItem('sedaf-dashboard-lang', lang);
  if (!isStartup) {
    showToast(lang === 'en' ? 'Dashboard switched to English' : 'Dashboard diubah ke Bahasa Indonesia', 'success');
  }

  if (typeof currentLanguage !== 'undefined' && currentLanguage !== lang) {
    setGlobalLanguage(lang, true);
  }
}

// ==================== GLOBAL LANGUAGE TRANSLATION SYSTEM ====================
let currentLanguage = 'id';

const translationDictionary = {
  // Sidebar & Navigation
  "Dashboard Utama": "Main Dashboard",
  "Peta Risiko (GIS)": "Risk Map (GIS)",
  "Arsip Bencana": "Disaster Archives",
  "Data Operasi": "Operations Data",
  "Analitik AI": "AI Analytics",
  "SOP & Knowledge": "SOP & Knowledge Base",
  "Kolaborasi Instansi": "Agency Collaboration",
  "Laporan & Monitoring": "Reports & Monitoring",
  "Panel Admin": "Admin Panel",
  "Profil Pengguna": "User Profile",
  "Ensiklopedia Budaya": "Cultural Encyclopedia",
  "Instal Aplikasi PWA": "Install PWA App",
  "Konektivitas:": "Connectivity:",
  "ONLINE": "ONLINE",
  "OFFLINE (LOCAL CACHE)": "OFFLINE (LOCAL CACHE)",
  
  // Header
  "ALERT AKTIF": "ACTIVE ALERT",
  "Peringatan Dini: Potensi Banjir Pasang (Rob) di Pantura Jawa Barat 18-20 Mei.": "Early Warning: Potential Tidal Flood (Rob) in Northern Coast of West Java 18-20 May.",
  "Otorisasi:": "Authorization:",
  "Nasional Admin": "National Admin",
  "BNPB / BPBD": "BNPB / BPBD",
  "BMKG (Sensor)": "BMKG (Sensor)",
  "ANRI (Arsiparis)": "ANRI (Archivist)",
  "TNI / Polri": "TNI / Police",
  "Relawan Sipil": "Civil Volunteers",
  "Masyarakat Umum": "General Public",
  "Notifikasi Terkini": "Recent Notifications",
  "Hapus semua": "Clear all",
  
  // Dashboard view
  "Selamat Datang di SEDAF": "Welcome to SEDAF",
  "Solusi berkelanjutan untuk manajemen risiko bencana di Indonesia melalui integrasi arsip iklim historis, data operasi lapangan, dan platform integrasi data.": "A sustainable solution for disaster risk management in Indonesia through the integration of historical ecological archives, field operations data, and a data integration platform.",
  "Buka Peta Risiko GIS": "Open GIS Risk Map",
  "Lihat Rekomendasi AI": "View AI Recommendations",
  "Jelajahi Warisan": "Explore Heritage",
  "Bencana Aktif": "Active Disasters",
  "+4 wilayah baru hari ini": "+4 new regions today",
  "Arsip Historis": "Historical Archives",
  "100% Terindeks ANRI": "100% ANRI Indexed",
  "BPBD, TNI, POLRI aktif": "BPBD, TNI, POLRI active",
  "Kualitas Data": "Data Quality",
  "Indeks Kesiapan Tinggi": "High Readiness Index",
  "Visualisasi Spasial Mini (GIS Sandbox)": "Mini Spatial Visualization (GIS Sandbox)",
  "Peta regional interaktif. Klik wilayah untuk status risiko AI.": "Interactive regional map. Click region for AI risk status.",
  "Status Wilayah:": "Region Status:",
  "Indeks Risiko:": "Risk Index:",
  "Kesiapan & Kualitas Data": "Readiness & Data Quality",
  "Log Aktivitas Operasi": "Operation Activity Log",
  "REAL-TIME": "REAL-TIME",
  "Kelengkapan: 98%": "Completeness: 98%",
  "Audit Trail: Terverifikasi": "Audit Trail: Verified",
  
  // GIS View
  "Sistem Geografis Interaktif (GIS)": "Interactive Geographical System (GIS)",
  "Simulasi data spasial-temporal indeks risiko kebencanaan Indonesia.": "Spatiotemporal simulation of Indonesian disaster risk index.",
  "Layer:": "Layer:",
  "Banjir": "Flood",
  "Gempa": "Earthquake",
  "Tsunami": "Tsunami",
  "Longsor": "Landslide",
  "Informasi Layer Aktif": "Active Layer Information",
  "Wilayah Terpilih": "Selected Region",
  "Kerentanan & Kejadian": "Vulnerability & Events",
  "Zona Hotspot Mikro": "Micro Hotspot Zone",
  "Google Maps Live Viewport": "Google Maps Live Viewport",
  "Titik Evakuasi Terdekat (Safe Havens)": "Nearest Evacuation Points (Safe Havens)",
  "Titik Evakuasi Terdekat (Berbasis Lokasi Anda)": "Nearest Evacuation Points (Based on Your Location)",
  "Arah Rute Taktis": "Tactical Route Directions",
  "Navigasi": "Navigate",
  "Gunakan Lokasi Saya": "Use My Location",
  "Menentukan tujuan evakuasi terdekat...": "Determining the nearest evacuation destination...",
  "Meminta arahan evakuasi dari AI...": "Requesting evacuation guidance from AI...",
  "Akses lokasi tidak tersedia. Silakan gunakan tombol \"Gunakan Lokasi Saya\" jika Anda ingin mencoba lagi.": "Location access is unavailable. Please use the \"Use My Location\" button if you want to try again.",
  "Meminta izin lokasi...": "Requesting location permission...",
  "Meminta izin lokasi dan menyiapkan rute evakuasi.": "Requesting location permission and preparing evacuation route...",
  
  // Archives View
  "Unggah Arsip Bencana": "Upload Disaster Archive",
  "Judul Dokumen / Arsip": "Document / Archive Title",
  "Jenis Bencana": "Disaster Type",
  "Tingkat Kerahasiaan": "Confidentiality Level",
  "Tanggal Kejadian": "Event Date",
  "Lokasi Wilayah": "Region Location",
  "Deskripsi Singkat & Ringkasan": "Short Description & Summary",
  "Klik atau Seret file PDF, Gambar, atau Video (Maks. 25MB)": "Click or drag PDF, Image, or Video files (Max 25MB)",
  "Belum ada file dipilih": "No file selected",
  "Simpan ke Arsip Digital": "Save to Digital Archive",
  "Eksplorasi Arsip Terintegrasi": "Integrated Archive Exploration",
  "Arsip Ditemukan": "Archives Found",
  "Semua Jenis Bencana": "All Disaster Types",
  "Semua Akses (Public/Restricted)": "All Access (Public/Restricted)",
  "Akses Publik": "Public Access",
  "Akses Internal": "Internal Access",
  "Rahasia Negara": "State Secret",
  "Unduh": "Download",
  
  // Operations View
  "Input Laporan Operasi Lapangan": "Input Field Operation Report",
  "Nama Lokasi Sektor": "Sector Location Name",
  "Jumlah Pengungsi (Jiwa)": "Number of Evacuees (People)",
  "Status Logistik Wilayah": "Region Logistics Status",
  "Koordinat Lintang (Lat)": "Latitude Coordinate (Lat)",
  "Bujur (Lng)": "Longitude (Lng)",
  "Catatan Operasional & Kebutuhan Darurat": "Operational Notes & Emergency Needs",
  "Kirim Laporan Lapangan": "Send Field Report",
  "Kirim Laporan Operasi": "Send Operation Report",
  "Laporan Operasi Lapangan Aktif": "Active Field Operations Log",
  "TERVERIFIKASI": "VERIFIED",
  "PENDING": "PENDING",
  "Evakuasi": "Evacuation",
  "Logistik": "Logistics",
  "Spasial": "Spatial",
  "Verifikasi Data Lapangan": "Verify Field Data",
  
  // AI Engine View
  "Analisis Prediktif AI & Korelasi Historis": "AI Predictive Analysis & Historical Correlation",
  "Evaluasi mitigasi berkelanjutan berdasarkan model neural network SEDAF.": "Sustainable mitigation evaluation based on SEDAF neural network model.",
  "Indeks Ancaman Wilayah Aktif": "Active Region Threat Index",
  "Parameter Masukan Uji Model": "Model Test Input Parameters",
  "Curah Hujan Harian:": "Daily Rainfall:",
  "Tinggi Air Pintu Citarum:": "Citarum Gate Water Level:",
  "Anomali Pasang Rob BMKG:": "BMKG Tidal Wave Anomaly:",
  "Jalankan Simulasi AI": "Run AI Simulation",
  "Rekomendasi Aksi Taktis AI (SOP Hasil Rekomendasi)": "AI Tactical Action Recommendations (Recommended SOP)",
  "Ringkasan Analitis AI (Bahasa Mudah Dipahami)": "AI Analytical Summary (Layman Terms)",
  
  // SOP & Knowledge View
  "Tacit to Explicit (Wawancara Ahli)": "Tacit to Explicit (Expert Interview)",
  "Ubah ingatan lokal, testimoni masyarakat, dan wawancara sesepuh bencana menjadi SOP administratif terstruktur.": "Convert local memories, community testimonials, and disaster elder interviews into structured administrative SOPs.",
  "Nama Veteran / Ahli": "Veteran / Expert Name",
  "Bencana Terkait": "Related Disaster",
  "Transkrip Wawancara / Catatan Testimoni": "Interview Transcript / Testimony Notes",
  "Konversi AI Menjadi SOP Formal": "Convert AI to Formal SOP",
  "Database SOP Kebijakan & Best Practice": "Policy SOP & Best Practice Database",
  "SOP Tersimpan": "SOPs Saved",
  "DRAF SOP DIHASILKAN MODEL AI SEDAF": "SOP DRAFT GENERATED BY SEDAF AI MODEL",
  "Siap Diverifikasi Instansi": "Ready for Agency Verification",
  "SOP Mitigasi Penyelamatan Banjir Pamanukan": "Pamanukan Flood Rescue Mitigation SOP",
  "Batalkan": "Discard",
  "Simpan ke SOP Utama": "Save to Main SOP",
  
  // Collaboration View
  "Kolaborasi Data Lintas Instansi": "Data Collaboration Across Agencies",
  "Workflow persetujuan data, komentar koordinasi, dan verifikasi arsip kebencanaan.": "Data approval workflow, coordination comments, and disaster archive verification.",
  "Menunggu Review:": "Awaiting Review:",
  "ID Data": "Data ID",
  "Sumber Instansi": "Agency Source",
  "Judul Laporan / Arsip": "Report / Archive Title",
  "Klasifikasi": "Classification",
  "Diajukan": "Submitted",
  "Status Review": "Review Status",
  "Tindakan Otoritas": "Authority Action",
  "Forum Koordinasi Verifikasi Cepat": "Fast Verification Coordination Forum",
  "Tulis catatan koordinasi / saran persetujuan...": "Write coordination notes / approval suggestions...",
  "Kirim": "Send",
  
  // Reports View
  "Indikator Kinerja Sistem": "System Performance Indicators",
  "Kecepatan Input Laporan": "Report Input Speed",
  "Kelengkapan Arsip Wilayah": "Region Archive Completeness",
  "Akurasi Prediksi AI (Uji Silang)": "AI Prediction Accuracy (Cross Validation)",
  "Evaluasi Bulanan Kesiapan": "Monthly Readiness Evaluation",
  "Generator Laporan Otomatis & Konsol Ekspor": "Automated Report Generator & Export Console",
  "Kompilasi arsip, laporan lapangan, dan index risiko untuk diseminasi berkas.": "Compilation of archives, field reports, and risk index for file dissemination.",
  "Periode Laporan": "Report Period",
  "Tingkat Kerahasiaan Ekspor": "Export Confidentiality Level",
  "Format Berkas": "File Format",
  "PRATINJAU RINGKASAN LAPORAN (SEDAF CORE ENGINE)": "REPORT SUMMARY PREVIEW (SEDAF CORE ENGINE)",
  "STATUS: READY FOR COMPILATION": "STATUS: READY FOR COMPILATION",
  "LAPORAN BULANAN KEADAAN STRATEGIS BENCANA": "MONTHLY STRATEGIC DISASTER SITUATION REPORT",
  "Cetak Laporan (PDF)": "Print Report (PDF)",
  "Ekspor Berkas Data": "Export Data Files",
  
  // Admin Panel
  "Kontrol Otorisasi (RBAC)": "Authorization Control (RBAC)",
  "Matriks Hak Akses Default": "Default Access Rights Matrix",
  "Ubah Level Keamanan Default:": "Change Default Security Level:",
  "NORMAL": "NORMAL",
  "SIAGA": "ALERT",
  "PANIK": "PANIC",
  "Proteksi Audit": "Audit Protection",
  "Log Audit Trail Keamanan Sistem": "System Security Audit Trail Logs",
  "Rekaman riwayat perubahan klasifikasi, persetujuan data, dan tindakan pengguna.": "Record of classification changes, data approvals, and user actions.",
  
  // Profile
  "Status: Aktif / Terverifikasi": "Status: Active / Verified",
  "Nomor Identitas Pegawai / Lembaga": "Employee / Institution Identity Number",
  "Surel Otoritas Resmi": "Official Authority Email",
  "Wilayah Penugasan Utama": "Main Assignment Area",
  "Kewenangan Akses Berkas": "File Access Authority",
  "Kunci Keamanan API Publik & Kredensial": "Public API Security Key & Credentials",
  "Gunakan kunci API di bawah untuk integrasi sensor stasiun BPBD/BMKG lokal Anda ke portal utama SEDAF.": "Use the API key below to integrate your local BPBD/BMKG station sensors into the main SEDAF portal.",
  "Salin": "Copy",
  "Komando Lapangan: BNPB / BPBD Daerah": "Field Command: BNPB / BPBD Regional",
  
  // Encyclopedia
  "Warisan Kebencanaan Nusantara": "Nusantara Disaster Heritage",
  "Ensiklopedia Budaya Mitigasi Bencana": "Encyclopedia of Disaster Mitigation Culture",
  "Kumpulan kearifan lokal, tradisi lisan, dan sistem pengetahuan masyarakat adat Indonesia dalam menghadapi bencana alam—diarsipkan sebagai bagian dari memori kebangsaan.": "Collection of local wisdom, oral traditions, and knowledge systems of Indonesian indigenous people in facing natural disasters—archived as part of national memory.",
  "Entri Tersedia": "Entry Available",
  "Asal Daerah:": "Origin Region:",
  "Kembali ke Ensiklopedia": "Back to Encyclopedia",
  "Kayori – Warisan Mitigasi Bencana Masyarakat Kaili": "Kayori – Disaster Mitigation Heritage of Kaili Community",
  "Tradisi Lisan Gempa dan Tsunami dari Sulawesi Tengah": "Oral Tradition of Earthquake and Tsunami from Central Sulawesi",
  "Bahasa Kaili — Suku Kaili, Sulawesi Tengah": "Kaili Language — Kaili Tribe, Central Sulawesi",
  "Bahasa Asli (Kaili)": "Original Language (Kaili)",
  "Diucapkan turun-temurun sebagai peringatan lisan kepada warga suku Kaili": "Spoken generations down as oral warning to Kaili tribe members",
  "Arti dalam Bahasa Indonesia": "Meaning in Indonesian",
  "Jika tanah berguncang, segeralah pergi ke perbukitan.": "If the ground shakes, immediately go to the hills.",
  "Fungsi Kayori": "Function of Kayori",
  "Peran dalam sistem mitigasi bencana masyarakat adat": "Role in indigenous community disaster mitigation systems",
  "Peringatan Dini Gempa & Tsunami": "Early Warning of Earthquake & Tsunami",
  "Mengajarkan Evakuasi Mandiri": "Teaching Self-Evacuation",
  "Menjaga Memori Bencana Leluhur": "Preserving Ancestor Disaster Memories",
  "Pendidikan Mitigasi Turun-Temurun": "Generational Mitigation Education",
  "Membangun Kesadaran Terhadap Tanda Alam": "Building Awareness of Natural Signs",
  "Metadata Budaya": "Cultural Metadata",
  "Nama Tradisi": "Tradition Name",
  "Bahasa": "Language",
  "Asal Suku": "Tribe Origin",
  "Wilayah": "Region",
  "Kategori": "Category",
  "Jenis Bencana": "Disaster Type",
  "Status Warisaan": "Heritage Status",
  "Relevansi Historis": "Historical Relevance",
  "Relevansi SEDAF": "SEDAF Relevance",
  "Lihat SOP & Knowledge Base": "View SOP & Knowledge Base",

  // Toasts
  "Koneksi internet terhubung kembali!": "Internet connection re-established!",
  "Koneksi internet terputus. Bekerja dalam mode offline.": "Internet connection lost. Working in offline mode.",
  "Mode Terang Aktif": "Light Mode Active",
  "Mode Gelap Aktif": "Dark Mode Active",
  "Arsip Berhasil Diunggah & Dikatalogisasi!": "Archive Successfully Uploaded & Cataloged!",
  "Laporan Operasi Terkirim & Mengantre Verifikasi!": "Operation Report Sent & Awaiting Verification!",
  "Role Otorisasi Diubah: Admin": "Authorization Role Changed: Admin",
  "Role Otorisasi Diubah: BPBD": "Authorization Role Changed: BPBD",
  "Role Otorisasi Diubah: BMKG": "Authorization Role Changed: BMKG",
  "Role Otorisasi Diubah: ANRI": "Authorization Role Changed: ANRI",
  "Role Otorisasi Diubah: TNI_Polri": "Authorization Role Changed: TNI/Polri",
  "Role Otorisasi Diubah: Relawan": "Authorization Role Changed: Relawan",
  "Role Otorisasi Diubah: Publik": "Authorization Role Changed: Publik",
  "Seluruh notifikasi dibersihkan": "All notifications cleared",
  "SOP Berhasil Diformulasikan AI!": "SOP Successfully Formulated by AI!",
  "SOP berhasil dimasukkan ke basis pengetahuan utama!": "SOP successfully added to main knowledge base!",
  "Draf SOP dibatalkan.": "SOP draft discarded.",
  "Simulasi & Prediksi AI Diperbarui!": "AI Simulation & Prediction Updated!",
  "Catatan kolaborasi dikirim!": "Collaboration note sent!",
  "Data operasi berhasil diverifikasi!": "Operation data successfully verified!",
  "Kunci API disalin ke papan klip!": "API Key copied to clipboard!",
  "Lengkapi seluruh formulir wawancara!": "Complete the entire interview form!",
  "Akses ditolak: Portal manajemen hak akses memerlukan koneksi VPN Kementerian.": "Access denied: Access rights management portal requires Ministry VPN connection.",
  "Deklarasi SIAGA 1 diumumkan ke seluruh posko sektor Citarum!": "SIAGA 1 declaration announced to all Citarum sector posts!",
  "Logistik dialokasikan ulang: Mengirim perahu karet & dapur umum ke Sektor B.": "Logistics reallocated: Sending rubber boats & public kitchen to Sector B.",
  "Sensor Seismik Sesar Lembang dikalibrasi. Kepekaan sensor: 0.1 mm deformasi.": "Lembang Fault Seismic Sensor calibrated. Sensor sensitivity: 0.1 mm deformation.",
  "Simulasi Sesar Lembang 6.8 SR dijalankan. Kawasan Bandung Utara terancam deformasi!": "Lembang Fault 6.8 SR simulation run. North Bandung area threatened by deformation!",
  "Katalogisasi Arsip Kebencanaan Baru dibuka": "Cataloging of New Disaster Archives opened",
  "Satuan KODIM 0605 dikerahkan menjaga ketertiban logistik posko.": "KODIM 0605 unit deployed to maintain order at post logistics.",
  "Unit Zeni Konstruksi dikerahkan membersihkan jalur longsor Sukabumi.": "Construction Engineers unit deployed to clear Sukabumi landslide path.",
  "Sinyal DARURAT dikirim: Meminta ambulans darurat di Dusun Ciherang!": "EMERGENCY signal sent: Requesting emergency ambulance in Ciherang Village!",
  "Stok logistik GOR Pamanukan terdata kritis untuk 2 hari kedepan.": "Logistics stock at GOR Pamanukan recorded critical for next 2 days.",
  "Mengunduh Buku Saku Kesiapsiagaan Bencana Mandiri BNPB.pdf (1.4MB)": "Downloading BNPB Self-Disaster Preparedness Pocket Book.pdf (1.4MB)",
  "Silakan bagikan memori sejarah bencana Anda": "Please share your local disaster history memories",
  "AI memproses bahasa transkrip...": "AI processing transcript language...",
  "Menjalankan korelasi model multi-dekade AI...": "Running AI multi-decade model correlation...",
  "Wilayah Terpilih: Sumatra": "Selected Region: Sumatra",
  "Wilayah Terpilih: Jawa": "Selected Region: Jawa",
  "Wilayah Terpilih: Kalimantan": "Selected Region: Kalimantan",
  "Wilayah Terpilih: Sulawesi": "Selected Region: Sulawesi",
  "Wilayah Terpilih: Nusa Tenggara & Bali": "Selected Region: Nusa Tenggara & Bali",
  "Wilayah Terpilih: Maluku": "Selected Region: Maluku",
  "Wilayah Terpilih: Papua": "Selected Region: Papua",
  "Detail Spasial Wilayah Sumatra dimuat": "Spatial details of Sumatra loaded",
  "Detail Spasial Wilayah Jawa dimuat": "Spatial details of Jawa loaded",
  "Detail Spasial Wilayah Kalimantan dimuat": "Spatial details of Kalimantan loaded",
  "Detail Spasial Wilayah Sulawesi dimuat": "Spatial details of Sulawesi loaded",
  "Detail Spasial Wilayah Nusa Tenggara & Bali dimuat": "Spatial details of Nusa Tenggara & Bali loaded",
  "Detail Spasial Wilayah Maluku dimuat": "Spatial details of Maluku loaded",
  "Detail Spasial Wilayah Papua dimuat": "Spatial details of Papua loaded",
  "Layer spasial BANJIR aktif": "Spatial layer FLOOD active",
  "Layer spasial GEMPA aktif": "Spatial layer EARTHQUAKE active",
  "Layer spasial TSUNAMI aktif": "Spatial layer TSUNAMI active",
  "Layer spasial LONGSOR aktif": "Spatial layer LANDSLIDE active",

  // Dynamic values
  "Cukup Aman": "Safe Enough",
  "Penuh": "Full",
  "Siaga": "Alert",
  "Publik": "Public",
  "Internal": "Internal",
  "Rahasia": "Confidential",
  "Revisi": "Revise",
  "Data Sah": "Valid Data",
  "Home": "Home",
  "Peta GIS": "GIS Map",
  "Arsip": "Archives",
  "Operasi": "Operations",
  "AI Engine": "AI Engine",
  "Warisan": "Heritage"
};

function applyTranslation() {
  const lang = currentLanguage;
  const translations = translationDictionary;
  
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walk.nextNode()) {
    const trimmed = node.nodeValue.trim();
    if (!trimmed) continue;
    
    // Check if the node is child of script, style or other non-translatable tags
    const parentTag = node.parentElement ? node.parentElement.tagName.toLowerCase() : '';
    if (parentTag === 'script' || parentTag === 'style') continue;

    if (lang === 'en') {
      if (translations[trimmed]) {
        const prefix = node.nodeValue.match(/^\s*/)[0];
        const suffix = node.nodeValue.match(/\s*$/)[0];
        node.nodeValue = prefix + translations[trimmed] + suffix;
      }
    } else {
      const originalKey = Object.keys(translations).find(key => translations[key] === trimmed);
      if (originalKey) {
        const prefix = node.nodeValue.match(/^\s*/)[0];
        const suffix = node.nodeValue.match(/\s*$/)[0];
        node.nodeValue = prefix + originalKey + suffix;
      }
    }
  }
  
  // Inputs/textareas
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    const ph = el.getAttribute('placeholder').trim();
    if (lang === 'en') {
      if (translations[ph]) {
        el.setAttribute('placeholder', translations[ph]);
      }
    } else {
      const originalKey = Object.keys(translations).find(key => translations[key] === ph);
      if (originalKey) {
        el.setAttribute('placeholder', originalKey);
      }
    }
  });

  // Select dropdowns
  document.querySelectorAll('select').forEach(select => {
    Array.from(select.options).forEach(opt => {
      const txt = opt.text.trim();
      if (lang === 'en') {
        if (translations[txt]) opt.text = translations[txt];
      } else {
        const originalKey = Object.keys(translations).find(key => translations[key] === txt);
        if (originalKey) opt.text = originalKey;
      }
    });
  });
}

function setGlobalLanguage(lang, isStartup = false) {
  currentLanguage = lang;
  localStorage.setItem('sedaf-global-lang', lang);
  
  // Update button visual
  const btnLabel = document.getElementById('global-lang-label');
  if (btnLabel) {
    btnLabel.innerText = lang === 'en' ? 'ID' : 'EN';
  }

  // Update dashboard switcher buttons state as well to stay sync
  const dashboardLang = localStorage.getItem('sedaf-dashboard-lang') || 'id';
  if (dashboardLang !== lang) {
    setDashboardLanguage(lang, true);
  }

  applyTranslation();
  
  if (!isStartup) {
    showToast(lang === 'en' ? 'System language set to English' : 'Bahasa sistem diubah ke Bahasa Indonesia', 'success');
  }
}

function toggleGlobalLanguage() {
  const nextLang = currentLanguage === 'en' ? 'id' : 'en';
  setGlobalLanguage(nextLang);
}
