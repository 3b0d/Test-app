import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const sampleImages = [
  { id: "1", src: require("../assets/gallery/sample1.png") },
  { id: "2", src: require("../assets/gallery/sample2.png") },
];

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <FlatList
        data={sampleImages}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item.src} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 10 },
  title: { color: "#25D366", fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  image: { width: 150, height: 150, margin: 5, borderRadius: 10 },
});