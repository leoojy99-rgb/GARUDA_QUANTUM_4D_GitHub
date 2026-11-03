# GARUDA QUANTUM 4D | Model Kuantitatif Investor Indonesia

### Millennium Management (`mlp.com`) Institutional Edition

> **Terbang Tinggi, Melindungi Modal Anda**  
> Situs Resmi & Arsitektur Kuantitatif Multi-Aset Milik Investor Indonesia — Dibangun berdasarkan standar desain dan arsitektur institusional hedge fund global **Millennium Management (mlp.com)**, berakar dari metodologi 30 tahun riset di International Monetary Fund (IMF) dan Systematic Quant Pods Millennium Management.

---

## 🏛️ Karakteristik Desain Millennium Management (mlp.com Edition)

Edisi ini secara presisi mengadopsi bahasa desain resmi institusional **Millennium Management** (`mlp.com`):

1. **Palet Warna Sovereign Trust Blue & Deep Navy**: Menggunakan rona *Corporate Trust Blue* khas Millennium (`#0c509d`), *Deep Navy* (`#060f1e`, `#09172e`), dipadukan dengan aksen emas berdaulat Garuda (*Imperial Gold* `#e5b95a`) dan *Emerald Signal* (`#10b981`).
2. **Arsitektur Multi-Strategy Quant Pods**: Mengadopsi struktur legendaris sistem Pod Millennium (Pod 01 Equities, Pod 02 Fixed Income, Pod 03 Commodities, Pod 04 Digital Assets) dengan pembagian kerja independen di bawah tata kelola risiko terpusat.
3. **Bilah Navigasi Institusional Presisi**: Navigasi atas tetap (*fixed header*) dengan garis tipis arsitektural (*hairline border*), logo tipografis formal, telemetri status kuantitatif aktif, pemilih bahasa dwibahasa (ID/EN), dan tombol portal investor VIP.
4. **Hero Berwibawa & Kuotasi Filosofi**: Tata letak judul bergaya Wall Street ("EVOLUTION. INNOVATION. DISCIPLINE."), pita telemetri pasar real-time (IHSG, SBN 10Y Yield, XAU/USD Emas, BTC/USD Kripto), serta kotak filosofi Jayendra Halim.
5. **Bagian "By the Numbers"**: Format statistik metrik 4 kolom bersih yang menjadi ciri khas laporan tahunan dan portal institusi keuangan global.
6. **Simulator Korelasi Dinamis 4D**: Pengujian skenario makro interaktif dengan grafik Donut SVG dan pembacaan rasio Sharpe, Max Drawdown, dan Beta pasar.
7. **Jejak Global & Tata Kelola**: Footer institusional lengkap dengan titik pusat keuangan dunia (New York, London, Singapore, Hong Kong, Tokyo, Jakarta, Bandung) dan pemberitahuan kepatuhan risiko.

---

## 📁 Struktur Berkas Repositori (Repository Structure)

```
├── .git/                  # Repositori Git lokal (cabang default: main)
├── .nojekyll              # Memastikan GitHub Pages memproses seluruh file tanpa filter Jekyll
├── CNAME                  # Konfigurasi domain kustom Anda (misal: garudaquantum.com)
├── README.md              # Dokumentasi lengkap & panduan rilis GitHub Pages
├── favicon.ico            # Favicon multi-resolusi untuk peramban desktop
├── favicon.svg            # Favicon vektor lambang Garuda emas resolusi tinggi
├── manifest.json          # Web App Manifest untuk dukungan PWA & mobile bookmark
├── robots.txt             # Panduan perayapan mesin pencari (SEO)
├── sitemap.xml            # Peta situs XML untuk indeks pencarian Google/Bing
├── index.html             # Berkas HTML utama edisi Millennium Management
├── style.css              # Sistem desain lengkap bertema Millennium Navy & Gold
├── app.js                 # Mesin logika dwibahasa, simulator 4D, ticker pasar, dan modal
├── gsap.min.js            # Pustaka animasi GSAP lokal berkecepatan tinggi
└── assets/                # Folder aset gambar & logo resolusi tinggi
    ├── apple-touch-icon.png
    ├── ayana_1.png
    ├── garuda_logo_hires.png
    └── jay_1.png
```

---

## 🚀 Panduan Rilis ke GitHub & Menghubungkan Domain Kustom

### 1. Unggah ke Repositori GitHub Anda

Buka terminal di folder ini (`c:\Users\Administrator\Desktop\新建文件夹 (6)`):

```bash
# Hubungkan ke repositori GitHub baru milik Anda
git remote add origin https://github.com/<username-anda>/<nama-repo-anda>.git

# Unggah ke cabang main
git push -u origin main
```

*(Jika Anda memperbarui repositori yang sudah ada, cukup jalankan `git add .`, `git commit -m "update: mlp.com style"`, lalu `git push origin main`)*

---

### 2. Mengaktifkan GitHub Pages

1. Buka repositori Anda di GitHub.
2. Klik tab **Settings** (Pengaturan) di bagian atas.
3. Di panel sebelah kiri, pilih **Pages**.
4. Di bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` dan direktori `/ (root)`.
   - Klik **Save**.
5. Situs Anda akan live di: `https://<username-anda>.github.io/<nama-repo-anda>/`.

---

### 3. Mengatur Nama Domain Kustom

1. Edit berkas `CNAME` di root folder repositori ini, masukkan nama domain Anda:
   ```text
   garudaquantum.com
   ```
2. Di panel DNS penyedia domain Anda (Cloudflare, GoDaddy, Namecheap, Niagahoster, dll.), tambahkan:
   - **A Records** (untuk apex domain):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record** (untuk subdomain `www`):
     - Host: `www` | Target: `<username-anda>.github.io`
3. Kembali ke pengaturan GitHub Pages dan centang **Enforce HTTPS**.

---

© 2026 GARUDA QUANTUM 4D Research Institute. Hak Cipta Dilindungi Undang-Undang.  
*Terbang Tinggi, Melindungi Modal Anda.*
