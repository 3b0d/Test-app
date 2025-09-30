import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, FlatList } from "react-native";

export default function ChatDetail({ route }) {
  const { chat } = route.params;
  const [messages, setMessages] = useState([
    { id: "1", text: chat.special === "bella" ? "Always with you ✨" : "This is a fake chat.", sender: "them" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { id: Date.now().toString(), text: input, sender: "me" }]);
      setInput("");
    }
  };

  return (
    <ImageBackground
      source={chat.wallpaper || require("../assets/chat_wallpaper.png")}
      style={styles.container}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.sender === "me" ? styles.myMessage : styles.theirMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  messageBubble: {
    padding: 10,
    margin: 8,
    borderRadius: 12,
    maxWidth: "70%",
  },
  myMessage: { backgroundColor: "#25D366", alignSelf: "flex-end" },
  theirMessage: { backgroundColor: "#2C2C2E", alignSelf: "flex-start" },
  messageText: { color: "#fff" },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#2C2C2E",
    padding: 10,
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#25D366",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});