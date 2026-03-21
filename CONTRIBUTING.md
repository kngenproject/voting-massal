# Panduan Kontribusi

Terima kasih sudah tertarik berkontribusi ke VoteKu! 🎉

## Cara Berkontribusi

### Laporkan Bug
1. Cek [Issues](../../issues) apakah bug sudah dilaporkan
2. Buka issue baru dengan label `bug`
3. Sertakan: langkah reproduksi, browser/OS, dan screenshot jika ada

### Usulkan Fitur
1. Buka issue baru dengan label `enhancement`
2. Jelaskan use case dan manfaatnya

### Pull Request
1. Fork repo ini
2. Buat branch baru:
   ```bash
   git checkout -b fitur/nama-fitur
   # atau
   git checkout -b fix/nama-bug
   ```
3. Buat perubahan di `index.html`
4. Test di browser (Chrome + mobile view)
5. Commit dengan pesan deskriptif:
   ```bash
   git commit -m "feat: tambah fitur export hasil polling"
   git commit -m "fix: tombol vote tidak aktif setelah error"
   ```
6. Push dan buka Pull Request ke branch `main`

## Konvensi Kode

- Semua kode dalam satu file `index.html`
- CSS custom properties (`--var`) untuk semua warna
- Fungsi global di `window.namaFungsi` agar bisa dipanggil dari HTML
- Komentar section: `// ── NAMA SECTION ────`
- Hindari dependency baru — app harus tetap single-file

## Development

Cukup buka `index.html` di browser. Tidak perlu build step atau server lokal.

Untuk testing Firebase, gunakan project Firebase sendiri dan ganti `firebaseConfig` di `index.html`.
