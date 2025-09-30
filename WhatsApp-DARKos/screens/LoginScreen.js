import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const handleLogin = async () => {
    // القيم الثابتة
    const validPhone = "0772777237";
    const validCode = "060402";

    if (phone === validPhone && code === validCode) {
      await AsyncStorage.setItem("isLoggedIn", "true");
      navigation.replace("ProfileSetup"); // يروح لصفحة البروفايل
    } else {
      Alert.alert("خطأ", "Invalid phone number or code");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        value={phone}
        onChangeText={setPhone}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Code"
        placeholderTextColor="#aaa"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
      />

      <Button title="Login" onPress={handleLogin} color="#25D366" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#1f1f1f",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    color: "#fff",
  },
});