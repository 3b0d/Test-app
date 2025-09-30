import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function LogsScreen() {
  const [logs, setLogs] = useState([
    { id: "1", text: "App started ✅" },
    { id: "2", text: "User logged in with +964 07727777237" },
    { id: "3", text: "Profile setup completed" },
    { id: "4", text: "VPN Connected (Iraq Server)" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Logs</Text>
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.logItem}>• {item.text}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#25D366", fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  logItem: { color: "#fff", fontSize: 16, marginBottom: 8 },
});