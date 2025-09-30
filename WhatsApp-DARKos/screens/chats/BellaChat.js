import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function BellaChat() {
  const [messages, setMessages] = useState([
    { id: "1", sender: "bella", text: "Hey love ✨", time: "10:30 PM" },
    { id: "2", sender: "me", text: "Always with you 💚", time: "10:31 PM" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now().toString(),
      sender: "me",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/bella_profile.png")} style={styles.avatar} />
        <View>
          <Text style={styles.name}>Bella ✨</Text>
          <Text style={styles.status}>Always with you</Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.msg, item.sender === "me" ? styles.myMsg : styles.herMsg]}>
            <Text style={styles.msgText}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />

      {/* Input */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Message Bella..."
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
          <Text style={{ color: "#fff" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: { flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: "#1F1F1F" },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { color: "#fff", fontSize: 16, fontWeight: "600" },
  status: { color: "#aaa", fontSize: 12 },
  msg: { margin: 8, padding: 10, borderRadius: 10, maxWidth: "75%" },
  myMsg: { alignSelf: "flex-end", backgroundColor: "#25D366" },
  herMsg: { alignSelf: "flex-start", backgroundColor: "#2C2C2E" },
  msgText: { color: "#fff" },
  time: { color: "#ccc", fontSize: 10, marginTop: 4 },
  inputRow: { flexDirection: "row", padding: 8, backgroundColor: "#1F1F1F" },
  input: { flex: 1, backgroundColor: "#2C2C2E", color: "#fff", borderRadius: 20, paddingHorizontal: 15 },
  sendBtn: { marginLeft: 8, backgroundColor: "#25D366", borderRadius: 20, paddingHorizontal: 15, justifyContent: "center" },
});