/**
 * data.js — EDIT SEMUA KONTEN CV DI SINI
 * File lain tidak perlu disentuh untuk update konten.
 */

const CV = {

  /* ── IDENTITAS ─────────────────────────────────────────── */
  identity: {
    name:     "Enggar Irawan",
    handle:   "@keiijzz",
    role:     "Infrastructure Engineer | Linux & Network Specialist | Aspiring DevOps",
    about:    "Infrastructure Engineer dan Linux System Administrator dengan lebih dari 3 tahun pengalaman mengelola infrastruktur jaringan dan server skala kampus. Spesialis dalam membangun lingkungan yang stabil, observable, dan aman menggunakan MikroTik, Cisco, dan Proxmox. Berpengalaman dalam optimasi segmentasi jaringan kompleks, deployment monitoring stack (Zabbix, Grafana), dan menjaga high availability untuk layanan kritikal. Passionate dalam Infrastructure as Code (IaC) dan network automation. Saat ini aktif mengembangkan keahlian di bidang DevOps dan Cybersecurity.",
    status:   "Tersedia untuk peluang freelance & kolaborasi DevOps",
    avatar:   "",
    location: "Sukabumi, West Java, Indonesia",
    email:    "ienggar98@gmail.com",
    phone:    "",
    linkedin: "linkedin.com/in/enggar-i-10b729401",
    github:   "github.com/keiijzz",
    website:  "",
  },

  /* ── OUR PURPOSE seed utk heatmap dekoratif ── */
  heatSeed: "enggar-network-2026",

  /* ── HERO STATS ─────────────────────────────────────────── */
  stats: [
    { num: "3+",   label: "Tahun Pengalaman" },
    { num: "9",    label: "Sertifikasi"        },
    { num: "1000+",label: "Pengguna Dikelola"  },
    { num: "2",    label: "Publikasi & Paten"  },
  ],

  /* ── HIGHLIGHTS ─────────────────────────────────────────── */
  highlights: [
    "MTCNA — MikroTik Certified Network Associate (lanjut MTCRE)",
    "Paten terdaftar: AISaFES.ID — AI deteksi kelainan mata lewat smartphone fundus",
    "Publikasi ilmiah: Implementasi Moving Average untuk trading Bitcoin",
    "Mengelola jaringan, CCTV, dan VoIP skala kampus (ribuan pengguna)",
    "Membangun ekosistem monitoring Zabbix + Grafana dari nol",
  ],

  /* ── ORGANISASI ─────────────────────────────────────────── */
  orgs: [
    { name: "PT Kaldyta Mega Tech", short: "K", color: "#1f883d" },
    { name: "Nusa Putra University", short: "N", color: "#0969da" },
    { name: "MikroTik", short: "M", color: "#bc4c00" },
    { name: "Cisco", short: "C", color: "#1f2328" },
  ],

  /* ── SKILLS ─────────────────────────────────────────────── */
  skills: [
    {
      category: "Networking",
      level: 95,
      items: ["MikroTik RouterOS", "Cisco IOS (Catalyst)", "VLAN / Trunking / STP", "VoIP & QoS", "IP-CCTV Integration", "DNS (Unbound / Bind9)"],
    },
    {
      category: "Infrastructure & Virtualization",
      level: 80,
      items: ["Proxmox VE", "Linux (Ubuntu / Debian)", "Docker", "Kubernetes (Learning)", "LXC Container", "High Availability Setup"],
    },
    {
      category: "Observability & Monitoring",
      level: 78,
      items: ["Zabbix", "Prometheus", "Grafana", "SNMP Monitoring", "Real-time Alerting"],
    },
    {
      category: "Development & Tools",
      level: 65,
      items: ["Python", "Flask", "TensorFlow", "Keras", "Git / GitHub", "Infrastructure as Code (IaC)"],
    },
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  experience: [
    {
      roleLabel: "Owner",
      role:     "Owner & Lead Engineer",
      company:  "Projekan.ID",
      period:   "Jun 2025 — Sekarang",
      location: "Indonesia",
      points: [
        "Mendirikan dan mengelola bisnis freelance yang berfokus pada Web Development, System Administration, dan Networking.",
        "Memimpin tim dalam pengerjaan proyek digital end-to-end untuk klien — dari desain sistem hingga deployment production.",
        "Membangun brand 'Building Your Digital Future' sebagai solusi tech terpercaya untuk kebutuhan infrastruktur dan software.",
      ],
    },
    {
      roleLabel: "Current",
      role:     "Senior Network System Engineer",
      company:  "PT. Kaldyta Mega Tech",
      period:   "Jun 2022 — Sekarang",
      location: "Sukabumi",
      points: [
        "Merancang dan memelihara jaringan skala kampus yang mendukung ribuan pengguna di segmen staf, dosen, dan mahasiswa.",
        "Mengimplementasikan segmentasi VLAN kompleks dan trunking pada MikroTik dan Cisco Catalyst 1200 series untuk traffic flow yang aman dan efisien.",
        "Men-deploy cluster Proxmox VE untuk hosting layanan jaringan kritikal seperti DNS Resolver (Unbound/Bind9) dan container monitoring internal.",
        "Membangun ekosistem monitoring komprehensif menggunakan Zabbix, Prometheus, dan Grafana untuk visibilitas real-time ke kesehatan server dan bandwidth jaringan.",
        "Mengintegrasikan sistem CCTV berbasis IP ke dalam jaringan monitoring dan men-deploy infrastruktur VoIP dengan QoS prioritization.",
      ],
    },
    {
      roleLabel: "Lab",
      role:     "Senior Laboratory Assistant",
      company:  "Nusa Putra University",
      period:   "Apr 2022 — Jun 2022",
      location: "Sukabumi",
      points: [
        "Instalasi seluruh perangkat komputer dan jaringan di Lab Komputer Nusa Putra University sebanyak 120 unit.",
        "Inventarisasi seluruh peralatan lab dan mempersiapkan lab untuk kebutuhan praktikum dosen.",
        "Berkolaborasi dengan tim IT untuk kebutuhan jaringan di area lab.",
        "Mengajar modul praktikum untuk mahasiswa saat dosen berhalangan hadir.",
      ],
    },
    {
      roleLabel: "Intern",
      role:     "Network Technician",
      company:  "PT Intisel Prodaktifakom",
      period:   "Nov 2018 — Jan 2019",
      location: "Jakarta Selatan",
      points: [
        "Pengembangan jaringan dan program berbasis web untuk instalasi dan perbaikan sistem kerja perusahaan.",
        "Maintenance sistem jaringan perusahaan dan program sistem absensi.",
      ],
    },
  ],

  /* ── EDUCATION ──────────────────────────────────────────── */
  education: [
    {
      degree:   "S1 Sistem Informasi Manajemen",
      school:   "Universitas Nusa Putra",
      period:   "Mei 2015 — Januari 2022",
      location: "Sukabumi",
      points: [
        "Skripsi: Implementasi Moving Average terhadap Efektivitas Saldo Akun Trading Bitcoin.",
      ],
    },
  ],

  /* ── PROJECTS ───────────────────────────────────────────── */
  projects: [
    {
      title:  "AISaFES.ID — Website AI Smartphone Fundus Eye Scan",
      period: "2022",
      desc:   "Platform identifikasi kelainan mata berbasis CNN (Convolutional Neural Network) menggunakan smartphone fundus scan. Didaftarkan sebagai paten di bidang AI kesehatan.",
      stack:  ["Python", "TensorFlow", "Keras", "Flask", "CNN"],
      lang:   "Python",
      langColor: "#3572A5",
      visibility: "Private",
      link:   "",
    },
    {
      title:  "Moving Average Trading Bitcoin",
      period: "2022",
      desc:   "Penelitian dan implementasi strategi Moving Average terhadap efektivitas saldo akun trading Bitcoin. Dipublikasikan sebagai karya ilmiah.",
      stack:  ["Python", "Data Analysis", "Trading Algorithm"],
      lang:   "Python",
      langColor: "#3572A5",
      visibility: "Public",
      link:   "",
    },
    {
      title:  "Campus-Scale Network Infrastructure",
      period: "2022 — Sekarang",
      desc:   "Desain dan pengelolaan jaringan kampus skala besar menggunakan MikroTik dan Cisco Catalyst, mencakup VLAN segmentation, monitoring stack (Zabbix + Grafana), CCTV integration, dan VoIP infrastructure.",
      stack:  ["MikroTik", "Cisco", "Proxmox", "Zabbix", "Grafana"],
      lang:   "MikroTik",
      langColor: "#7C3AED",
      visibility: "Private",
      link:   "",
    },
    {
      title:  "MemeReels — Platform Video Pendek",
      period: "2025",
      desc:   "Platform video pendek untuk konten meme, dibangun dengan Vite, React, Supabase, dan Cloudinary. Fokus pada feed, autentikasi, dan upload media.",
      stack:  ["Vite", "React", "Supabase", "Cloudinary"],
      lang:   "React",
      langColor: "#61DAFB",
      visibility: "Private",
      link:   "",
    },
  ],

  /* ── CERTIFICATIONS ─────────────────────────────────────── */
  certifications: [
    {
      name:   "Ruijie Certified Network Associate — Routing & Switching",
      issuer: "Ruijie Networks",
      year:   "",
      badge:  "🥇",
    },
    {
      name:   "Omada Certified Network Administrator (OCNA) — Routing & Switching",
      issuer: "TP-Link Omada",
      year:   "",
      badge:  "🥇",
    },
    {
      name:   "EnGenius Certified Wireless Professional",
      issuer: "EnGenius",
      year:   "",
      badge:  "🥈",
    },
    {
      name:   "EnGenius Certified Network Specialist",
      issuer: "EnGenius",
      year:   "",
      badge:  "🥈",
    },
    {
      name:   "Python Fundamentals",
      issuer: "ProGate & DQLab",
      year:   "",
      badge:  "🐍",
    },
    {
      name:   "MTCNA",
      issuer: "MikroTik",
      year:   "",
      badge:  "🏅",
    },
    {
      name:   "FCF - Technical Introduction to CyberSecurity 1.0",
      issuer: "Fortinet Training Institute",
      year:   "",
      badge:  "🛡️",
    },
    {
      name:   "FCF - Introduction to The Threat Landscape 2.0",
      issuer: "Fortinet Training Institute",
      year:   "",
      badge:  "🛡️",
    },
    {
      name:   "FCP - FortiGate 7.4 Administrator",
      issuer: "Fortinet Training Institute",
      year:   "",
      badge:  "🛡️",
    },
  ],

};