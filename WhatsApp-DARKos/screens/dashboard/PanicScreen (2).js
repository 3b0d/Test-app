import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PanicScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚨 Panic Mode</Text>
      <Text style={styles.text}>Press here to trigger emergency shutdown.</Text>
      <Text style={styles.textSmall}>DΛRKos Secure · v2.3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "#FF3B30", fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { color: "#fff", fontSize: 16 },
  textSmall: { color: "#888", fontSize: 12, marginTop: 5 },
});