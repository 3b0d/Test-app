import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";

export default function CommunitiesScreen() {
  const [communities, setCommunities] = useState([
    { id: "1", name: "Real Madrid Fans", followers: "25K", image: null },
    { id: "2", name: "DΛRKos Security", followers: "12K", image: null },
  ]);

  const addCommunity = () => {
    const newCom = {
      id: Date.now().toString(),
      name: "New Channel",
      followers: "0",
      image: null,
    };
    setCommunities([newCom, ...communities]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={addCommunity}>
        <Text style={styles.addText}>+ Add Channel</Text>
      </TouchableOpacity>
      <FlatList
        data={communities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={item.image ? { uri: item.image } : require("../../assets/placeholder.png")}
              style={styles.image}
            />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>{item.followers} followers</Text>
            </View>
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
  item: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  image: { width: 45, height: 45, borderRadius: 22, marginRight: 10, backgroundColor: "#333" },
  name: { color: "#fff", fontSize: 16, fontWeight: "600" },
  details: { color: "#aaa", fontSize: 14 },
});