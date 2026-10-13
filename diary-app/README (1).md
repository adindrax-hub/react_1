# 📓 Diary App

Diary App adalah sebuah aplikasi mobile pencatatan keseharian sederhana yang dibangun menggunakan **React Native** dan **Expo CLI**. Aplikasi ini menyajikan antarmuka daftar catatan harian pengguna yang rapi, interaktif, dan responsif.

Setiap catatan ditampilkan dalam bentuk kartu yang memuat ikon representasi perasaan (mood), judul, tanggal, dan pratinjau teks. Saat pengguna menekan salah satu kartu, sebuah jendela pop-up (Modal) akan muncul untuk menampilkan isi cerita lengkap beserta gambar *hero image*.

## ✨ Fitur Utama

- **Responsive Layout:** Tampilan daftar otomatis menyesuaikan ukuran layar. Menggunakan 1 kolom pada layar *smartphone* (potret) dan berubah menjadi *grid* 2 kolom pada layar yang lebih lebar (\>= 600px) seperti tablet atau *web browser*.  
- **Interactive Cards:** Kartu catatan memberikan efek sentuhan visual (*ripple effect*) yang nyaman saat ditekan.  
- **Detail Modal:** Membaca catatan penuh tidak perlu berpindah halaman, melainkan cukup melalui *pop-up modal* yang dinamis.  
- **Design Tokens:** Desain UI (warna, jarak, dan ukuran huruf) diatur secara terpusat untuk menjaga konsistensi tampilan.  
- **Local & Remote Assets:** Mendukung pemanggilan gambar dari internet (URL) maupun gambar yang disimpan secara lokal (seperti foto profil avatar dan ikon mood).

## 🚀 Cara Menjalankan Aplikasi

**Prasyarat:** Pastikan Anda sudah menginstal Node.js di komputer Anda dan aplikasi **Expo Go** di HP Anda.

**Langkah-langkah:**

1. Buka terminal atau Command Prompt pada Visual Studio Code, lalu pastikan Anda sudah berada di dalam folder proyek:  
     
   cd diary-app  
     
2. Jalankan *development server* Expo dengan perintah:  
     
   npx expo start  
     
3. Pilih salah satu cara berikut untuk melihat aplikasi:  
   - **Melalui Smartphone:** Buka aplikasi Expo Go di HP Anda, lalu *scan QR Code* yang muncul di terminal. (Pastikan HP dan laptop terhubung ke jaringan Wi-Fi yang sama).  
   - **Melalui Emulator Android:** Pastikan emulator Android Studio sudah menyala, lalu tekan tombol `a` pada keyboard di terminal.  
   - **Melalui Web Browser:** Tekan tombol `w` pada keyboard di terminal untuk melihat versi web responsifnya (untuk menguji fitur layout 2 kolom).

---

*Dibangun menggunakan React Native & Expo*