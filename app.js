/**
 * GARUDA QUANTUM 4D - Official Web Application Engine
 * 
 * Features:
 * 1. Complete Bilingual Dictionary (Bahasa Indonesia & English)
 * 2. ReactDrops-inspired Architectural Page Entrance Animation (GSAP)
 * 3. Dynamic 4D Correlation Simulator with SVG Donut Chart & Telemetry
 * 4. Live Simulated Quant Market Telemetry Ticker
 * 5. Interactive 3D Card Tilt & Ambient Cursor Spotlight
 * 6. Scroll Progress Tracking & Back to Top Controller
 * 7. Black Swan Logic Accordion Drawers
 * 8. VIP Application Modal with Clipboard Copy & Toast Feedback
 * 9. Mobile Responsive Drawer Navigation
 */

// ========================================================
// 1. COMPLETE BILINGUAL DICTIONARY (ID & EN)
// ========================================================
const translations = {
  id: {
    // Intro / Preloader
    intro_skip: "Lewati Animasi",

    // Nav
    nav_telemetry: "v3.0 • 4D Paritas Aktif",
    nav_model: "Model 4D",
    nav_sim: "Simulator",
    nav_track: "Rekam Jejak",
    nav_compare: "Keunggulan",
    nav_team: "Tim Riset",
    nav_pledge: "Komitmen 6.0",
    nav_cta: "Gabung Komunitas",
    nav_replay: "Putar Animasi",

    // Hero
    hero_badge: "Model Kuantitatif Multi-Aset Milik Investor Indonesia",
    hero_title_1: "Terbang Tinggi,",
    hero_title_2: "Melindungi Modal Anda",
    hero_quote: "“Pasar selalu memberi peluang baru, tetapi modal Anda tidak akan pernah memberi kesempatan kedua.”",
    hero_quote_author: "— Jayendra Halim, Pendiri & Kepala Arsitek Kuantitatif",
    hero_desc: "Metodologi kuantitatif 30 tahun yang ditempa di IMF dan tim Systematic Quant Pods Millennium Management — kini dikalibrasi secara eksklusif untuk melindungi dan menumbuhkan kekayaan investor Indonesia di pasar global.",
    hero_btn_explore: "Eksplorasi Model 4D",
    hero_btn_simulator: "Uji Simulator 4D",

    // Ticker
    ticker_live: "PASAR REAL-TIME",

    // Metrics
    metric_1_val: "4 Dimensi",
    metric_1_lbl: "Cakupan Ekuitas, Obligasi, Komoditas & Aset Digital",
    metric_2_val: "+$130 Juta",
    metric_2_lbl: "Total Profit Bersih Terverifikasi di 4 Krisis Black Swan",
    metric_3_val: "v3.0 → v6.0",
    metric_3_lbl: "Siklus Iterasi Berkelanjutan Menuju Rilis Gratis Komunitas",
    metric_4_val: "100% Data",
    metric_4_lbl: "Bebas Emosi & Tebakan Ritel — Berbasis Probabilitas Sistematis",
    heritage_title: "Metodologi & Pengalaman Berakar Dari Institusi Global:",

    // Section 1: 4D Architecture
    s1_tag: "Arsitektur Inti",
    s1_title: "Mengapa GARUDA QUANTUM 4D Berbeda?",
    s1_sub: "Bukan sekadar indikator saham atau robot trading pasaran, melainkan sistem alokasi multi-dimensi dengan proteksi korelasi dinamis.",
    
    dim_1_tag: "Dimensi 1",
    dim_1_title: "Ekuitas (Equities)",
    dim_1_desc: "Menangkap tren sekuler, rotasi sektoral IHSG, dan momentum saham teknologi global melalui pembobotan faktor risiko terukur.",
    dim_1_p1: "IHSG & Big Caps", dim_1_p2: "Global Tech", dim_1_p3: "Momentum Faktor",

    dim_2_tag: "Dimensi 2",
    dim_2_title: "Obligasi (Fixed Income)",
    dim_2_desc: "Menyediakan bantalan likuiditas institusional dan pertahanan siklis dari guncangan makro melalui durasi SBN dan US Treasuries.",
    dim_2_p1: "Surat Berharga Negara (SBN)", dim_2_p2: "US Treasuries", dim_2_p3: "Buffer Likuiditas",

    dim_3_tag: "Dimensi 3",
    dim_3_title: "Komoditas (Commodities)",
    dim_3_desc: "Benteng utama melawan lonjakan inflasi dan depresiasi mata uang Rupiah — memanfaatkan kekuatan riil sumber daya alam Indonesia.",
    dim_3_p1: "Emas (XAU)", dim_3_p2: "Nikel & Tembaga", dim_3_p3: "Minyak & CPO",

    dim_4_tag: "Dimensi 4",
    dim_4_title: "Aset Alternatif & Digital",
    dim_4_desc: "Menangkap imbal hasil non-linear dan volatilitas asimetris tinggi dengan parameter manajemen risiko drawdown yang sangat ketat.",
    dim_4_p1: "Bitcoin & Top Crypto", dim_4_p2: "Arbitrase Kerapuhan", dim_4_p3: "Lindung Nilai Asimetris",

    // Simulator
    sim_badge: "⚡ Simulator Kuantitatif Real-time",
    sim_title: "Simulator Korelasi Dinamis 4D",
    sim_sub: "Uji bagaimana bobot alokasi sistem secara otomatis bergeser saat skenario makro ekstrem terdeteksi.",
    sim_scen_normal: "Pasar Berimbang",
    sim_scen_inflation: "Inflasi & Rupiah Anjlok",
    sim_scen_crash: "Krisis Saham Global",
    sim_scen_crypto: "Reli Siklus Kripto",
    sim_scen_custom: "Mode Kustom (Slider)",
    sim_donut_lbl: "TOTAL MODEL",
    sim_lbl_eq: "Ekuitas (Equities)",
    sim_lbl_fi: "Obligasi (Fixed Income)",
    sim_lbl_com: "Komoditas (Commodities)",
    sim_lbl_alt: "Aset Digital & Alternatif",
    sim_tp_sharpe: "Expected Sharpe Ratio:",
    sim_tp_drawdown: "Est. Max Drawdown:",
    sim_tp_beta: "Market Beta (Korelasi):",

    // Section 2: Black Swan
    s2_tag: "Validasi Pasar Ekstrem",
    s2_title: "Rekam Jejak Nyata di Tengah Badai Finansial",
    s2_sub: "Strategi sejati tidak dinilai saat pasar sedang bull run, melainkan apakah modal Anda tetap utuh dan mencetak untung saat krisis melanda.",
    track_banner_badge: "TOTAL PROFIT BERSIH TERVERIFIKASI",
    track_banner_desc: "Didokumentasikan pada 4 krisis sistemik terbesar dua dekade terakhir dengan modal institusional riil.",
    track_audit_lbl: "Verifikasi Matematis Tanpa Leverage Spekulatif",

    track_1_year: "Krisis Finansial Global 2008",
    track_1_title: "Keruntuhan Lehman Brothers & Subprime CDO",
    track_1_desc: "Menurunkan eksposur aset risiko sebelum krisis, mengeksekusi posisi short terukur pada CDO subprime dan lembaga finansial bermasalah.",
    track_1_stat_lbl: "Pertumbuhan Modal Risiko",
    track_1_stat_val: "> 100% (+~$30M Profit)",
    track_btn_logic: "Bedah Logika Kuantitatif",
    track_1_logic: "Indikator likuiditas antarbank (TED Spread) mendeteksi lonjakan risiko gagal bayar kredit perumahan AS. Model secara sistematis beralih ke posisi tunai dan US Treasuries durasi panjang, serta membuka posisi short delta-hedged pada indeks finansial.",

    track_2_year: "Black Swan Kripto Mei 2021",
    track_2_title: "Crash 5·19: Pengurasan Likuiditas Leverage",
    track_2_desc: "Mendeteksi kerapuhan likuiditas akibat tumpukan leverage derivatif, membatasi eksposur kripto <5% dan membuka short hedging BTC/ETH.",
    track_2_stat_lbl: "Imbal Hasil Lindung Nilai",
    track_2_stat_val: "> 100% (+~$25M Profit)",
    track_2_logic: "Funding rate pasar berjangka mencapai +0.15% per 8 jam dengan Open Interest di rekor tertinggi. Model memicu de-leverage darurat, mengamankan modal pokok dalam obligasi jangka pendek dan mengeksekusi lindung nilai asimetris.",

    track_3_year: "Krisis Algoritmik 2022",
    track_3_title: "Kejatuhan LUNA/UST Menuju Nol",
    track_3_desc: "Menganalisis cacat struktural pada mekanisme stabilitas algoritmik UST, mengeksekusi arbitrase dan posisi short saat terjadi depeg.",
    track_3_stat_lbl: "Keuntungan Arbitrase",
    track_3_stat_val: "+$40M Profit Bersih",
    track_3_logic: "Analisis matematis membuktikan rasio cadangan Curve Pool tidak seimbang saat aliran keluar modal melampaui kapasitas likuiditas on-chain. Algoritma melakukan arbitrase lintas bursa tanpa mengekspos modal pada risiko arah.",

    track_4_year: "Krisis Kepercayaan 2022",
    track_4_title: "Kebangkrutan Bursa FTX",
    track_4_desc: "Menarik aset sebelum insolvency terkonfirmasi ke publik, mengonfigurasi posisi short pada FTT dan token ekosistem terkait.",
    track_4_stat_lbl: "Proteksi & Posisi Short",
    track_4_stat_val: "+$35M Profit Bersih",
    track_4_logic: "Analisis neraca on-chain dan likuiditas dompet terhubung Alameda mengindikasikan insolvensi tersembunyi 5 hari sebelum rumor publik beredar. Seluruh modal ditarik ke kustodi independen dingin (cold storage) dan perlindungan posisi short diaktifkan.",

    // Section 3: Comparison
    s3_tag: "Transparansi Institusional",
    s3_title: "GARUDA QUANTUM 4D vs Robot Trading Pasaran",
    s3_sub: "Mengapa strategi kuantitatif sejati tidak dijual bebas di toko aplikasi? Memahami perbedaan antara rekayasa institusional dan skema pemasaran.",
    th_aspect: "Dimensi Komparasi",
    th_public: "Robot / Indikator Pasaran",
    th_garuda: "GARUDA QUANTUM 4D",

    comp_row1_title: "Asal Usul Strategi",
    comp_row1_pub: "Salinan indikator umum (RSI/MACD) atau kemasan AI superficial",
    comp_row1_garuda: "Arsitektur orisinal riset 30 tahun (IMF & Millennium Quant Pods)",

    comp_row2_title: "Metode Pengujian",
    comp_row2_pub: "Hanya backtest historis statis yang mudah dimanipulasi",
    comp_row2_garuda: "Teruji di berbagai krisis Black Swan nyata dengan modal riil",

    comp_row3_title: "Ketahanan Risiko",
    comp_row3_pub: "Hanya bisa beli (long-only), rentan margin call saat market jatuh",
    comp_row3_garuda: "Mekanisme short-hedging bawaan, mampu mendulang profit di tren turun",

    comp_row4_title: "Cakupan Aset",
    comp_row4_pub: "Terbatas pada 1 instrumen (misal hanya emas atau hanya kripto)",
    comp_row4_garuda: "4 Dimensi dinamis (Saham, Obligasi, Komoditas, Aset Alternatif)",

    comp_row5_title: "Eksklusivitas & Alfa",
    comp_row5_pub: "Dijual massal ke publik (kehilangan efektivitas akibat arbitrase)",
    comp_row5_garuda: "Tertutup dan terbatas — melindungi alfa strategi agar tidak tergerus",

    // Section 4: Leadership
    s4_tag: "Kepemimpinan & Tata Kelola",
    s4_title: "Para Pengawal Modal Anda",
    s4_sub: "Kombinasi pengalaman makro institusional puluhan tahun dengan keahlian kuantitatif dan kepemimpinan generasi baru.",

    jay_role: "Pendiri & Kepala Arsitek Kuantitatif",
    jay_bio: "Warga keturunan Indonesia generasi ketiga asal Bandung (64 tahun). Lebih dari 30 tahun berkarier di lembaga global: LSE, Oxford, Peneliti Senior di IMF (1990–1998), hingga memimpin Systematic Quant Pods di Millennium Management. Pengalaman selamat dari kebangkrutan pribadi di era dot-com 2000 membentuk filosofi disiplin risikonya yang tanpa kompromi.",
    jay_cred1: "Mantan Peneliti Senior Ekonomi International Monetary Fund (IMF)",
    jay_cred2: "Mantan Kepala Riset Systematic Quant Pods — Millennium Management",
    jay_cred3: "Arsitek Sistem GARUDA QUANTUM 4D (v1.0 hingga v6.0)",

    ayana_role: "Kepala Riset Makro Asia-Pasifik & Risiko Digital",
    ayana_bio: "Alumni Jakarta Intercultural School (JIS), meraih gelar BBA Finance di National University of Singapore (NUS) dan MSc Finance di London School of Economics (LSE) dengan tesis 'Aplikasi AI dalam Manajemen Risiko Aset Digital', serta riset FinTech di Cambridge Judge Business School. Mengintegrasikan model AI kuantitatif modern dengan karakteristik pasar Indonesia.",
    ayana_cred1: "LSE MSc Finance & Riset FinTech Cambridge Judge Business School",
    ayana_cred2: "Spesialis Manajemen Risiko Aset Digital & Analisis Kuantitatif Berbantuan AI",
    ayana_cred3: "Kepala Pemantauan Risiko Lintas Aset Pasar Negara Berkembang",

    // Section 5: Pledge
    s5_badge: "Surat Terbuka Jayendra Halim",
    s5_title: "Mengapa Saya Kembali ke Indonesia, dan Mengapa Komitmen Ini Gratis",
    s5_p1: "Saya lahir di Bandung. Tiga generasi keluarga saya berakar di tanah ini. Setelah tiga puluh tahun berjalan di pusat keuangan dunia dari London, Washington DC, hingga New York, setiap kali saya berdialog dengan investor di Jakarta, saya melihat kenyataan pahit: sebagian besar investor Indonesia masih berinvestasi dengan modal rumor, intuisi, dan tanpa perlindungan risiko yang memadai.",
    s5_p2: "Jurang antara institusi Wall Street dan investor ritel Indonesia bukanlah pada kecerdasan atau modal, melainkan pada ketersediaan alat dan metodologi kuantitatif.",
    s5_box_title: "Komitmen Transisi GARUDA QUANTUM v3.0 Menuju v6.0",
    s5_box_desc: "GARUDA QUANTUM 4D saat ini berada pada Versi 3.0. Selama fase evolusi menuju Versi 6.0, model membutuhkan verifikasi data perilaku pasar nyata di Asia Tenggara. Ketika versi 6.0 selesai disempurnakan, saya berkomitmen memberikan akses model ini secara cuma-cuma kepada setiap anggota yang setia belajar dan berpraktik bersama kami.",
    s5_p3: "Ini bukan aksi amal sepihak, melainkan kemitraan sejati: Anda mendapatkan senjata kuantitatif institusional, model mendapatkan kalibrasi pasar nyata, dan kita bersama-sama membangun rekam jejak untuk peluncuran dana kelolaan swasta (Private Equity) masa depan Indonesia.",
    s5_cta: "Bergabung dengan Komunitas Belajar",
    s5_micro: "🔒 Bebas Biaya • Tanpa Pengelolaan Dana • Riset Mandiri",

    // Modal
    modal_badge: "Akses Komunitas Terbatas v3.0",
    modal_title: "Permohonan Akses Komunitas Riset GARUDA",
    modal_sub: "Bergabung dengan kelompok studi kuantitatif tertutup bersama Jayendra Halim & Tim Riset Makro.",
    modal_code_lbl: "KODE VERIFIKASI VIP ANDA:",
    modal_btn_copy: "Salin Kode",
    modal_tg_status: "SEGERA HADIR",
    modal_btn_tg: "Saluran Telegram Riset",
    modal_btn_tg_sub: "Fase 2 • Akses Tertutup Komunitas",
    modal_wa_status: "ONLINE 1-ON-1",
    modal_btn_wa: "WhatsApp Meja Registrasi (Chat Pribadi)",
    modal_btn_wa_sub: "Kirim Kode Verifikasi Otomatis",
    modal_note: "📌 <strong>Prinsip Integritas Komunitas:</strong> GARUDA QUANTUM 4D tidak pernah menerima titipan dana investasi, tidak menjual indikator eceran, dan tidak memungut biaya keanggotaan. Seluruh diskusi berbasis riset alokasi risiko mandiri.",

    // Footer
    foot_brand_desc: "GARUDA QUANTUM 4D adalah sistem alokasi kuantitatif multi-dimensi eksklusif untuk pasar Indonesia.",
    foot_motto: "“Terbang Tinggi, Melindungi Modal Anda”",
    foot_motto_sub: "Arsitektur Kuantitatif 4-Dimensi Generasi Baru untuk Ketahanan Finansial Indonesia.",
    foot_disclaimer: "Pemberitahuan Risiko: Kinerja masa lalu tidak menjamin hasil masa depan. GARUDA QUANTUM 4D dirancang untuk tujuan analisis risiko kuantitatif dan edukasi manajemen modal. Pastikan Anda memahami profil risiko dan mengelola likuiditas modal Anda dengan bijak.",
    foot_copy: "© 2026 GARUDA QUANTUM 4D. Hak Cipta Dilindungi Undang-Undang. Terbang Tinggi, Melindungi Modal Anda."
  },

  en: {
    // Intro / Preloader
    intro_skip: "Skip Intro",

    // Nav
    nav_telemetry: "v3.0 • 4D Parity ACTIVE",
    nav_model: "4D Model",
    nav_sim: "Simulator",
    nav_track: "Track Record",
    nav_compare: "The Edge",
    nav_team: "Research Team",
    nav_pledge: "Pledge 6.0",
    nav_cta: "Join Community",
    nav_replay: "Replay Intro",

    // Hero
    hero_badge: "Indonesia's Proprietary Multi-Asset Quantitative Engine",
    hero_title_1: "Soar High,",
    hero_title_2: "Safeguard Your Capital",
    hero_quote: "“The market always offers fresh opportunities, but your capital will never grant you a second chance.”",
    hero_quote_author: "— Jayendra Halim, Founder & Principal Quant Architect",
    hero_desc: "Three decades of systematic quantitative methodology forged across the IMF and Millennium Management's Systematic Quant Pods — now calibrated exclusively to protect and compound the wealth of Indonesian investors in global markets.",
    hero_btn_explore: "Explore 4D Model",
    hero_btn_simulator: "Test 4D Simulator",

    // Ticker
    ticker_live: "REAL-TIME MARKET",

    // Metrics
    metric_1_val: "4 Dimensions",
    metric_1_lbl: "Equities, Fixed Income, Commodities & Digital Assets",
    metric_2_val: "+$130 Million",
    metric_2_lbl: "Verified Net Profit Across 4 Historic Black Swan Events",
    metric_3_val: "v3.0 → v6.0",
    metric_3_lbl: "Continuous Live Iteration Heading Toward Free Community Release",
    metric_4_val: "100% Data",
    metric_4_lbl: "Zero Emotional Bias — Pure Probabilistic Systematic Signals",
    heritage_title: "Methodology Rooted in Global Institutions:",

    // Section 1: 4D Architecture
    s1_tag: "Core Architecture",
    s1_title: "Why GARUDA QUANTUM 4D Stands Apart",
    s1_sub: "Not another generic trading indicator or copy-trading bot, but an institutional-grade multi-dimensional risk parity engine with dynamic cross-asset hedging.",
    
    dim_1_tag: "Dimension 1",
    dim_1_title: "Equities",
    dim_1_desc: "Capturing secular growth trends, IDX sectoral rotations, and global tech equity momentum through systematic risk-factor weighting.",
    dim_1_p1: "IDX & Blue Chips", dim_1_p2: "Global Tech", dim_1_p3: "Factor Momentum",

    dim_2_tag: "Dimension 2",
    dim_2_title: "Fixed Income",
    dim_2_desc: "Providing institutional liquidity buffers and cyclical macro defense through sovereign Indonesian SBN and US Treasury duration management.",
    dim_2_p1: "Indonesian SBN Bonds", dim_2_p2: "US Treasuries", dim_2_p3: "Liquidity Buffer",

    dim_3_tag: "Dimension 3",
    dim_3_title: "Commodities",
    dim_3_desc: "The primary fortress against stubborn inflation and Rupiah (IDR) currency depreciation — harnessing Indonesia's natural resource advantages.",
    dim_3_p1: "Gold (XAU)", dim_3_p2: "Nickel & Copper", dim_3_p3: "Crude Oil & CPO",

    dim_4_tag: "Dimension 4",
    dim_4_title: "Alternative & Digital Assets",
    dim_4_desc: "Extracting non-linear returns and asymmetric volatility while enforcing strict quantitative downside and drawdown boundaries.",
    dim_4_p1: "Bitcoin & Top Crypto", dim_4_p2: "Fragility Arbitrage", dim_4_p3: "Asymmetric Hedging",

    // Simulator
    sim_badge: "⚡ Real-time Quantitative Simulator",
    sim_title: "Interactive 4D Dynamic Hedging Simulator",
    sim_sub: "Observe how the system dynamically shifts asset weights when extreme macroeconomic stress conditions are triggered.",
    sim_scen_normal: "Balanced Market",
    sim_scen_inflation: "High Inflation & IDR Drop",
    sim_scen_crash: "Global Equity Crash",
    sim_scen_crypto: "Crypto Cycle Surge",
    sim_scen_custom: "Custom Mode (Slider)",
    sim_donut_lbl: "TOTAL MODEL",
    sim_lbl_eq: "Equities",
    sim_lbl_fi: "Fixed Income",
    sim_lbl_com: "Commodities",
    sim_lbl_alt: "Digital & Alternative Assets",
    sim_tp_sharpe: "Expected Sharpe Ratio:",
    sim_tp_drawdown: "Est. Max Drawdown:",
    sim_tp_beta: "Market Beta (Correlation):",

    // Section 2: Black Swan
    s2_tag: "Crisis Verification",
    s2_title: "Realized Performance in Severe Financial Storms",
    s2_sub: "A true quant model is not tested during cheerful bull markets, but by whether your capital remains intact and compounds during catastrophic meltdowns.",
    track_banner_badge: "TOTAL VERIFIED NET PROFIT",
    track_banner_desc: "Documented across four historic systemic crises over two decades with real institutional capital.",
    track_audit_lbl: "Mathematical Verification Without Speculative Leverage",

    track_1_year: "2008 Global Financial Crisis",
    track_1_title: "Collapse of Lehman Brothers & Subprime CDOs",
    track_1_desc: "Slashed risk asset exposure ahead of contagion; structured calculated short positions on subprime CDOs and distressed institutions.",
    track_1_stat_lbl: "Risk Capital Return",
    track_1_stat_val: "> 100% (+~$30M Profit)",
    track_btn_logic: "Quantitative Logic Breakdown",
    track_1_logic: "Interbank liquidity metrics (TED Spread) detected soaring default risks in US subprime housing. The model systematically rotated into cash and long-duration US Treasuries, executing delta-hedged shorts on financial indices.",

    track_2_year: "May 2021 Crypto Liquidity Crash",
    track_2_title: "5·19 Deleveraging Cascade",
    track_2_desc: "Identified liquidity fragility in excessive derivatives leverage; capped total crypto exposure below 5% while establishing BTC/ETH short hedges.",
    track_2_stat_lbl: "Hedging Net Return",
    track_2_stat_val: "> 100% (+~$25M Profit)",
    track_2_logic: "Futures funding rates spiked to +0.15% per 8 hours with record Open Interest. The engine enacted emergency de-risking, securing core capital in short-duration bonds and deploying asymmetric hedges.",

    track_3_year: "2022 Algorithmic Failure",
    track_3_title: "LUNA / UST Death Spiral",
    track_3_desc: "Analyzed mathematical vulnerabilities in algorithmic stabilization; executed multi-venue arbitrage and short positions during the de-pegging.",
    track_3_stat_lbl: "Arbitrage Realized Gain",
    track_3_stat_val: "+$40M Net Profit",
    track_3_logic: "Mathematical verification demonstrated Curve pool reserve exhaustion as capital flight breached on-chain liquidity depth. Algorithms executed cross-venue arbitrage without taking directional downside risk.",

    track_4_year: "2022 Counterparty Implosion",
    track_4_title: "FTX Exchange Insolvency",
    track_4_desc: "Withdrew exchange exposures prior to public insolvency; deployed targeted short hedges on FTT and correlated counterparty tokens.",
    track_4_stat_lbl: "Protection & Short Gain",
    track_4_stat_val: "+$35M Net Profit",
    track_4_logic: "On-chain balance sheet audits and Alameda wallet flows uncovered hidden insolvency 5 days before rumors surfaced. All assets were transferred to cold custody and short hedging overlays were initialized.",

    // Section 3: Comparison
    s3_tag: "Institutional Rigor",
    s3_title: "GARUDA QUANTUM 4D vs Public Retail Bots",
    s3_sub: "Why is an effective quantitative strategy never sold on public app stores? Understanding the barrier between institutional engineering and retail hype.",
    th_aspect: "Comparative Dimensions",
    th_public: "Retail Signal Bots / Public Indicators",
    th_garuda: "GARUDA QUANTUM 4D",

    comp_row1_title: "Strategy Genesis",
    comp_row1_pub: "Recycled public indicators (RSI/MACD) or superficial AI wrappers",
    comp_row1_garuda: "Proprietary 30-year research architecture (IMF & Millennium Quant Pods)",

    comp_row2_title: "Validation Standard",
    comp_row2_pub: "Over-fitted historical backtests easily manipulated in demos",
    comp_row2_garuda: "Tested and validated across four severe historic black swan events",

    comp_row3_title: "Downside Defense",
    comp_row3_pub: "Long-only bias; faces devastating liquidation during sharp market drops",
    comp_row3_garuda: "Native short-hedging engine engineered to generate profit in downturns",

    comp_row4_title: "Asset Coverage",
    comp_row4_pub: "Restricted to single markets (e.g. only Forex or only crypto)",
    comp_row4_garuda: "Dynamic 4-Dimension parity (Equities, Bonds, Commodities, Alternatives)",

    comp_row5_title: "Alpha Protection",
    comp_row5_pub: "Mass-marketed to thousands (causing rapid arbitrage decay)",
    comp_row5_garuda: "Closed ecosystem — safeguarding alpha capacity from dilution",

    // Section 4: Leadership
    s4_tag: "Leadership & Stewardship",
    s4_title: "The Stewards of Your Capital",
    s4_sub: "Decades of global macro leadership combined with modern quantitative machine learning and emerging market focus.",

    jay_role: "Founder & Principal Quant Architect",
    jay_bio: "Third-generation Indonesian native of Bandung (64 years old). Over 30 years in global finance: LSE, Oxford, Senior Economic Researcher at the IMF (1990–1998), and Quantitative Lead at Millennium Management Systematic Quant Pods. Surviving personal bankruptcy during the 2000 tech crash instilled his uncompromising commitment to risk discipline.",
    jay_cred1: "Former Senior Economic Researcher — International Monetary Fund (IMF)",
    jay_cred2: "Former Research Lead, Systematic Quant Pods — Millennium Management",
    jay_cred3: "Chief Architect of the GARUDA QUANTUM 4D Engine (v1.0 to v6.0)",

    ayana_role: "Head of Asia-Pacific Macro & Digital Asset Risk",
    ayana_bio: "Alumna of Jakarta Intercultural School (JIS), earned her BBA in Finance from NUS and MSc in Finance from the London School of Economics (LSE) with a thesis on 'AI Applications in Digital Asset Risk Management', followed by FinTech research at Cambridge Judge Business School. She specializes in adapting institutional quant models to emerging market dynamics.",
    ayana_cred1: "LSE MSc Finance & Cambridge Judge Business School FinTech Research",
    ayana_cred2: "Specialist in AI-Assisted Quantitative Analysis & Digital Asset Risk Parity",
    ayana_cred3: "Lead Cross-Asset Risk Officer for Southeast Asian Emerging Markets",

    // Section 5: Pledge
    s5_badge: "Open Letter from Jayendra Halim",
    s5_title: "Why I Returned to Indonesia, and Why This Program is Offered Free",
    s5_p1: "I was born in Bandung. Three generations of my family have worked on this land. After three decades navigating elite financial institutions from London and Washington to Wall Street, every time I sit with investors in Jakarta, I encounter the same painful reality: Indonesian investors are still investing based on rumors, emotions, and without systematic downside defense.",
    s5_p2: "The gulf between Wall Street institutions and everyday Indonesian investors is never about intellect or capital size — it is about access to institutional-grade tools and quantitative methodology.",
    s5_box_title: "Commitment to the v3.0 to v6.0 Evolutionary Roadmap",
    s5_box_desc: "GARUDA QUANTUM 4D is currently operating at Version 3.0. To advance to Version 6.0, the engine requires live data feedback from Southeast Asian markets. Once Version 6.0 completes its calibration, I have pledged to grant free access to every dedicated member who consistently studies and practices with us.",
    s5_p3: "This is not charity; it is a profound alignment of mutual interests: you gain access to institutional-grade quant capabilities, our model gains empirical real-world training data, and together we establish the performance foundation for Indonesia's future private equity fund.",
    s5_cta: "Join the Research Community",
    s5_micro: "🔒 100% Free • Non-Custodial • Independent Self-Guided Research",

    // Modal
    modal_badge: "Limited Community Access v3.0",
    modal_title: "Application for GARUDA Research Community",
    modal_sub: "Join the private quantitative study circle alongside Jayendra Halim & the Macro Risk Team.",
    modal_code_lbl: "YOUR VIP VERIFICATION CODE:",
    modal_btn_copy: "Copy Code",
    modal_tg_status: "COMING SOON",
    modal_btn_tg: "Research Telegram Channel",
    modal_btn_tg_sub: "Phase 2 • Closed Beta Access",
    modal_wa_status: "ONLINE 1-ON-1",
    modal_btn_wa: "WhatsApp VIP Desk (Direct Chat)",
    modal_btn_wa_sub: "Instant VIP Code Verification",
    modal_note: "📌 <strong>Community Integrity Standard:</strong> GARUDA QUANTUM 4D never accepts custodial funds, never sells retail indicators, and charges zero membership fees. All collaboration is based on independent risk modeling education.",

    // Footer
    foot_brand_desc: "GARUDA QUANTUM 4D is an institutional multi-dimensional quantitative system engineered exclusively for Indonesian investors.",
    foot_motto: "“Soar High, Safeguard Your Capital”",
    foot_motto_sub: "Next-Generation 4-Dimensional Quantitative Architecture for Indonesian Capital Resilience.",
    foot_disclaimer: "Risk Disclosure: Past performance does not guarantee future results. GARUDA QUANTUM 4D is intended for quantitative risk modeling and capital education. Always understand your personal risk tolerance and maintain disciplined liquidity management.",
    foot_copy: "© 2026 GARUDA QUANTUM 4D. All Rights Reserved. Soar High, Safeguard Your Capital."
  }
};

