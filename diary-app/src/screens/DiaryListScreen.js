import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import DiaryCard from "../components/DiaryCard";

// IMPORT GAMBAR LOKAL
// Pastikan nama file dan letaknya sesuai dengan yang ada di folder Anda!
const avatarImg = require("../../assets/avatar.png");
const lokalSenangImg = require("../../assets/moods/senang.png");

const diaryEntries = [
  {
    id: 1,
    title: "Pagi yang Tenang",
    date: "2026-10-12",
    preview:
      "Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...",
    moodUri: "https://picsum.photos/seed/calm/80",
    borderColor: "#4ade80", // Hijau untuk tenang
  },
  {
    id: 2,
    title: "Produktif di Kampus",
    date: "2026-10-11",
    preview:
      "Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...",
    moodUri: "https://picsum.photos/seed/focus/80",
    borderColor: "#3b82f6", // Biru untuk produktif
  },
  {
    id: 3,
    title: "Kumpul Bareng Teman",
    date: "2026-10-10",
    preview:
      "Akhirnya bisa ngobrol santai lagi bareng teman-teman di kafe favorit.",
    moodSource: lokalSenangImg, // MENGGUNAKAN GAMBAR LOKAL
    borderColor: "#f59e0b", // Kuning/Orange untuk senang
  },
  {
    id: 4,
    title: "Kehujanan di Jalan",
    date: "2026-10-09",
    preview:
      "Lupa bawa jas hujan saat pulang. Terpaksa berteduh cukup lama di minimarket.",
    moodUri: "https://picsum.photos/seed/sad/80",
    borderColor: "#94a3b8", // Abu-abu untuk sedih/murung
  },
  {
    id: 5,
    title: "Ujian Berjalan Lancar",
    date: "2026-10-08",
    preview:
      "Syukurlah persiapan semalaman membuahkan hasil. Soal ujiannya bisa dijawab dengan baik.",
    moodUri: "https://picsum.photos/seed/happy/80",
    borderColor: "#ec4899", // Pink untuk bahagia
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* HEADER DENGAN AVATAR PENGGUNA */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Buku Harian</Text>
        <Image source={avatarImg} style={styles.avatar} />
      </View>

      {/* RENDER DAFTAR KARTU */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          moodSource={entry.moodSource}
          borderColor={entry.borderColor}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e5e7eb", // Warna dasar kalau gambar telat dimuat
  },
});
