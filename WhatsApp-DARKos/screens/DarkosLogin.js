import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function DarkosLogin({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      user === "DARKos_3bod" &&
      password ===
        "Darkos$@rawasiamnadinahrawandodokatiAra&alwaysjustliesbadpromisesgivennothingurherealonefightingbysometingyoumakewhenyoupromisedurselfitsrealsogoonaloneorjustgetmorescarsandbleeding@$06040102000@1@1left:nomoveonjustdiewithyourworngthingsugo:DalAhraRbddbKal"
    ) {
      navigation.navigate("Dashboard");
    } else {
      Alert.alert("Access Denied", "Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to DΛRKos</Text>
      <TextInput
        style={styles.input}
        placeholder="User"
        placeholderTextColor="#888"
        value={user}
        onChangeText={setUser}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
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
  title: { color: "#25D366", fontSize: 22, fontWeight: "bold", marginBottom: 30 },
  input: {
    backgroundColor: "#1C1C1E",
    color: "#fff",
    width: "100%",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#25D366",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
});