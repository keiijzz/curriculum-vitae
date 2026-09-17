/**
 * data.js — SEMUA KONTEN CV (bilingual: English & Bahasa Indonesia)
 * Edit di sini saja. Default bahasa: English (lihat CV.default).
 * Struktur tiap bahasa harus sama persis.
 */

const CV = {
  default: "en",

  /* ══════════════════════════════ ENGLISH ══════════════════════════════ */
  en: {
    ui: {
      brandRole: "Network & Infrastructure",
      navAbout: "About", navExp: "Experience", navSkills: "Skills",
      navProjects: "Projects", navCerts: "Certifications", navContact: "Contact",
      secAbout: "About", secExp: "Work Experience", secSkills: "Skills",
      secLangs: "Languages", secProjects: "Projects & Publications", secCerts: "Certifications",
      eduTitle: "Education", pubTitle: "Publications",
      heroEyebrow: "Network & Infrastructure Engineer",
      ctaGhost: "View Experience", ctaPrimary: "Contact Me",
      contactEyebrow: "Let's connect", contactTitle: "Have a project or an opportunity that fits?",
      contactSub: "I'm open to discussions about network infrastructure, Linux, monitoring, or DevOps collaborations.",
      themeTitle: "Toggle theme", langTitle: "Switch language",
      footerBuilt: "Built with plain HTML, CSS & JS", footerUpdated: "Updated",
    },

    identity: {
      name: "Enggar Irawan",
      shortRole: "Network & Infrastructure",
      role: "Network & Infrastructure Engineer | Transitioning to DevOps & Cloud Engineering | Linux System Administrator",
      tagline: "Building stable, observable, and secure network & server infrastructure — from campus-scale networks to the homelab, on the way to DevOps & Cloud Engineering.",
      about: "Network & Infrastructure Engineer with 4+ years of experience managing campus-scale networks and servers, ranging from complex VLAN design to building end-to-end monitoring stacks (Zabbix, Prometheus, Grafana). Core competencies include Linux system administration (Debian/Ubuntu), Proxmox VE virtualization, and enterprise network device configuration (MikroTik RouterOS, Cisco Catalyst). Experienced in building stable, observable, and well-documented infrastructure, including DNS resolvers (Unbound/Bind9), VoIP with QoS, and IP-based CCTV integration. Currently running Projekan.ID, a freelance unit for web development, system administration, and end-to-end networking projects. Actively deepening skills in Python, containerization (Docker, learning Kubernetes), and Infrastructure as Code for a transition into DevOps/Cloud Engineering, open to international/remote opportunities.",
      avatar: "",
      location: "Sukabumi, West Java, Indonesia",
      email: "ienggar98@gmail.com",
      phone: "0878-8084-2171",
      linkedin: "linkedin.com/in/enggar-i-10b729401",
      github: "github.com/keiijzz",
      website: "",
    },

    stats: [
      { num: 4,    suffix: "+", label: "Years of Experience" },
      { num: 12,   suffix: "",  label: "Certifications"      },
      { num: 1000, suffix: "+", label: "Users Managed"       },
      { num: 2,    suffix: "",  label: "Publication & Copyright" },
    ],

    expertise: [
      { icon: "network", title: "Network Engineering", desc: "Designing, segmenting, and optimizing campus-scale networks with MikroTik & Cisco.", tags: ["VLAN", "Routing", "QoS", "Trunking"] },
      { icon: "server",  title: "Linux & Virtualization", desc: "Managing Proxmox, LXC, and critical services on Debian/Ubuntu.", tags: ["Proxmox", "Docker", "LXC", "HA"] },
      { icon: "activity", title: "Observability", desc: "Building real-time monitoring and alerting for server health & network bandwidth.", tags: ["Zabbix", "Grafana", "Prometheus", "SNMP"] },
      { icon: "cloud",   title: "Automation & Cloud", desc: "Automating infrastructure tasks and moving toward cloud engineering on the DevOps path.", tags: ["Python", "IaC", "CI/CD", "AWS"] },
    ],

    skills: [
      { category: "Networking", level: 95, items: ["MikroTik RouterOS", "Cisco Catalyst", "VLAN & Trunking", "Routing & Switching", "NAT", "QoS", "TCP/IP", "VoIP Networking", "IP-CCTV Integration"] },
      { category: "Infrastructure & Virtualization", level: 82, items: ["Linux (Debian/Ubuntu)", "Proxmox VE", "Docker", "Kubernetes (Learning)", "LXC"] },
      { category: "Monitoring", level: 80, items: ["Zabbix", "Prometheus", "Grafana", "SNMP Monitoring"] },
      { category: "DevOps & Automation", level: 68, items: ["Python", "Git/GitHub", "Infrastructure as Code", "CI/CD"] },
      { category: "Network Services", level: 85, items: ["DNS (Unbound/Bind9)", "Port Forwarding"] },
      { category: "Security", level: 75, items: ["Basic Firewall Implementation", "Network Segmentation"] },
      { category: "Others", level: 65, items: ["Flask", "TensorFlow", "Keras", "Data Analytics", "Technical Documentation (MkDocs, GitHub Pages)"] },
    ],

    languages: [
      { name: "Indonesian", level: "Native", pct: 100 },
      { name: "English", level: "Professional Working Proficiency", pct: 85 },
    ],

    experience: [
      {
        role: "Owner & Lead Engineer", company: "Projekan.ID", period: "Jun 2025 – Present", location: "Indonesia", current: true,
        points: [
          "Founded and managed a freelance business focusing on Web Development, System Administration, and Networking.",
          "Leading the team in executing end-to-end digital projects for clients, from system design to production deployment.",
          "Building the \"Building Your Digital Future\" brand as a trusted technology solution for infrastructure and software needs.",
        ],
      },
      {
        role: "Network Engineer", company: "PT Kaldyta Mega Tech", period: "Jun 2022 – Present", location: "Sukabumi", current: true,
        points: [
          "Assigned as an on-site engineer at a university client, responsible for designing and maintaining the entire campus network and server infrastructure.",
          "Configured and optimized VLAN segmentation for staff, faculty, students, and management servers.",
          "Deployed and maintained Proxmox VE clusters for DNS resolvers (Unbound/Bind9), container monitoring, and internal services.",
          "Built a comprehensive monitoring stack (Zabbix, Prometheus, Grafana) for real-time visibility of server health and network bandwidth.",
          "Managed Cisco Catalyst 1200 switches, including trunking configuration and uplink optimization.",
          "Installed and configured IP-based CCTV systems using SADP Tool, integrated into the monitoring network.",
          "Implemented VoIP infrastructure with VLAN isolation and QoS prioritization.",
        ],
      },
      {
        role: "Senior Laboratory Assistant", company: "Nusa Putra University", period: "Apr 2022 – Jun 2022", location: "Sukabumi",
        points: [
          "Installed all computer and network devices in the Computer Lab (120 units).",
          "Inventoried all lab equipment and prepared the lab for faculty practical session needs.",
          "Collaborated with the IT team for network requirements in the lab area.",
          "Taught practical modules for students when faculty members were unable to attend.",
        ],
      },
      {
        role: "Social Media Marketing Intern", company: "Zun Duplex", period: "Aug 2019 – Mar 2020", location: "Sukabumi",
        points: [
          "Developed social media marketing strategies to increase followers and customers.",
          "Introduced products to the general public while enhancing product reputation.",
        ],
      },
      {
        role: "IT Technician", company: "PT Intisel Prodaktifakom", period: "Nov 2018 – Jan 2019", location: "South Jakarta",
        points: [
          "Developed network and web-based programs for installation and repair of company workflow systems.",
          "Performed maintenance on company network systems and attendance systems.",
        ],
      },
    ],

    education: [
      {
        degree: "Bachelor of Science (S.Kom.) — Information Systems (IT Management & Administration)",
        school: "Nusa Putra University", period: "2015 – 2022", location: "Sukabumi",
        points: ["Final CGPA: 3.09", "Thesis: Implementation of Moving Average on Bitcoin Trading Account Balance Effectiveness."],
      },
    ],

    projects: [
      {
        title: "Campus-Scale Network Infrastructure", period: "2022 – Present",
        desc: "Design and management of large-scale campus networks using MikroTik and Cisco Catalyst, including VLAN segmentation, monitoring stack (Zabbix + Grafana), CCTV integration, and VoIP infrastructure.",
        stack: ["MikroTik", "Cisco", "Proxmox", "Zabbix", "Grafana", "Prometheus"], link: "",
      },
      {
        title: "AISaFES.ID — AI Smartphone Fundus Eye Scan", period: "2022 – 2025",
        desc: "A platform for identifying eye abnormalities based on CNN using smartphone fundus scans. Officially registered as a Copyright (Computer Program) at the Directorate General of Intellectual Property, Ministry of Law RI — No. EC00202515994 (Oct 2025), as one of 9 co-creators.",
        stack: ["Python", "TensorFlow", "Keras", "Flask", "CNN"], link: "",
      },
      {
        title: "Moving Average Trading Bitcoin Research", period: "2022",
        desc: "Research on the implementation of Moving Average strategies on the effectiveness of Bitcoin trading account balances, published as a scientific work.",
        stack: ["Python", "Data Analysis"], link: "",
      },
      {
        title: "MemeReels — Short Video Platform", period: "2025",
        desc: "A web-based short video platform for meme content, built with Vite, React, Supabase, and Cloudinary. Focused on feed, authentication, and media upload.",
        stack: ["Vite", "React", "Supabase", "Cloudinary"], link: "",
      },
    ],

    publications: [
      {
        title: "Implementation of Moving Average on the Effectiveness of Bitcoin Trading Account Balances",
        author: "Enggar Irawan", meta: "Scientific publication",
      },
    ],

    certifications: [
      { name: "MikroTik Certified Network Associate (MTCNA)", issuer: "MikroTik", year: "2022", badge: "🏅" },
      { name: "EnGenius Certified Network Professional (ECNP)", issuer: "EnGenius", year: "", badge: "📡" },
      { name: "EnGenius Certified Network Specialist (ECNS)", issuer: "EnGenius", year: "", badge: "📡" },
      { name: "EnGenius Certified Wireless Professional (ECWP)", issuer: "EnGenius", year: "", badge: "📡" },
      { name: "Ruijie Certified Network Associate — Routing & Switching (RCNA)", issuer: "Ruijie Networks", year: "2023–2029", badge: "🥇" },
      { name: "Omada Certified Network Administrator — Routing & Switching (OCNA)", issuer: "TP-Link Omada", year: "2024–2028", badge: "🥇" },
      { name: "FCP — FortiGate 7.4 Administrator Self-Paced", issuer: "Fortinet Training Institute", year: "", badge: "🛡️" },
      { name: "FCF — Introduction to the Threat Landscape 2.0", issuer: "Fortinet Training Institute", year: "", badge: "🛡️" },
      { name: "FCF — Technical Introduction to Cybersecurity 1.0", issuer: "Fortinet Training Institute", year: "", badge: "🛡️" },
      { name: "Google Analytics Certification", issuer: "Google", year: "2022", badge: "📊" },
      { name: "Certified Associate in Python Programming", issuer: "ProGate / DQLab", year: "2021", badge: "🐍" },
      { name: "British Council CEFR Professional English", issuer: "British Council", year: "", badge: "🗣️" },
    ],
  },

  /* ══════════════════════════ BAHASA INDONESIA ══════════════════════════ */
  id: {
    ui: {
      brandRole: "Jaringan & Infrastruktur",
      navAbout: "Tentang", navExp: "Pengalaman", navSkills: "Keahlian",
      navProjects: "Project", navCerts: "Sertifikasi", navContact: "Kontak",
      secAbout: "Tentang", secExp: "Pengalaman Kerja", secSkills: "Keahlian",
      secLangs: "Bahasa", secProjects: "Project & Publikasi", secCerts: "Sertifikasi",
      eduTitle: "Pendidikan", pubTitle: "Publikasi",
      heroEyebrow: "Engineer Jaringan & Infrastruktur",
      ctaGhost: "Lihat Pengalaman", ctaPrimary: "Hubungi Saya",
      contactEyebrow: "Mari terhubung", contactTitle: "Punya project atau peluang yang cocok?",
      contactSub: "Gue terbuka untuk diskusi seputar infrastruktur jaringan, Linux, monitoring, atau kolaborasi DevOps.",
      themeTitle: "Ganti tema", langTitle: "Ganti bahasa",
      footerBuilt: "Dibuat dengan HTML, CSS & JS murni", footerUpdated: "Diperbarui",
    },

    identity: {
      name: "Enggar Irawan",
      shortRole: "Jaringan & Infrastruktur",
      role: "Engineer Jaringan & Infrastruktur | Menuju DevOps & Cloud Engineering | Administrator Linux",
      tagline: "Membangun infrastruktur jaringan & server yang stabil, terobservasi, dan aman — dari jaringan skala kampus sampai homelab, menuju DevOps & Cloud Engineering.",
      about: "Engineer Jaringan & Infrastruktur dengan pengalaman 4+ tahun mengelola jaringan dan server skala kampus, mulai dari desain VLAN yang kompleks hingga membangun monitoring stack end-to-end (Zabbix, Prometheus, Grafana). Kompetensi inti meliputi administrasi sistem Linux (Debian/Ubuntu), virtualisasi Proxmox VE, dan konfigurasi perangkat jaringan enterprise (MikroTik RouterOS, Cisco Catalyst). Berpengalaman membangun infrastruktur yang stabil, terobservasi, dan terdokumentasi dengan baik, termasuk DNS resolver (Unbound/Bind9), VoIP dengan QoS, dan integrasi CCTV berbasis IP. Saat ini menjalankan Projekan.ID, unit freelance untuk web development, system administration, dan project jaringan end-to-end. Aktif mendalami Python, containerization (Docker, sedang belajar Kubernetes), dan Infrastructure as Code untuk bertransisi ke DevOps/Cloud Engineering, terbuka untuk peluang internasional/remote.",
      avatar: "",
      location: "Sukabumi, Jawa Barat, Indonesia",
      email: "ienggar98@gmail.com",
      phone: "0878-8084-2171",
      linkedin: "linkedin.com/in/enggar-i-10b729401",
      github: "github.com/keiijzz",
      website: "",
    },

    stats: [
      { num: 4,    suffix: "+", label: "Tahun Pengalaman" },
      { num: 12,   suffix: "",  label: "Sertifikasi"       },
      { num: 1000, suffix: "+", label: "Pengguna Dikelola" },
      { num: 2,    suffix: "",  label: "Publikasi & Hak Cipta" },
    ],

    expertise: [
      { icon: "network", title: "Network Engineering", desc: "Merancang, menyegmentasi, dan mengoptimalkan jaringan skala kampus dengan MikroTik & Cisco.", tags: ["VLAN", "Routing", "QoS", "Trunking"] },
      { icon: "server",  title: "Linux & Virtualisasi", desc: "Mengelola server Proxmox, LXC, dan layanan kritikal di atas Debian/Ubuntu.", tags: ["Proxmox", "Docker", "LXC", "HA"] },
      { icon: "activity", title: "Observability", desc: "Membangun monitoring real-time dan alerting untuk kesehatan server & bandwidth jaringan.", tags: ["Zabbix", "Grafana", "Prometheus", "SNMP"] },
      { icon: "cloud",   title: "Automation & Cloud", desc: "Mengotomasi tugas infrastruktur dan melangkah ke cloud engineering di jalur DevOps.", tags: ["Python", "IaC", "CI/CD", "AWS"] },
    ],

    skills: [
      { category: "Jaringan", level: 95, items: ["MikroTik RouterOS", "Cisco Catalyst", "VLAN & Trunking", "Routing & Switching", "NAT", "QoS", "TCP/IP", "VoIP Networking", "Integrasi IP-CCTV"] },
      { category: "Infrastruktur & Virtualisasi", level: 82, items: ["Linux (Debian/Ubuntu)", "Proxmox VE", "Docker", "Kubernetes (Belajar)", "LXC"] },
      { category: "Monitoring", level: 80, items: ["Zabbix", "Prometheus", "Grafana", "SNMP Monitoring"] },
      { category: "DevOps & Otomasi", level: 68, items: ["Python", "Git/GitHub", "Infrastructure as Code", "CI/CD"] },
      { category: "Layanan Jaringan", level: 85, items: ["DNS (Unbound/Bind9)", "Port Forwarding"] },
      { category: "Keamanan", level: 75, items: ["Implementasi Firewall Dasar", "Segmentasi Jaringan"] },
      { category: "Lainnya", level: 65, items: ["Flask", "TensorFlow", "Keras", "Data Analytics", "Dokumentasi Teknis (MkDocs, GitHub Pages)"] },
    ],

    languages: [
      { name: "Bahasa Indonesia", level: "Penutur Asli", pct: 100 },
      { name: "Bahasa Inggris", level: "Kemampuan Profesional", pct: 85 },
    ],

    experience: [
      {
        role: "Owner & Lead Engineer", company: "Projekan.ID", period: "Jun 2025 – Sekarang", location: "Indonesia", current: true,
        points: [
          "Mendirikan dan mengelola bisnis freelance yang berfokus pada Web Development, System Administration, dan Networking.",
          "Memimpin tim dalam pengerjaan proyek digital end-to-end untuk klien, dari desain sistem hingga deployment production.",
          "Membangun brand \"Building Your Digital Future\" sebagai solusi teknologi terpercaya untuk kebutuhan infrastruktur dan software.",
        ],
      },
      {
        role: "Network Engineer", company: "PT Kaldyta Mega Tech", period: "Jun 2022 – Sekarang", location: "Sukabumi", current: true,
        points: [
          "Ditugaskan sebagai engineer on-site di klien universitas, bertanggung jawab merancang dan memelihara seluruh jaringan kampus beserta infrastruktur server.",
          "Mengonfigurasi dan mengoptimalkan segmentasi VLAN untuk staf, dosen, mahasiswa, dan server manajemen.",
          "Men-deploy dan memelihara cluster Proxmox VE untuk DNS resolver (Unbound/Bind9), monitoring container, dan layanan internal.",
          "Membangun monitoring stack komprehensif (Zabbix, Prometheus, Grafana) untuk visibilitas real-time kesehatan server dan bandwidth jaringan.",
          "Mengelola switch Cisco Catalyst 1200, termasuk konfigurasi trunking dan optimalisasi uplink.",
          "Menginstal dan mengonfigurasi sistem CCTV berbasis IP menggunakan SADP Tool, terintegrasi ke jaringan monitoring.",
          "Mengimplementasikan infrastruktur VoIP dengan isolasi VLAN dan prioritas QoS.",
        ],
      },
      {
        role: "Senior Laboratory Assistant", company: "Universitas Nusa Putra", period: "Apr 2022 – Jun 2022", location: "Sukabumi",
        points: [
          "Instalasi seluruh perangkat komputer dan jaringan di Lab Komputer (120 unit).",
          "Inventarisasi seluruh peralatan lab dan persiapan lab untuk kebutuhan praktikum dosen.",
          "Berkolaborasi dengan tim IT untuk kebutuhan jaringan di area lab.",
          "Mengajar modul praktikum untuk mahasiswa saat dosen berhalangan hadir.",
        ],
      },
      {
        role: "Social Media Marketing Intern", company: "Zun Duplex", period: "Agu 2019 – Mar 2020", location: "Sukabumi",
        points: [
          "Menyusun strategi pemasaran media sosial untuk meningkatkan pengikut dan pelanggan.",
          "Memperkenalkan produk ke masyarakat umum sekaligus meningkatkan reputasi produk.",
        ],
      },
      {
        role: "IT Technician", company: "PT Intisel Prodaktifakom", period: "Nov 2018 – Jan 2019", location: "Jakarta Selatan",
        points: [
          "Mengembangkan jaringan dan program berbasis web untuk instalasi dan perbaikan sistem kerja perusahaan.",
          "Melakukan maintenance sistem jaringan perusahaan dan program sistem absensi.",
        ],
      },
    ],

    education: [
      {
        degree: "Sarjana Komputer (S.Kom.) — Sistem Informasi (Manajemen & Administrasi TI)",
        school: "Universitas Nusa Putra", period: "2015 – 2022", location: "Sukabumi",
        points: ["IPK Akhir: 3.09", "Skripsi: Implementasi Moving Average terhadap Efektivitas Saldo Akun Trading Bitcoin."],
      },
    ],

    projects: [
      {
        title: "Infrastruktur Jaringan Skala Kampus", period: "2022 – Sekarang",
        desc: "Desain dan pengelolaan jaringan kampus skala besar menggunakan MikroTik dan Cisco Catalyst, mencakup segmentasi VLAN, monitoring stack (Zabbix + Grafana), integrasi CCTV, dan infrastruktur VoIP.",
        stack: ["MikroTik", "Cisco", "Proxmox", "Zabbix", "Grafana", "Prometheus"], link: "",
      },
      {
        title: "AISaFES.ID — AI Smartphone Fundus Eye Scan", period: "2022 – 2025",
        desc: "Platform identifikasi kelainan mata berbasis CNN menggunakan smartphone fundus scan. Terdaftar resmi sebagai Hak Cipta (Program Komputer) di Ditjen Kekayaan Intelektual, Kemenkum RI — No. EC00202515994 (Okt 2025), sebagai salah satu dari 9 pencipta.",
        stack: ["Python", "TensorFlow", "Keras", "Flask", "CNN"], link: "",
      },
      {
        title: "Riset Moving Average Trading Bitcoin", period: "2022",
        desc: "Penelitian dan implementasi strategi Moving Average terhadap efektivitas saldo akun trading Bitcoin, dipublikasikan sebagai karya ilmiah.",
        stack: ["Python", "Data Analysis"], link: "",
      },
      {
        title: "MemeReels — Platform Video Pendek", period: "2025",
        desc: "Platform video pendek berbasis web untuk konten meme, dibangun dengan Vite, React, Supabase, dan Cloudinary. Fokus pada feed, autentikasi, dan upload media.",
        stack: ["Vite", "React", "Supabase", "Cloudinary"], link: "",
      },
    ],

    publications: [
      {
        title: "Implementasi Moving Average terhadap Efektivitas Saldo Akun Trading Bitcoin",
        author: "Enggar Irawan", meta: "Publikasi ilmiah",
      },
    ],

    certifications: [
      { name: "MikroTik Certified Network Associate (MTCNA)", issuer: "MikroTik", year: "2022", badge: "🏅" },
      { name: "EnGenius Certified Network Professional (ECNP)", issuer: "EnGenius", year: "", badge: "📡" },
      { name: "EnGenius Certified Network Specialist (ECNS)", issuer: "EnGenius", year: "", badge: "📡" },
      { name: "EnGenius Certified Wireless Professional (ECWP)", issuer: "EnGenius", year: "", badge: "📡" },
      { name: "Ruijie Certified Network Associate — Routing & Switching (RCNA)", issuer: "Ruijie Networks", year: "2023–2029", badge: "🥇" },
      { name: "Omada Certified Network Administrator — Routing & Switching (OCNA)", issuer: "TP-Link Omada", year: "2024–2028", badge: "🥇" },
      { name: "FCP — FortiGate 7.4 Administrator Self-Paced", issuer: "Fortinet Training Institute", year: "", badge: "🛡️" },
      { name: "FCF — Introduction to the Threat Landscape 2.0", issuer: "Fortinet Training Institute", year: "", badge: "🛡️" },
      { name: "FCF — Technical Introduction to Cybersecurity 1.0", issuer: "Fortinet Training Institute", year: "", badge: "🛡️" },
      { name: "Google Analytics Certification", issuer: "Google", year: "2022", badge: "📊" },
      { name: "Certified Associate in Python Programming", issuer: "ProGate / DQLab", year: "2021", badge: "🐍" },
      { name: "British Council CEFR Professional English", issuer: "British Council", year: "", badge: "🗣️" },
    ],
  },
};
