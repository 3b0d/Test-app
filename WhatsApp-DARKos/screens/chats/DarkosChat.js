import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function DarkosChat({ navigation }) {
  const [messages, setMessages] = useState([
    { id: "1", sender: "darkos", text: "Welcome Boss - Chef please login to open DΛRKos features.", time: "11:11 PM" },
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

    if (input.trim() === "/login @3bod") {
      navigation.navigate("DarkosLogin"); // يفتح شاشة تسجيل الدخول للنظام
    }
    setInput("");
  };

  return (
    <View style={styles.container}>
      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.msg, item.sender === "me" ? styles.myMsg : styles.sysMsg]}>
            <Text style={styles.msgText}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />

      {/* Input */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Message DARKos..."
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
  msg: { margin: 8, padding: 10, borderRadius: 10, maxWidth: "75%" },
  myMsg: { alignSelf: "flex-end", backgroundColor: "#25D366" },
  sysMsg: { alignSelf: "flex-start", backgroundColor: "#2C2C2E" },
  msgText: { color: "#fff" },
  time: { color: "#ccc", fontSize: 10, marginTop: 4 },
  inputRow: { flexDirection: "row", padding: 8, backgroundColor: "#1F1F1F" },
  input: { flex: 1, backgroundColor: "#2C2C2E", color: "#fff", borderRadius: 20, paddingHorizontal: 15 },
  sendBtn: { marginLeft: 8, backgroundColor: "#25D366", borderRadius: 20, paddingHorizontal: 15, justifyContent: "center" },
});