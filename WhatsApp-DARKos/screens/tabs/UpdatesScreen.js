import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UpdatesScreen() {
  const [updates, setUpdates] = useState([
    { id: "1", name: "Bella", image: null },
    { id: "2", name: "DΛRKos", image: null },
  ]);

  const pickImage = async (id) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    if (!result.canceled) {
      setUpdates((prev) =>
        prev.map((item) => (item.id === id ? { ...item, image: result.assets[0].uri } : item))
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Status Updates</Text>
      <FlatList
        data={updates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => pickImage(item.id)}>
            <Image
              source={
                item.image ? { uri: item.image } : require("../../assets/placeholder.png")
              }
              style={styles.image}
            />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 10 },
  header: { color: "#25D366", fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  item: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  image: { width: 50, height: 50, borderRadius: 25, marginRight: 12, backgroundColor: "#333" },
  text: { color: "#fff", fontSize: 16 },
});