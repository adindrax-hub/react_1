import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import DiaryCard from "../components/DiaryCard";
import DiaryDetailModal from "../components/DiaryDetailModal";
import { COLORS, SPACE, TYPO, BREAKPOINTS } from "../styles/tokens";

// Menyertakan 5 entri sesuai syarat tugas praktikum
const DATA = [
  {
    id: 1,
    title: "Pagi yang Tenang",
    date: "2026-10-12",
    preview: "Bangun lebih pagi dan jalan kaki...",
    body: "Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk dan menyegarkan pikiran sebelum memulai hari.",
    moodUri: "https://picsum.photos/seed/happy/200",
    heroUri: "https://picsum.photos/seed/happyhero/800/450",
  },
  {
    id: 2,
    title: "Produktif di Kampus",
    date: "2026-10-11",
    preview: "Menyelesaikan modul praktikum...",
    body: "Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru yang didapatkan dari dosen hari ini.",
    moodUri: "https://picsum.photos/seed/focus/200",
    heroUri: "https://picsum.photos/seed/focushero/800/450",
  },
  {
    id: 3,
    title: "Senja di Taman",
    date: "2026-10-10",
    preview: "Membaca buku favorit di taman...",
    body: "Menikmati senja sambil membaca buku favorit. Warna langit sangat indah, rasanya sangat tenang.",
    moodUri: "https://picsum.photos/seed/calm/200",
    heroUri: "https://picsum.photos/seed/calmhero/800/450",
  },
  {
    id: 4,
    title: "Hujan Deras",
    date: "2026-10-09",
    preview: "Terjebak hujan saat pulang...",
    body: "Lupa membawa jas hujan sehingga terpaksa berteduh di minimarket cukup lama sambil minum kopi hangat.",
    moodUri: "https://picsum.photos/seed/sad/200",
    heroUri: "https://picsum.photos/seed/sadhero/800/450",
  },
  {
    id: 5,
    title: "Ujian Berjalan Lancar",
    date: "2026-10-08",
    preview: "Persiapan semalaman membuahkan hasil...",
    body: "Syukurlah persiapan semalaman membuahkan hasil. Soal ujiannya bisa dijawab dengan baik dan tepat waktu.",
    moodUri: "https://picsum.photos/seed/excited/200",
    heroUri: "https://picsum.photos/seed/excitedhero/800/450",
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  const keyForCols = useMemo(() => (twoCols ? "grid2" : "list1"), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        variant={twoCols ? "grid" : "list"}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>

      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
          paddingTop: SPACE.m,
        }}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada entri.</Text>}
      />

      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  header: {
    fontSize: TYPO.h1,
    fontWeight: "700",
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    color: COLORS.text,
  },
  itemWrap: { flex: 1 },
  itemWrap2: { flex: 1 / 2 },
  empty: { textAlign: "center", color: COLORS.muted, marginTop: 40 },
});
