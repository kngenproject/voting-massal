# 🗳️ VoteKu — Sistem Voting Online

Aplikasi voting realtime berbasis Firebase Firestore. Single-file HTML, siap deploy ke GitHub Pages, Netlify, atau hosting statis manapun.

---

## ✨ Fitur

- **Realtime** — hasil voting update otomatis tanpa perlu refresh
- **Anti double-vote** — proteksi via Device ID (localStorage) + IP address
- **Multi-sesi** — buat banyak sesi voting sekaligus
- **Panel Admin** — dilindungi password, kelola sesi & kandidat
- **Persentase & bar progress** — visualisasi hasil voting
- **Responsif** — tampil baik di desktop & mobile

---

## 🚀 Cara Setup

### 1. Clone / Download repo ini

```bash
git clone https://github.com/USERNAME/REPO_NAME.git
cd REPO_NAME
```

### 2. Buat project Firebase

1. Buka [console.firebase.google.com](https://console.firebase.google.com)
2. Klik **Add project** → ikuti langkah-langkahnya
3. Di halaman project, pilih **`</>`** (Web app) → daftarkan app
4. Salin **firebaseConfig** yang muncul

### 3. Aktifkan Firestore

1. Di Firebase Console → **Build → Firestore Database**
2. Klik **Create database** → pilih mode **Production** atau **Test**
3. Pilih region → selesai

> **Catatan (Mode Production):** Tambahkan Firestore Security Rules berikut agar app bisa menulis:
> ```
> rules_version = '2';
> service cloud.firestore {
>   match /databases/{database}/documents {
>     match /{document=**} {
>       allow read, write: if true;
>     }
>   }
> }
> ```
> ⚠️ Rules ini terbuka untuk semua. Perketat sesuai kebutuhan produksi Anda.

### 4. Isi Firebase Config di `index.html`

Buka `index.html`, cari bagian ini (sekitar baris 170):

```js
const firebaseConfig = {
  apiKey:            "GANTI_DENGAN_API_KEY_ANDA",
  authDomain:        "GANTI_DENGAN_PROJECT_ID.firebaseapp.com",
  projectId:         "GANTI_DENGAN_PROJECT_ID",
  storageBucket:     "GANTI_DENGAN_PROJECT_ID.appspot.com",
  messagingSenderId: "GANTI_DENGAN_MESSAGING_SENDER_ID",
  appId:             "GANTI_DENGAN_APP_ID"
};
```

Ganti semua nilai dengan config Firebase Anda.

### 5. Ganti Password Admin

Di baris yang sama, ganti:

```js
const ADMIN_PASSWORD = "admin123";
```

Dengan password yang lebih kuat.

### 6. Deploy ke GitHub Pages

```bash
git add .
git commit -m "init voting app"
git push origin main
```

Lalu di GitHub repo → **Settings → Pages → Source: main branch / root** → Save.

Aplikasi akan live di: `https://USERNAME.github.io/REPO_NAME/`

---

## 📱 Cara Penggunaan

### Admin
1. Buka tab **⚙️ Admin**
2. Masukkan password admin
3. **Buat sesi** → isi nama sesi (contoh: `pemilihan-osis-2025`)
4. **Tambah kandidat** → isi nama sesi + nama kandidat
5. Kelola sesi (buka/tutup) dari panel Kelola Sesi

### Voter
1. Buka tab **🗳️ Voting**
2. Pilih sesi yang aktif
3. Klik **Vote** di samping nama kandidat pilihan
4. Setiap perangkat hanya bisa vote 1x per sesi

---

## 🗂️ Struktur File

```
.
├── index.html   # Seluruh aplikasi (HTML + CSS + JS)
└── README.md    # Dokumentasi ini
```

---

## 🛠️ Teknologi

- HTML5 / CSS3 / JavaScript (ES Modules)
- [Firebase Firestore](https://firebase.google.com/docs/firestore) v10
- Google Fonts (Sora + Lora)
- Deploy: GitHub Pages / Netlify / hosting statis

---

## 📄 Lisensi

MIT — bebas digunakan dan dimodifikasi.
