import React, { useState } from "react";
import { View, Text, Button, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ChatsScreen() {
  const [chats, setChats] = useState([
    { id: 1, name: "Bella", number: "+964770000000", image: require("../../assets/bella.png") },
    { id: 2, name: "DΛRKos", number: "@system", image: require("../../assets/darkos.png") },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newImage, setNewImage] = useState(null);

  // Pick image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) setNewImage(result.assets[0].uri);
  };

  // Add new chat
  const addChat = () => {
    if (newName && newNumber) {
      setChats([
        ...chats,
        {
          id: Date.now(),
          name: newName,
          number: newNumber,
          image: newImage ? { uri: newImage } : require("../../assets/default-avatar.png"),
        },
      ]);
      setNewName("");
      setNewNumber("");
      setNewImage(null);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chats</Text>

      {chats.map(chat => (
        <View key={chat.id} style={styles.chatRow}>
          <Image source={chat.image} style={styles.avatar} />
          <Text style={styles.chatText}>{chat.name} ({chat.number})</Text>
        </View>
      ))}

      <View style={styles.form}>
        <Text style={styles.formTitle}>➕ Add Chat</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#aaa"
          value={newName}
          onChangeText={setNewName}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#aaa"
          value={newNumber}
          onChangeText={setNewNumber}
          style={styles.input}
        />
        <TouchableOpacity onPress={pickImage} style={styles.imageBtn}>
          <Text style={{ color: "#fff" }}>Pick Image</Text>
        </TouchableOpacity>
        <Button title="Add Chat" onPress={addChat} color="#25D366" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 22, color: "#25D366", fontWeight: "bold", marginBottom: 15 },
  chatRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  avatar: { width: 45, height: 45, borderRadius: 22, marginRight: 12 },
  chatText: { color: "#fff", fontSize: 16 },
  form: { marginTop: 30, padding: 15, backgroundColor: "#111", borderRadius: 8 },
  formTitle: { color: "#25D366", fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  input: { backgroundColor: "#1F1F1F", color: "#fff", marginBottom: 12, padding: 10, borderRadius: 6 },
  imageBtn: { backgroundColor: "#25D366", padding: 10, alignItems: "center", borderRadius: 6, marginBottom: 12 },
});