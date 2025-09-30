import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

export default function CallsScreen() {
  const [calls, setCalls] = useState([
    { id: "1", name: "Bella", type: "Voice", time: "Yesterday" },
    { id: "2", name: "DΛRKos", type: "Video", time: "2 min ago" },
  ]);

  const addCall = () => {
    const newCall = {
      id: Date.now().toString(),
      name: "Fake Contact",
      type: "Voice",
      time: "Just now",
    };
    setCalls([newCall, ...calls]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={addCall}>
        <Text style={styles.addText}>+ Start Call</Text>
      </TouchableOpacity>
      <FlatList
        data={calls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>
              {item.type} Call • {item.time}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 10 },
  addButton: {
    backgroundColor: "#25D366",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  addText: { color: "#000", fontWeight: "bold" },
  item: { paddingVertical: 12, borderBottomWidth: 0.3, borderBottomColor: "#222" },
  name: { color: "#fff", fontSize: 16, fontWeight: "600" },
  details: { color: "#aaa", fontSize: 14 },
});