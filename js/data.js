/**
 * data.js — EDIT SEMUA KONTEN CV DI SINI
 * File lain tidak perlu disentuh untuk update konten.
 */

const CV = {

  /* ── IDENTITAS ─────────────────────────────────────────── */
  identity: {
    name:      "Enggar Irawan",
    shortRole: "Network & Infrastructure",
    eyebrow:   "Network & Infrastructure Engineer",
    role:      "Infrastructure Engineer | Network Engineer | Linux SysAdmin | Aspiring DevOps",
    tagline:   "Gue membangun dan mengelola infrastruktur jaringan, server, dan monitoring yang stabil, aman, dan terobservasi — dari kampus sampai homelab, sambil terus bergerak ke arah DevOps & cloud.",
    about:     "Infrastructure Engineer dan Linux System Administrator dengan lebih dari 3 tahun pengalaman mengelola infrastruktur jaringan dan server skala kampus. Spesialis dalam membangun lingkungan yang stabil, observable, dan aman menggunakan MikroTik, Cisco, dan Proxmox. Berpengalaman dalam optimasi segmentasi jaringan kompleks, deployment monitoring stack (Zabbix, Grafana), dan menjaga high availability untuk layanan kritikal. Passionate dalam Infrastructure as Code (IaC) dan network automation. Saat ini aktif mengembangkan keahlian di bidang DevOps dan Cybersecurity.",
    avatar:    "",
    location:  "Sukabumi, Jawa Barat, Indonesia",
    email:     "ienggar98@gmail.com",
    phone:     "",
    linkedin:  "linkedin.com/in/enggar-i-10b729401",
    github:    "github.com/keiijzz",
    website:   "",
  },

  /* ── STATS ──────────────────────────────────────────────── */
  stats: [
    { num: 3,    suffix: "+", label: "Tahun Pengalaman" },
    { num: 9,    suffix: "",  label: "Sertifikasi"        },
    { num: 1000, suffix: "+", label: "Pengguna Dikelola"  },
    { num: 2,    suffix: "",  label: "Publikasi & Paten"  },
  ],

  /* ── FOCUS AREA / EXPERTISE ─────────────────────────────── */
  expertise: [
    {
      icon:  "network",
      title: "Network Engineering",
      desc:  "Desain, segmentasi, dan optimasi jaringan skala kampus dengan MikroTik & Cisco.",
      tags:  ["VLAN", "Routing", "QoS", "Trunking"],
    },
    {
      icon:  "server",
      title: "Linux & Virtualization",
      desc:  "Kelola server Proxmox, LXC, dan layanan kritikal di atas Debian/Ubuntu.",
      tags:  ["Proxmox", "Docker", "LXC", "HA"],
    },
    {
      icon:  "activity",
      title: "Observability",
      desc:  "Bangun monitoring real-time dan alerting untuk kesehatan server & bandwidth jaringan.",
      tags:  ["Zabbix", "Grafana", "Prometheus", "SNMP"],
    },
    {
      icon:  "cloud",
      title: "Automation & Cloud",
      desc:  "Otomasi tugas infrastruktur dan menuju cloud engineering di jalur DevOps.",
      tags:  ["Python", "IaC", "AWS", "CI/CD"],
    },
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
      role:     "Owner & Lead Engineer",
      company:  "Projekan.ID",
      period:   "Jun 2025 — Sekarang",
      location: "Indonesia",
      current:  true,
      points: [
        "Mendirikan dan mengelola bisnis freelance yang berfokus pada Web Development, System Administration, dan Networking.",
        "Memimpin tim dalam pengerjaan proyek digital end-to-end untuk klien — dari desain sistem hingga deployment production.",
        "Membangun brand 'Building Your Digital Future' sebagai solusi tech terpercaya untuk kebutuhan infrastruktur dan software.",
      ],
    },
    {
      role:     "Senior Network System Engineer",
      company:  "PT. Kaldyta Mega Tech",
      period:   "Jun 2022 — Sekarang",
      location: "Sukabumi",
      current:  true,
      points: [
        "Merancang dan memelihara jaringan skala kampus yang mendukung ribuan pengguna di segmen staf, dosen, dan mahasiswa.",
        "Mengimplementasikan segmentasi VLAN kompleks dan trunking pada MikroTik dan Cisco Catalyst 1200 series untuk traffic flow yang aman dan efisien.",
        "Men-deploy cluster Proxmox VE untuk hosting layanan jaringan kritikal seperti DNS Resolver (Unbound/Bind9) dan container monitoring internal.",
        "Membangun ekosistem monitoring komprehensif menggunakan Zabbix, Prometheus, dan Grafana untuk visibilitas real-time ke kesehatan server dan bandwidth jaringan.",
        "Mengintegrasikan sistem CCTV berbasis IP ke dalam jaringan monitoring dan men-deploy infrastruktur VoIP dengan QoS prioritization.",
      ],
    },
    {
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
      points:   ["Skripsi: Implementasi Moving Average terhadap Efektivitas Saldo Akun Trading Bitcoin."],
    },
  ],

  /* ── PROJECTS ───────────────────────────────────────────── */
  projects: [
    {
      title:  "Campus-Scale Network Infrastructure",
      period: "2022 — Sekarang",
      desc:   "Desain dan pengelolaan jaringan kampus skala besar menggunakan MikroTik dan Cisco Catalyst, mencakup VLAN segmentation, monitoring stack (Zabbix + Grafana), CCTV integration, dan VoIP infrastructure.",
      stack:  ["MikroTik", "Cisco", "Proxmox", "Zabbix", "Grafana"],
      link:   "",
    },
    {
      title:  "AISaFES.ID — AI Smartphone Fundus Eye Scan",
      period: "2022",
      desc:   "Platform identifikasi kelainan mata berbasis CNN (Convolutional Neural Network) menggunakan smartphone fundus scan. Didaftarkan sebagai paten di bidang AI kesehatan.",
      stack:  ["Python", "TensorFlow", "Keras", "Flask", "CNN"],
      link:   "",
    },
    {
      title:  "Moving Average Trading Bitcoin",
      period: "2022",
      desc:   "Penelitian dan implementasi strategi Moving Average terhadap efektivitas saldo akun trading Bitcoin. Dipublikasikan sebagai karya ilmiah.",
      stack:  ["Python", "Data Analysis", "Trading Algorithm"],
      link:   "",
    },
    {
      title:  "MemeReels — Platform Video Pendek",
      period: "2025",
      desc:   "Platform video pendek untuk konten meme, dibangun dengan Vite, React, Supabase, dan Cloudinary. Fokus pada feed, autentikasi, dan upload media.",
      stack:  ["Vite", "React", "Supabase", "Cloudinary"],
      link:   "",
    },
  ],

  /* ── CERTIFICATIONS ─────────────────────────────────────── */
  certifications: [
    { name: "Ruijie Certified Network Associate — Routing & Switching", issuer: "Ruijie Networks", year: "", badge: "🥇" },
    { name: "Omada Certified Network Administrator (OCNA)",             issuer: "TP-Link Omada",   year: "", badge: "🥇" },
    { name: "EnGenius Certified Wireless Professional",                 issuer: "EnGenius",        year: "", badge: "📡" },
    { name: "EnGenius Certified Network Specialist",                    issuer: "EnGenius",        year: "", badge: "📡" },
    { name: "MTCNA",                                                    issuer: "MikroTik",        year: "", badge: "🏅" },
    { name: "Python Fundamentals",                                      issuer: "ProGate & DQLab", year: "", badge: "🐍" },
    { name: "FCF — Technical Introduction to CyberSecurity 1.0",        issuer: "Fortinet",        year: "", badge: "🛡️" },
    { name: "FCF — Introduction to The Threat Landscape 2.0",           issuer: "Fortinet",        year: "", badge: "🛡️" },
    { name: "FCP — FortiGate 7.4 Administrator",                        issuer: "Fortinet",        year: "", badge: "🛡️" },
  ],

};