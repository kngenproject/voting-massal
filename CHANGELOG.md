# Changelog

Semua perubahan penting dicatat di sini.

Format mengacu pada [Keep a Changelog](https://keepachangelog.com/id/1.0.0/).

---

## [1.0.0] — 2025

### ✨ Ditambahkan
- Buat polling baru langsung dengan pilihan sekaligus
- Vote realtime berbasis Firebase Firestore
- Pembatasan 1 device = 1 vote per polling (localStorage)
- Kepemilikan sesi — hanya pembuat yang bisa tutup/hapus
- Sembunyikan hasil vote untuk non-pembuat
- Fitur pencarian polling realtime
- Tombol bagikan polling via Web Share API + deep link
- Layout bottom-nav ala mobile app (tanpa scroll halaman)
- PWA — bisa diinstall di HP sebagai app native
- Ikon PWA PNG bersih (tidak ada logo Chrome)
- Toast notifikasi untuk semua aksi
- Modal konfirmasi custom (pengganti `window.confirm` yang diblokir di mobile)
- Statistik ringkasan (jumlah polling, aktif, total suara)
- Tab Kelola — tampilkan polling milik sendiri vs orang lain

### 🔧 Teknis
- Single-file HTML (tidak ada dependency eksternal selain Firebase + Google Fonts)
- Service Worker inline untuk PWA offline shell
- Manifest PWA sebagai `data:` URI langsung di `<head>`
- Listener Firestore dengan cleanup `unsubscribe` untuk mencegah memory leak
- Per-session vote tracking untuk hitung total suara yang akurat