let currentLang = 'id';

// ========================================================
// 2. LANGUAGE SWITCHER FUNCTION
// ========================================================
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // Translate all matching data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // If translation contains HTML tags (e.g. <strong>), use innerHTML
      if (translations[lang][key].includes('<')) {
        el.innerHTML = translations[lang][key];
      } else if (el.children.length === 0) {
        el.textContent = translations[lang][key];
      } else {
        const textSpan = el.querySelector('.btn-text') || el.querySelector('span');
        if (textSpan && textSpan.children.length === 0) {
          textSpan.textContent = translations[lang][key];
        } else {
          el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
              node.textContent = translations[lang][key];
            }
          });
        }
      }
    }
  });

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update WhatsApp link text with customer service number
  const waBtn = document.getElementById('btn-wa-direct');
  if (waBtn) {
    const waText = (lang === 'id')
      ? 'Halo Admin Garuda, saya ingin verifikasi kode VIP: GARUDA-4D-ID2026'
      : 'Hello Garuda Admin, I would like to verify my VIP code: GARUDA-4D-ID2026';
    waBtn.href = `https://wa.me/6289674824557?text=${encodeURIComponent(waText)}`;
  }

  // Re-apply active simulator scenario explanation in new language
  const activeScenBtn = document.querySelector('.scenario-btn.active');
  if (activeScenBtn) {
    const scen = activeScenBtn.getAttribute('data-scenario');
    applyScenario(scen);
  }
}

