import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LogsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📑 Logs</Text>
      <Text style={styles.text}>System logs will appear here...</Text>
      <Text style={styles.textSmall}>DΛRKos Logger v1.0</Text>
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
  title: { color: "#25D366", fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { color: "#fff", fontSize: 16 },
  textSmall: { color: "#888", fontSize: 12, marginTop: 5 },
});