# 📓 Diary App

**Identitas Pengembang**

- **Nama:** Adindra

- **NIM:** 2430511048

- **Kelas:** 5C

- **Program Studi:** Teknik Informatika

- **Universitas:** Universitas Muhammadiyah Sukabumi

## 📖 Deskripsi Proyek

Diary App adalah sebuah aplikasi _mobile_ pencatatan keseharian sederhana yang dibangun menggunakan **React Native** dan **Expo CLI**. Proyek ini dikembangkan secara bertahap mulai dari perancangan komponen UI statis, implementasi tata letak responsif, hingga integrasi manajemen _state_ dan aliran data (_data flow_) agar aplikasi menjadi dinamis dan interaktif.

Setiap entri catatan ditampilkan dalam bentuk kartu yang memuat ikon representasi perasaan (mood), judul, tanggal, pratinjau teks, serta tombol interaktif (suka/like).

## ✨ Fitur Aplikasi

Aplikasi ini telah mencakup seluruh fungsionalitas dari Praktikum Pertemuan 2, 3, dan 4:

- **Manajemen State Dinamis:** Menggunakan `useState` untuk menambahkan catatan baru melalui _controlled form_ (Form Entri) tanpa perlu memuat ulang (_reload_) aplikasi.

- **Fitur Pencarian (Real-time Search):** Memfilter daftar catatan berdasarkan judul, tanggal, atau isi konten menggunakan _derived state_ dari teks masukan.

- **Interaksi Pengguna (Like & Modal):**
  - Tombol _Like_ (❤️/🤍) pada setiap kartu yang dikelola melalui _shared state_.

  - Jendela _Pop-up Modal_ dinamis untuk membaca isi penuh catatan dan melihat _hero image_ tanpa berpindah halaman (_screen_).

- **Responsive Layout:** Tampilan daftar menggunakan `FlatList` yang secara otomatis menyesuaikan ukuran layar. Menggunakan 1 kolom pada layar _smartphone_ (potret) dan merender ulang menjadi _grid_ 2 kolom pada layar yang lebih lebar (>= 600px).

- **Design Tokens & Aksesibilitas:** Desain UI (warna, jarak, dan ukuran huruf) diatur secara terpusat untuk menjaga konsistensi. Komponen interaktif dilengkapi dengan efek sentuhan (_ripple effect_) dan `accessibilityLabel`.

- **Local & Remote Assets:** Mendukung pemanggilan gambar dari internet (URL) maupun gambar yang disimpan secara lokal (seperti foto profil avatar dan ikon mood).

## 🚀 Cara Menjalankan Aplikasi

**Prasyarat:**
Pastikan Anda sudah menginstal Node.js di komputer Anda dan aplikasi **Expo Go** di perangkat seluler Anda.

**Langkah-langkah:**

1. Buka Terminal atau Command Prompt, lalu masuk ke dalam folder proyek:

   ```
   cd diary-app

   ```

2. Jalankan _development server_ Expo dengan perintah:

   ```
   npx expo start

   ```

3. Pilih salah satu cara berikut untuk melihat aplikasi:
   - **Melalui Smartphone:** Buka aplikasi Expo Go di HP Anda, lalu _scan QR Code_ yang muncul di terminal. (Pastikan HP dan laptop terhubung ke jaringan Wi-Fi yang sama).

   - **Melalui Emulator Android:** Pastikan emulator Android Studio sudah menyala, lalu tekan tombol `a` pada keyboard di terminal.

   - **Melalui Web Browser:** Tekan tombol `w` pada keyboard di terminal untuk menguji responsivitas layout 2 kolom.

_Dikembangkan sebagai bagian dari Praktikum Mobile Programming_