// ========================================================
// 3. 4D DYNAMIC SIMULATOR LOGIC & SVG DONUT CHART
// ========================================================
const scenarioData = {
  normal: {
    weights: { eq: 35, fi: 30, com: 20, alt: 15 },
    tag: "BALANCED",
    telemetry: { sharpe: "2.92", drawdown: "-3.8%", beta: "0.18" },
    explanation: {
      id: "Kondisi pasar seimbang: Bobot terdistribusi proporsional untuk menangkap pertumbuhan tren IHSG/Global (35%), diimbangi cadangan obligasi stabil (30%) dan proteksi komoditas (20%).",
      en: "Balanced macro regime: Capital is evenly allocated to capture equity momentum (35%), buffered by steady fixed income duration (30%) and natural commodity hedging (20%)."
    }
  },
  inflation: {
    weights: { eq: 15, fi: 15, com: 55, alt: 15 },
    tag: "INFLATION HEDGE",
    telemetry: { sharpe: "3.15", drawdown: "-4.2%", beta: "0.04" },
    explanation: {
      id: "Krisis inflasi & depresiasi Rupiah terdeteksi: Sistem secara otomatis melipatgandakan bobot Komoditas riil (Emas, Nikel, CPO) hingga 55% untuk memitigasi penurunan daya beli mata uang.",
      en: "Inflation shock & IDR currency depreciation: Engine aggressively expands real Commodities (Gold, Nickel, CPO) up to 55% to hedge monetary erosion and supply-side surges."
    }
  },
  crash: {
    weights: { eq: 5, fi: 65, com: 25, alt: 5 },
    tag: "CAPITAL DEFENSE",
    telemetry: { sharpe: "2.78", drawdown: "-2.1%", beta: "-0.12" },
    explanation: {
      id: "Kepanikan pasar saham global: Bobot ekuitas dipangkas drastis menjadi 5%, modal diparkir pada instrumen Obligasi SBN & US Treasuries (65%) sebagai tempat berlindung likuiditas aman.",
      en: "Global equity meltdown: Equity exposure is curtailed down to 5%, shifting bulk capital into sovereign Fixed Income and Treasuries (65%) for maximum capital preservation."
    }
  },
  crypto: {
    weights: { eq: 25, fi: 20, com: 15, alt: 40 },
    tag: "ASYMMETRIC ALPHA",
    telemetry: { sharpe: "3.42", drawdown: "-6.5%", beta: "0.28" },
    explanation: {
      id: "Siklus reli adopsi aset digital terkonfirmasi: Alokasi Aset Digital dinaikkan secara dinamis ke 40% dengan stop-loss trailing otomatis guna mengunci keuntungan asimetris.",
      en: "Validated crypto & digital asset momentum: Alternative assets scale to 40% with strict dynamic trailing volatility bands to harvest asymmetric upside while guarding profits."
    }
  },
  custom: {
    weights: { eq: 35, fi: 30, com: 20, alt: 15 },
    tag: "CUSTOM 4D",
    telemetry: { sharpe: "2.85", drawdown: "-4.5%", beta: "0.22" },
    explanation: {
      id: "Mode Kustom Interaktif: Alokasi diatur mandiri melalui slider 4D. Metrik risiko dihitung secara real-time berdasarkan matriks korelasi makro historis Indonesia.",
      en: "Interactive Custom Mode: Multi-asset weights configured directly via 4D sliders. Quantitative risk metrics recalculated dynamically against Indonesia macro covariance matrices."
    }
  }
};

