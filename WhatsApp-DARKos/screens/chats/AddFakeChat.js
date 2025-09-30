import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AddFakeChat({ route, navigation }) {
  const { setChats } = route.params;
  const [name, setName] = useState("");
  const [lastMessage, setLastMessage] = useState("");

  const addChat = () => {
    if (name.trim() !== "" && lastMessage.trim() !== "") {
      setChats((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name,
          lastMessage,
          time: "Now",
        },
      ]);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Fake Chat</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#666"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Message"
        placeholderTextColor="#666"
        value={lastMessage}
        onChangeText={setLastMessage}
      />

      <TouchableOpacity style={styles.addButton} onPress={addChat}>
        <Text style={styles.addText}>Add Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 22, fontWeight: "700", marginBottom: 20 },
  input: {
    backgroundColor: "#1c1c1c",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: "#25D366",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  addText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});