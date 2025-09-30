import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Plus } from "lucide-react-native";

export default function ChatScreen({ navigation }) {
  const [chats, setChats] = useState([
    { id: "1", name: "Bella 💖", lastMessage: "Hey love, I missed you!", time: "12:30" },
    { id: "2", name: "DΛRKos", lastMessage: "Welcome Boss - /login @3bod", time: "01:15" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem}>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage}>{item.lastMessage}</Text>
            </View>
            <Text style={styles.chatTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />

      {/* زر إضافة شات مزيف */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddFakeChat", { setChats })}
      >
        <Plus color="white" size={28} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  chatItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "#333",
  },
  chatInfo: { flexDirection: "column" },
  chatName: { color: "#fff", fontSize: 18, fontWeight: "600" },
  chatMessage: { color: "#aaa", fontSize: 14, marginTop: 3 },
  chatTime: { color: "#888", fontSize: 12 },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#25D366",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});