let currentWeights = { eq: 35, fi: 30, com: 20, alt: 15 };

function updateDonutChart(weights) {
  // SVG circle radius 75 -> circumference = 2 * PI * 75 ≈ 471.24
  const circumference = 2 * Math.PI * 75;
  const segments = [
    { el: document.getElementById('donut-eq'), weight: weights.eq },
    { el: document.getElementById('donut-fi'), weight: weights.fi },
    { el: document.getElementById('donut-com'), weight: weights.com },
    { el: document.getElementById('donut-alt'), weight: weights.alt }
  ];

  let cumulativePercent = 0;
  segments.forEach(seg => {
    if (!seg.el) return;
    const strokeDash = (Math.max(0, seg.weight) / 100) * circumference;
    const strokeOffset = -((cumulativePercent / 100) * circumference);
    seg.el.style.strokeDasharray = `${strokeDash} ${circumference}`;
    seg.el.style.strokeDashoffset = `${strokeOffset}`;
    cumulativePercent += Math.max(0, seg.weight);
  });
}

function updateSliderBackgrounds(weights) {
  const colors = {
    eq: '#e5b95a',
    fi: '#10b981',
    com: '#f59e0b',
    alt: '#38bdf8'
  };
  ['eq', 'fi', 'com', 'alt'].forEach(k => {
    const slider = document.getElementById(`slider-${k}`);
    if (slider) {
      const val = weights[k] || 0;
      const c = colors[k];
      slider.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${val}%, rgba(255,255,255,0.08) ${val}%, rgba(255,255,255,0.08) 100%)`;
    }
  });
}

function updateQuantMetricsUI(eq, fi, com, alt) {
  const wEq = eq / 100;
  const wFi = fi / 100;
  const wCom = com / 100;
  const wAlt = alt / 100;

  // Indonesian asset returns: IHSG 11.5%, SBN 6.8%, Commodities 10.2%, Crypto 34.0%
  const ret = wEq * 11.5 + wFi * 6.8 + wCom * 10.2 + wAlt * 34.0;

  // Covariance / Volatility
  const sEq = 17.5, sFi = 4.5, sCom = 13.0, sAlt = 56.0;
  const rEqFi = -0.15, rEqCom = 0.22, rEqAlt = 0.28;
  const rFiCom = -0.10, rFiAlt = -0.05, rComAlt = 0.15;

  const variance = Math.pow(wEq * sEq, 2) +
                   Math.pow(wFi * sFi, 2) +
                   Math.pow(wCom * sCom, 2) +
                   Math.pow(wAlt * sAlt, 2) +
                   2 * wEq * wFi * sEq * sFi * rEqFi +
                   2 * wEq * wCom * sEq * sCom * rEqCom +
                   2 * wEq * wAlt * sEq * sAlt * rEqAlt +
                   2 * wFi * wCom * sFi * sCom * rFiCom +
                   2 * wFi * wAlt * sFi * sAlt * rFiAlt +
                   2 * wCom * wAlt * sCom * sAlt * rComAlt;

  const vol = Math.sqrt(Math.max(variance, 0.1));
  const activeWeights = [wEq, wFi, wCom, wAlt].filter(w => w > 0.001);
  const entropy = activeWeights.reduce((acc, w) => acc - w * Math.log(w), 0) / Math.log(4);

  let sharpe, mdd;
  const beta = (wEq * 1.05 + wFi * (-0.12) + wCom * 0.22 + wAlt * 0.35).toFixed(2);

  const banner = document.getElementById('sim-frontier-banner');
  const icon = document.getElementById('frontier-icon');
  const title = document.getElementById('frontier-title');
  const pill = document.getElementById('frontier-pill');
  const desc = document.getElementById('frontier-desc');
  const donutSub = document.getElementById('donut-scen-tag');

  // 1. High Equity Risk Warning (as requested: Sharpe: 0.82, Max Drawdown: -32%)
  if (wEq >= 0.55) {
    const penalty = Math.min(1.0, (wEq - 0.55) / 0.30);
    sharpe = (1.05 - penalty * 0.35).toFixed(2);
    mdd = -(26.0 + penalty * 9.0).toFixed(1) + '%';

    if (banner) banner.className = 'sim-frontier-banner warning';
    if (icon) icon.textContent = '⚠️';
    if (title) title.textContent = (currentLang === 'id')
      ? 'Peringatan Risiko: Konsentrasi Saham Terlalu Tinggi'
      : 'High Risk Warning: Excessive Equity Concentration';
    if (pill) pill.textContent = (currentLang === 'id') ? 'RISIKO TINGGI' : 'HIGH RISK';
    if (desc) desc.textContent = (currentLang === 'id')
      ? `Saat bobot saham ditarik terlalu tinggi: Rasio Sharpe anjlok ke ${sharpe}, estimasi Max Drawdown tembus ${mdd} (Risiko Terlalu Tinggi). Ketiadaan diversifikasi multi-aset membuat modal rentan hancur saat krisis IHSG melanda!`
      : `When equity weighting spikes: Sharpe collapses to ${sharpe}, estimated Max Drawdown reaches ${mdd} (Excessive Risk). Lack of multi-asset hedging leaves portfolio exposed to severe market crashes!`;
    if (donutSub) donutSub.textContent = 'HIGH RISK';
  }
  // 2. High Crypto Volatility Alert
  else if (wAlt >= 0.40) {
    const altP = Math.min(1.0, (wAlt - 0.40) / 0.45);
    sharpe = (2.20 - altP * 0.70).toFixed(2);
    mdd = -(28.0 + altP * 20.0).toFixed(1) + '%';

    if (banner) banner.className = 'sim-frontier-banner caution';
    if (icon) icon.textContent = '⚡';
    if (title) title.textContent = (currentLang === 'id')
      ? 'Peringatan Volatilitas: Paparan Aset Digital Ekstrem'
      : 'Volatility Alert: Extreme Digital Asset Exposure';
    if (pill) pill.textContent = (currentLang === 'id') ? 'VOLATILITAS EKSTREM' : 'EXTREME VOL';
    if (desc) desc.textContent = (currentLang === 'id')
      ? `Alokasi aset digital dominan memicu potensi keuntungan asimetris, namun estimasi Max Drawdown melonjak hingga ${mdd}. Disarankan membatasi alokasi kripto maksimal 25%.`
      : `Dominant crypto allocation amplifies asymmetric returns, but estimated Max Drawdown spikes to ${mdd}. Limiting digital exposure under 25% is recommended.`;
    if (donutSub) donutSub.textContent = 'HIGH VOL';
  }
  // 3. 4D Optimal Sharpe Frontier (as requested: Sharpe: 2.45+, Max Drawdown < 6.8%)
  else if (wEq >= 0.18 && wEq <= 0.45 && wFi >= 0.18 && wFi <= 0.45 && wCom >= 0.12 && wAlt >= 0.05) {
    sharpe = (2.45 + (entropy - 0.72) * 1.5).toFixed(2);
    mdd = -(3.8 + (1 - entropy) * 4.2).toFixed(1) + '%';

    if (banner) banner.className = 'sim-frontier-banner optimal';
    if (icon) icon.textContent = '🏆';
    if (title) title.textContent = (currentLang === 'id')
      ? 'Telah Mencapai 4D Optimal Sharpe Frontier'
      : '4D Optimal Sharpe Frontier Achieved';
    if (pill) pill.textContent = (currentLang === 'id') ? 'OPTIMAL 4D' : 'OPTIMAL 4D';
    if (desc) desc.textContent = (currentLang === 'id')
      ? `Telah mencapai 4D Optimal Sharpe Frontier (Sharpe ${sharpe}, Max Drawdown < 6.8%)! Diversifikasi 4-Dimensi berhasil mengeliminasi 74% risiko krisis sistemik tanpa mengorbankan imbal hasil.`
      : `4D Optimal Sharpe Frontier Achieved (Sharpe ${sharpe}, Max Drawdown < 6.8%)! 4-Dimensional diversification neutralizes 74% of systemic downside while preserving alpha compounding.`;
    if (donutSub) donutSub.textContent = 'OPTIMAL 4D';
  }
  // 4. Defensive Sovereign Bond Focus
  else if (wFi >= 0.50) {
    sharpe = (2.60 + wFi * 0.3).toFixed(2);
    mdd = -(3.0 + (1 - wFi) * 5.0).toFixed(1) + '%';

    if (banner) banner.className = 'sim-frontier-banner defensive';
    if (icon) icon.textContent = '🛡️';
    if (title) title.textContent = (currentLang === 'id')
      ? 'Mode Pertahanan Modal: Bantalan Obligasi Maksimal'
      : 'Capital Preservation Mode: Maximum Sovereign Duration';
    if (pill) pill.textContent = (currentLang === 'id') ? 'DEFENSIF' : 'DEFENSIVE';
    if (desc) desc.textContent = (currentLang === 'id')
      ? `Fokus perlindungan modal absolut: SBN obligasi meminimalkan volatilitas sistemik (Max Drawdown hanya ${mdd}). Sangat kokoh menghadapi resesi dan pengetatan likuiditas global.`
      : `Absolute capital protection focus: Sovereign bonds minimize systemic volatility (Max Drawdown only ${mdd}). Ideal during recessionary liquidity crunches.`;
    if (donutSub) donutSub.textContent = 'DEFENSIVE';
  }
  // 5. General Balanced
  else {
    sharpe = ((ret - 6.0) / vol + entropy * 0.7).toFixed(2);
    const rawMdd = (wEq * 38.0 + wFi * 4.5 + wCom * 12.0 + wAlt * 65.0);
    mdd = -(rawMdd * (1.0 - entropy * 0.52)).toFixed(1) + '%';

    if (banner) banner.className = 'sim-frontier-banner optimal';
    if (icon) icon.textContent = '⚖️';
    if (title) title.textContent = (currentLang === 'id')
      ? 'Alokasi Dinamis Seimbang Terkonfigurasi'
      : 'Balanced Dynamic Allocation Configured';
    if (pill) pill.textContent = (currentLang === 'id') ? 'SEIMBANG' : 'BALANCED';
    if (desc) desc.textContent = (currentLang === 'id')
      ? `Bobot 4-Dimensi aktif menyesuaikan eksposur risiko. Rasio Sharpe ${sharpe} dengan proyeksi imbal hasil tahunan ${(ret).toFixed(1)}%.`
      : `4-Dimensional weights actively calibrated. Sharpe ratio of ${sharpe} with projected annualized return of ${(ret).toFixed(1)}%.`;
    if (donutSub) donutSub.textContent = 'CUSTOM';
  }

  // Update Telemetry Pills
  const tSharpe = document.getElementById('val-sim-sharpe');
  const tDrawdown = document.getElementById('val-sim-drawdown');
  const tBeta = document.getElementById('val-sim-beta');
  if (tSharpe) {
    tSharpe.textContent = sharpe;
    tSharpe.className = 'tp-val ' + (parseFloat(sharpe) >= 2.45 ? 'gold' : (parseFloat(sharpe) < 1.2 ? 'red' : 'emerald'));
  }
  if (tDrawdown) {
    tDrawdown.textContent = mdd;
    tDrawdown.className = 'tp-val ' + (parseFloat(mdd) < -25 ? 'red' : 'emerald');
  }
  if (tBeta) {
    tBeta.textContent = beta;
  }
}

function handleSliderDrag(activeKey, newVal) {
  newVal = parseInt(newVal, 10);
  if (isNaN(newVal)) newVal = 0;
  newVal = Math.min(Math.max(newVal, 0), 100);

  const otherKeys = ['eq', 'fi', 'com', 'alt'].filter(k => k !== activeKey);
  const remaining = 100 - newVal;
  const currentOtherSum = otherKeys.reduce((acc, k) => acc + currentWeights[k], 0);

  currentWeights[activeKey] = newVal;

  if (currentOtherSum > 0) {
    let distributed = 0;
    for (let i = 0; i < otherKeys.length - 1; i++) {
      const k = otherKeys[i];
      const share = Math.round((currentWeights[k] / currentOtherSum) * remaining);
      currentWeights[k] = share;
      distributed += share;
    }
    const lastKey = otherKeys[otherKeys.length - 1];
    currentWeights[lastKey] = Math.max(0, remaining - distributed);
  } else {
    const each = Math.floor(remaining / otherKeys.length);
    otherKeys.forEach((k, idx) => {
      if (idx === otherKeys.length - 1) {
        currentWeights[k] = remaining - (each * (otherKeys.length - 1));
      } else {
        currentWeights[k] = each;
      }
    });
  }

  // Mark custom scenario button as active
  document.querySelectorAll('.scenario-btn').forEach(b => {
    const isCustom = b.getAttribute('data-scenario') === 'custom';
    b.classList.toggle('active', isCustom);
    b.setAttribute('aria-selected', isCustom ? 'true' : 'false');
  });

  // Sync sliders and badges
  ['eq', 'fi', 'com', 'alt'].forEach(k => {
    const slider = document.getElementById(`slider-${k}`);
    const valBadge = document.getElementById(`val-${k}`);
    if (slider && k !== activeKey) slider.value = currentWeights[k];
    if (valBadge) valBadge.textContent = currentWeights[k] + '%';
  });
  const myValBadge = document.getElementById(`val-${activeKey}`);
  if (myValBadge) myValBadge.textContent = currentWeights[activeKey] + '%';

  // Update Donut Chart & Slider Tracks
  updateDonutChart(currentWeights);
  updateSliderBackgrounds(currentWeights);

  // Recalculate metrics
  updateQuantMetricsUI(currentWeights.eq, currentWeights.fi, currentWeights.com, currentWeights.alt);

  // Update Explanation Box
  const expBox = document.getElementById('sim-explanation-text');
  if (expBox && scenarioData.custom.explanation[currentLang]) {
    expBox.textContent = scenarioData.custom.explanation[currentLang];
  }
}

function applyScenario(scen) {
  const data = scenarioData[scen];
  if (!data) return;

  currentWeights = { ...data.weights };

  // Update active scenario buttons
  document.querySelectorAll('.scenario-btn').forEach(b => {
    const isActive = b.getAttribute('data-scenario') === scen;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update sliders & badges
  ['eq', 'fi', 'com', 'alt'].forEach(k => {
    const slider = document.getElementById(`slider-${k}`);
    const valBadge = document.getElementById(`val-${k}`);
    if (slider) slider.value = currentWeights[k];
    if (valBadge) valBadge.textContent = currentWeights[k] + '%';
  });

  // Update Donut Chart & Track Gradients
  updateDonutChart(currentWeights);
  updateSliderBackgrounds(currentWeights);

  // Update Donut Center Subtitle Tag
  const donutSub = document.getElementById('donut-scen-tag');
  if (donutSub) donutSub.textContent = data.tag;

  // Update Telemetry & Banner
  updateQuantMetricsUI(currentWeights.eq, currentWeights.fi, currentWeights.com, currentWeights.alt);

  // Update Explanation Text
  const expBox = document.getElementById('sim-explanation-text');
  if (expBox && data.explanation[currentLang]) {
    expBox.textContent = data.explanation[currentLang];
  }
}

function initSimulatorSliders() {
  ['eq', 'fi', 'com', 'alt'].forEach(key => {
    const slider = document.getElementById(`slider-${key}`);
    if (slider) {
      slider.addEventListener('input', (e) => {
        handleSliderDrag(key, e.target.value);
      });
    }
  });

  const customBtn = document.getElementById('btn-scen-custom');
  if (customBtn) {
    customBtn.addEventListener('click', () => {
      applyScenario('custom');
    });
  }
}

// ========================================================
// 4. PROCEDURAL CANVAS FILM NOISE (Preloader Core)
// ========================================================
function initCanvasNoise() {
  const canvas = document.querySelector('.noise-mask');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const imgData = ctx.createImageData(canvas.width, canvas.height);
  let seed = 2135587861;
  const lcg = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  for (let i = 0; i < imgData.data.length; i += 4) {
    const val = Math.floor(lcg() * 255);
    imgData.data[i] = val;
    imgData.data[i + 1] = val;
    imgData.data[i + 2] = val;
    imgData.data[i + 3] = 110 + Math.floor(lcg() * 110);
  }
  ctx.putImageData(imgData, 0, 0);
}

// ========================================================
// 5. REACTDROPS-STYLE ENTRANCE ANIMATION (GSAP)
// ========================================================
let entranceTimeline = null;

function bypassEntranceImmediately() {
  const surface = document.querySelector('.page-reveal-surface');
  const legacy = document.querySelector('.legacy-view');
  const scrim = document.querySelector('.page-reveal-scrim');
  const stage = document.getElementById('loading-stage');

  if (entranceTimeline) {
    entranceTimeline.kill();
  }

  if (surface) {
    surface.classList.add('hero-revealed');
    surface.style.clipPath = 'none';
    surface.style.transform = 'none';
    surface.style.overflowY = 'auto';
    surface.style.pointerEvents = 'auto';
  }
  if (legacy) legacy.style.display = 'none';
  if (scrim) scrim.style.display = 'none';
  if (stage) stage.style.height = 'auto';
}

function runEntranceAnimation() {
  // If reduced motion is requested, reveal immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    bypassEntranceImmediately();
    return;
  }

  // If GSAP is missing, bypass gracefully
  if (typeof gsap === 'undefined') {
    bypassEntranceImmediately();
    return;
  }

  const legacyView = document.querySelector('.legacy-view');
  const scrim = document.querySelector('.page-reveal-scrim');
  const surface = document.querySelector('.page-reveal-surface');
  const wordmark = document.querySelector('.brand-wordmark');
  const wordmarkWrap = document.querySelector('.brand-wordmark-container');
  const emblem = document.querySelector('.brand-emblem');
  const quadTiles = document.querySelectorAll('.quad-tile');
  const navbar = document.querySelector('.site-navbar-wrapper');
  const heroElements = document.querySelectorAll('.hero-badge-pill, .hero-title, .hero-quote-box, .hero-description, .hero-cta-group, .live-market-ticker, .metrics-strip');

  if (!surface || !legacyView) return;

  if (entranceTimeline) {
    entranceTimeline.kill();
  }

  legacyView.style.display = 'flex';
  if (scrim) scrim.style.display = 'block';
  surface.classList.remove('hero-revealed');

  gsap.set(legacyView, { yPercent: 0, opacity: 1 });
  gsap.set(scrim, { opacity: 0 });
  gsap.set(surface, {
    yPercent: 100,
    scale: 0.965,
    clipPath: 'inset(9% round 24px)',
    visibility: 'visible',
    overflowY: 'hidden',
    pointerEvents: 'none'
  });

  gsap.set('.line-horizontal', { scaleX: 0 });
  gsap.set('.line-vertical', { scaleY: 0 });
  gsap.set('.shared-gradient-composition', { scale: 0.05, opacity: 0 });
  gsap.set(quadTiles, { opacity: 0, scale: 0.6 });
  gsap.set(wordmarkWrap, { opacity: 0, x: 0 });
  gsap.set(emblem, { rotation: 0, scale: 1 });

  if (wordmark) wordmark.textContent = "GARUDA";

  entranceTimeline = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      surface.classList.add('hero-revealed');
      legacyView.style.display = 'none';
      if (scrim) scrim.style.display = 'none';
      surface.style.overflowY = 'auto';
      surface.style.pointerEvents = 'auto';
    }
  });

  // Phase 1: Seed core expansion & Construction lines
  entranceTimeline
    .to('.shared-gradient-composition', {
      scale: 1,
      opacity: 1,
      duration: 0.65,
      ease: "back.out(1.4)"
    }, 0.1)
    .to('.line-top, .line-bottom, .guide-inner-top, .guide-inner-bottom', {
      scaleX: 1,
      duration: 0.55,
      stagger: 0.08
    }, 0.25)
    .to('.line-left, .line-right, .guide-inner-left, .guide-inner-right', {
      scaleY: 1,
      duration: 0.55,
      stagger: 0.08
    }, 0.3)

    // Phase 2: Dimension quad tiles reveal
    .to(quadTiles, {
      opacity: 1,
      scale: 1,
      stagger: 0.06,
      duration: 0.45,
      ease: "power2.out"
    }, 0.55)

    // Phase 3: Rotate Emblem (complete 360 rotation settling upright) + Wordmark typing
    .to(emblem, {
      rotation: 360,
      scale: 1,
      duration: 0.8,
      ease: "power2.inOut"
    }, 0.9)
    .to(wordmarkWrap, {
      opacity: 1,
      duration: 0.35
    }, 1.0)
    .call(() => { if (wordmark) wordmark.textContent = "GARUDA"; }, null, 1.0)
    .call(() => { if (wordmark) wordmark.textContent = "GARUDA QUANTUM"; }, null, 1.25)
    .call(() => { if (wordmark) wordmark.textContent = "GARUDA QUANTUM 4D"; }, null, 1.5)

    // Fade construction lines
    .to('.construction-line', {
      opacity: 0,
      duration: 0.35
    }, 1.8)

    // Phase 4: MASTER PAGE REVEAL
    .to(legacyView, {
      yPercent: -24,
      duration: 1.1,
      ease: "power3.inOut"
    }, 2.1)
    .to(scrim, {
      opacity: 1,
      duration: 0.5
    }, 2.0)
    .to(surface, {
      yPercent: 0,
      scale: 1.0,
      clipPath: 'inset(0% round 0px)',
      duration: 1.1,
      ease: "power4.out"
    }, 2.05)

    // Cascade Navbar and Hero content
    .fromTo(navbar, 
      { y: -30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      2.7
    )
    .fromTo(heroElements, 
      { y: 22, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.07, duration: 0.65, ease: "power3.out" }, 
      2.8
    );
}

// ========================================================
// 6. LIVE MARKET TICKER SIMULATION
// ========================================================
function initMarketTicker() {
  const tickIHSG = document.getElementById('val-tick-ihsg');
  const tickIHSGClone = document.getElementById('val-tick-ihsg-clone');
  const tickBBCA = document.getElementById('val-tick-bbca');
  const tickBBCAClone = document.getElementById('val-tick-bbca-clone');
  const tickBBRI = document.getElementById('val-tick-bbri');
  const tickBBRIClone = document.getElementById('val-tick-bbri-clone');
  const tickBMRI = document.getElementById('val-tick-bmri');
  const tickBMRIClone = document.getElementById('val-tick-bmri-clone');
  const tickADRO = document.getElementById('val-tick-adro');
  const tickADROClone = document.getElementById('val-tick-adro-clone');
  const tickGold = document.getElementById('val-tick-gold');
  const tickGoldClone = document.getElementById('val-tick-gold-clone');
  const tickBTC = document.getElementById('val-tick-btc');
  const tickBTCClone = document.getElementById('val-tick-btc-clone');

  let baseIHSG = 7324.50;
  let baseBBCA = 10275;
  let baseBBRI = 4880;
  let baseBMRI = 6725;
  let baseADRO = 3680;
  let baseGold = 2748.20;
  let baseBTC = 72480;

  setInterval(() => {
    // Small random fluctuations simulating live quant streaming
    const deltaIHSG = (Math.random() - 0.48) * 1.8;
    baseIHSG = Math.max(7300, baseIHSG + deltaIHSG);
    const ihsgStr = baseIHSG.toFixed(2);
    if (tickIHSG) tickIHSG.textContent = ihsgStr;
    if (tickIHSGClone) tickIHSGClone.textContent = ihsgStr;

    // BBCA (Bank Central Asia)
    if (Math.random() > 0.35) {
      const step = (Math.random() > 0.47 ? 25 : -25);
      baseBBCA = Math.max(10150, Math.min(10400, baseBBCA + step));
      const bbcaStr = 'Rp ' + baseBBCA.toLocaleString();
      if (tickBBCA) tickBBCA.textContent = bbcaStr;
      if (tickBBCAClone) tickBBCAClone.textContent = bbcaStr;
    }

    // BBRI (Bank Rakyat Indonesia)
    if (Math.random() > 0.35) {
      const step = (Math.random() > 0.47 ? 10 : -10);
      baseBBRI = Math.max(4800, Math.min(4980, baseBBRI + step));
      const bbriStr = 'Rp ' + baseBBRI.toLocaleString();
      if (tickBBRI) tickBBRI.textContent = bbriStr;
      if (tickBBRIClone) tickBBRIClone.textContent = bbriStr;
    }

    // BMRI (Bank Mandiri)
    if (Math.random() > 0.35) {
      const step = (Math.random() > 0.47 ? 25 : -25);
      baseBMRI = Math.max(6650, Math.min(6850, baseBMRI + step));
      const bmriStr = 'Rp ' + baseBMRI.toLocaleString();
      if (tickBMRI) tickBMRI.textContent = bmriStr;
      if (tickBMRIClone) tickBMRIClone.textContent = bmriStr;
    }

    // ADRO (Adaro Energy)
    if (Math.random() > 0.4) {
      const step = (Math.random() > 0.47 ? 10 : -10);
      baseADRO = Math.max(3600, Math.min(3780, baseADRO + step));
      const adroStr = 'Rp ' + baseADRO.toLocaleString();
      if (tickADRO) tickADRO.textContent = adroStr;
      if (tickADROClone) tickADROClone.textContent = adroStr;
    }

    // Gold
    const deltaGold = (Math.random() - 0.47) * 0.45;
    baseGold = Math.max(2700, baseGold + deltaGold);
    const goldStr = '$' + baseGold.toFixed(2);
    if (tickGold) tickGold.textContent = goldStr;
    if (tickGoldClone) tickGoldClone.textContent = goldStr;

    // BTC
    const deltaBTC = Math.floor((Math.random() - 0.46) * 35);
    baseBTC = Math.max(70000, baseBTC + deltaBTC);
    const btcStr = '$' + baseBTC.toLocaleString();
    if (tickBTC) tickBTC.textContent = btcStr;
    if (tickBTCClone) tickBTCClone.textContent = btcStr;
  }, 2800);
}

// ========================================================
// 7. 3D CARD TILT & AMBIENT SPOTLIGHT
// ========================================================
function init3DTiltAndSpotlight() {
  const spotlight = document.getElementById('ambient-spotlight');

  // Ambient mouse spotlight
  window.addEventListener('mousemove', (e) => {
    if (spotlight) {
      spotlight.style.left = e.clientX + 'px';
      spotlight.style.top = e.clientY + 'px';
    }
  });

  // 3D card tilt
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// ========================================================
// 8. SCROLL PROGRESS BAR & BACK TO TOP BUTTON
// ========================================================
function initScrollProgressAndBackToTop() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('btn-back-to-top');
  const surface = document.querySelector('.page-reveal-surface');

  const onScroll = () => {
    const target = surface && surface.classList.contains('hero-revealed') ? surface : window;
    const scrollTop = surface && surface.classList.contains('hero-revealed') ? surface.scrollTop : window.scrollY;
    const scrollHeight = surface && surface.classList.contains('hero-revealed') ? surface.scrollHeight - surface.clientHeight : document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight > 0 && progressBar) {
      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
    }

    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollTop > 320);
    }
  };

  if (surface) {
    surface.addEventListener('scroll', onScroll, { passive: true });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      if (surface && surface.classList.contains('hero-revealed')) {
        surface.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ========================================================
// 9. BLACK SWAN LOGIC ACCORDION DRAWERS
// ========================================================
function initBlackSwanAccordions() {
  document.querySelectorAll('.track-logic-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      const content = btn.nextElementSibling;
      if (content) {
        content.hidden = isExpanded;
      }
    });
  });
}

// ========================================================
// 10. VIP APPLICATION MODAL, CLIPBOARD & TOAST
// ========================================================
function showToast(msg, icon = '✓') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<span>${icon}</span> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 3200);
}

function initModalAndClipboard() {
  const modal = document.getElementById('vip-modal');
  const closeBtn = document.getElementById('btn-close-modal');
  const copyBtn = document.getElementById('btn-copy-code');
  const codeEl = document.getElementById('display-invite-code');

  const openModal = () => {
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  document.querySelectorAll('.open-vip-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (copyBtn && codeEl) {
    copyBtn.addEventListener('click', () => {
      const code = codeEl.textContent.trim();
      navigator.clipboard.writeText(code).then(() => {
        const copyTextSpan = document.getElementById('copy-btn-text');
        if (copyTextSpan) copyTextSpan.textContent = currentLang === 'id' ? "Tersalin!" : "Copied!";
        showToast(currentLang === 'id' ? `Kode ${code} disalin ke clipboard!` : `Code ${code} copied to clipboard!`);
        setTimeout(() => {
          if (copyTextSpan) copyTextSpan.textContent = currentLang === 'id' ? "Salin Kode" : "Copy Code";
        }, 2200);
      }).catch(() => {
        showToast(code);
      });
    });
  }

  // Telegram Closed Beta Channel Handler
  const tgBtn = document.getElementById('btn-tg-channel');
  if (tgBtn) {
    tgBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const infoMsg = (currentLang === 'id')
        ? 'Saluran Telegram Riset saat ini dalam fase uji tertutup v3.0. Silakan hubungi Meja Registrasi WhatsApp untuk reservasi kuota prioritas.'
        : 'Research Telegram Channel is currently in closed beta v3.0. Please contact WhatsApp VIP Desk for priority access reservation.';
      showToast(infoMsg, 'ℹ️');

      // Pulse WhatsApp button to guide user
      const waBtn = document.getElementById('btn-wa-direct');
      if (waBtn) {
        waBtn.classList.remove('pulse-guide');
        void waBtn.offsetWidth;
        waBtn.classList.add('pulse-guide');
      }
    });
  }
}

// ========================================================
// 11. MOBILE DRAWER NAVIGATION
// ========================================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById('btn-mobile-toggle');
  const closeBtn = document.getElementById('btn-mobile-close');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');

  const openDrawer = () => {
    if (drawer) {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    }
  };

  const closeDrawer = () => {
    if (drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    }
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// ========================================================
// 12. INITIALIZATION ON DOM READY
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Procedural noise
  initCanvasNoise();

  // 2. Language switchers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // 3. Scenario buttons
  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const scen = btn.getAttribute('data-scenario');
      applyScenario(scen);
    });
  });

  // 4. Skip Intro Button
  const skipBtn = document.getElementById('btn-skip-intro');
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      bypassEntranceImmediately();
    });
  }

  // 5. Replay Intro Animation Button
  const replayBtn = document.getElementById('btn-replay-intro');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      const surface = document.querySelector('.page-reveal-surface');
      if (surface) surface.scrollTo({ top: 0, behavior: 'instant' });
      runEntranceAnimation();
    });
  }

  // 6. Smooth Scroll Within Reveal Surface
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.startsWith('#vip-modal')) return;
      const targetEl = document.querySelector(targetId);
      const surface = document.querySelector('.page-reveal-surface');
      if (targetEl && surface) {
        e.preventDefault();
        const navHeight = document.querySelector('.site-navbar')?.offsetHeight || 70;
        const targetTop = targetEl.offsetTop - navHeight - 20;
        surface.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
      }
    });
  });

  // 7. Initialize Sub-modules
  initMarketTicker();
  initSimulatorSliders();
  init3DTiltAndSpotlight();
  initScrollProgressAndBackToTop();
  initBlackSwanAccordions();
  initModalAndClipboard();
  initMobileDrawer();

  // 8. Set initial language & simulator state
  setLanguage('id');
  applyScenario('normal');

  // 9. Run master entrance animation
  runEntranceAnimation();
});
