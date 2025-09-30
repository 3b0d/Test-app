import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";

export default function DarkosChat() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Welcome Boss - Chef please login to open DΛRKos features.", sender: "darkos" },
  ]);
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { id: Date.now().toString(), text: input, sender: "me" };
      setMessages((prev) => [...prev, newMessage]);

      // التحقق من الكلمة السرية
      if (input.trim().toLowerCase() === "/login @3bod") {
        setUnlocked(true);
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString() + "sys", text: "Access granted. Opening DΛRKos system...", sender: "darkos" },
        ]);
      }

      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.sender === "me" ? styles.myMessage : styles.darkosMessage]}>
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

      {unlocked && (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>🔐 Login to DΛRKos</Text>
          <TouchableOpacity style={styles.overlayButton}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>Proceed</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  messageBubble: {
    padding: 10,
    margin: 8,
    borderRadius: 12,
    maxWidth: "70%",
  },
  myMessage: { backgroundColor: "#25D366", alignSelf: "flex-end" },
  darkosMessage: { backgroundColor: "#2C2C2E", alignSelf: "flex-start" },
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
  overlay: {
    position: "absolute",
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#25D366",
  },
  overlayText: { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 10 },
  overlayButton: {
    backgroundColor: "#25D366",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
});