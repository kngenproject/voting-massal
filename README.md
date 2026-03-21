# VoteKu — Polling Online Realtime

![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=flat-square&logo=pwa)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![HTML](https://img.shields.io/badge/HTML-Single%20File-E34F26?style=flat-square&logo=html5&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![No Login](https://img.shields.io/badge/Auth-No%20Login%20Required-blue?style=flat-square)
![Realtime](https://img.shields.io/badge/Realtime-Firestore-orange?style=flat-square)

> Aplikasi polling / voting online berbasis web yang ringan, realtime, dan bisa diinstall sebagai PWA — semua dalam **satu file HTML**.

---

## ✨ Fitur

| Fitur | Keterangan |
|-------|-----------|
| 🗳️ Polling Realtime | Hasil vote langsung update tanpa refresh |
| 📱 PWA | Bisa diinstall di HP seperti app native |
| 🔗 Bagikan Link | Share langsung ke WhatsApp / Telegram via Web Share API |
| 🔍 Cari Polling | Filter polling secara realtime |
| 🔒 Satu Device, Satu Vote | Dibatasi per perangkat (localStorage) |
| 👤 Tanpa Login | Tidak perlu akun — siapa pun bisa buat polling |
| 🏠 Kepemilikan Sesi | Hanya pembuat yang bisa tutup / hapus polling |
| 🙈 Sembunyikan Hasil | Hasil vote tersembunyi bagi yang belum membuat sesi |
| ♻️ Tanpa Scroll Halaman | Layout bottom-nav ala mobile app |

---

## 🚀 Demo & Deploy

### Cara tercepat: GitHub Pages

1. Fork repo ini
2. Masuk ke **Settings → Pages**
3. Pilih branch `main`, folder `/ (root)`
4. Klik **Save** — app langsung live di `https://username.github.io/voteku`

> Tidak perlu server, tidak perlu build step.

---

## 🔥 Setup Firebase

### 1. Buat Firebase Project

1. Buka [console.firebase.google.com](https://console.firebase.google.com)
2. Klik **Add project** → beri nama → Create
3. Masuk ke **Firestore Database** → Create database → Start in **test mode**

### 2. Ambil Config

1. Project Settings → Your apps → **Web app** → Register
2. Salin `firebaseConfig` dan paste ke `index.html`:

```js
const firebaseConfig = {
  apiKey:            "...",
  authDomain:        "....firebaseapp.com",
  projectId:         "...",
  storageBucket:     "....appspot.com",
  messagingSenderId: "...",
  appId:             "..."
};
```

### 3. Pasang Firestore Rules

Buka **Firestore → Rules**, paste isi file [`firestore.rules`](./firestore.rules), lalu klik **Publish**.

---

## 📁 Struktur File

```
voteku/
├── index.html          # Seluruh aplikasi (HTML + CSS + JS)
├── firestore.rules     # Security rules Firestore
├── .gitignore          # File yang diabaikan Git
├── LICENSE             # MIT License
└── README.md           # Dokumentasi ini
```

---

## 📱 Install sebagai PWA

| Platform | Cara Install |
|----------|-------------|
| Android (Chrome) | Buka app → titik tiga ⋮ → *Tambahkan ke layar utama* |
| iOS (Safari) | Buka app → ikon Share → *Tambahkan ke Layar Utama* |

Setelah install, app terbuka **fullscreen tanpa address bar**.

---

## 🔒 Security Rules

File `firestore.rules` sudah disertakan. Rules ini:
- Mengizinkan semua orang **membaca** sesi dan kandidat
- Mengizinkan semua orang **membuat** sesi baru
- Mengizinkan **update** untuk proses voting
- Mengizinkan **delete** — kepemilikan dicek di sisi client (deviceId)

> Untuk production, pertimbangkan menggunakan Firebase Authentication untuk validasi kepemilikan di sisi server.

---

## 🎯 Cara Pakai

### Buat Polling
1. Buka tab **➕ Buat**
2. Isi **Judul Polling** (gunakan tanda hubung, contoh: `pilihan-menu-rapat`)
3. Tambahkan minimal 2 pilihan/opsi
4. Klik **🚀 Buat Polling**

### Bagikan ke Peserta
1. Tab **🗳️ Polling** → tombol **🔗 Bagikan** di card polling
2. Pilih aplikasi chat (WhatsApp, Telegram, dll)
3. Penerima klik link → langsung ke polling yang dimaksud

### Kelola Polling
- Tab **⚙️ Kelola** → hanya polling milikmu yang bisa ditutup / dihapus
- Label **✏️ Milik kamu** menandai polling buatanmu

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Frontend | Vanilla HTML/CSS/JS (no framework) |
| Database | Firebase Firestore (realtime) |
| Hosting | GitHub Pages / any static host |
| Font | Google Fonts — Sora + Lora |
| PWA | Web App Manifest + Service Worker |

---

## 🤝 Kontribusi

Pull request welcome! Buka [issue](../../issues) dulu untuk diskusi fitur baru.

1. Fork repo
2. Buat branch: `git checkout -b fitur/nama-fitur`
3. Commit: `git commit -m 'feat: tambah fitur X'`
4. Push: `git push origin fitur/nama-fitur`
5. Buka Pull Request

---

## 📄 License

MIT © 2025 — bebas digunakan dan dimodifikasi.
