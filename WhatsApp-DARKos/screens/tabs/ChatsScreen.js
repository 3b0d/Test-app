import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";

export default function ChatsScreen({ navigation }) {
  const [chats, setChats] = useState([
    {
      id: "1",
      name: "Bella",
      lastMessage: "Always with you ✨",
      avatar: require("../../assets/bella_profile.png"), // صورة حساب بيلا
      wallpaper: require("../../assets/bella_wallpaper.png"),
      special: "bella",
    },
    {
      id: "2",
      name: "DΛRKos",
      lastMessage: "Welcome Boss - Chef please login to open DΛRKos features.",
      avatar: require("../../assets/darkos.png"), // شعار DΛRKos
      special: "darkos",
    },
  ]);

  // إضافة Fake Chat
  const addFakeChat = () => {
    Alert.prompt(
      "New Fake Chat",
      "Enter the name of the fake contact:",
      (name) => {
        if (name) {
          setChats((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              name,
              lastMessage: "Fake conversation ready.",
              avatar: require("../../assets/icon.png"), // صورة افتراضية
              special: "fake",
            },
          ]);
        }
      }
    );
  };

  const openChat = (chat) => {
    if (chat.special === "bella") {
      navigation.navigate("ChatDetail", { chat });
    } else if (chat.special === "darkos") {
      navigation.navigate("DarkosChat", { chat });
    } else {
      navigation.navigate("ChatDetail", { chat });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem} onPress={() => openChat(item)}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={addFakeChat}>
        <Text style={styles.addText}>＋ Add Fake Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#222",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  textContainer: { flex: 1 },
  name: { color: "#fff", fontWeight: "600", fontSize: 16 },
  message: { color: "#aaa", fontSize: 14, marginTop: 2 },
  addButton: {
    backgroundColor: "#25D366",
    padding: 15,
    alignItems: "center",
  },
  addText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});