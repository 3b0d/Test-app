import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button, TextInput, Image } from "react-native";

export default function CertificatesSettings() {
  const [certs, setCerts] = useState([
    { id: 1, name: "Apple Certification", type: "Certificate", desc: "Lifetime ✅", img: require("../assets/apple.png") },
    { id: 2, name: "Google Approval", type: "Approval", desc: "ISO 27001 ✅", img: require("../assets/google.png") },
    { id: 3, name: "Harvard Research Grant", type: "Approval", desc: "Verified ✅", img: require("../assets/harvard.png") },
    { id: 4, name: "DΛRKos Security", type: "Certificate", desc: "Military-Grade ✅", img: require("../assets/darkos.png") },
  ]);

  const [newCert, setNewCert] = useState("");

  const addCert = () => {
    if (newCert.trim().length > 0) {
      setCerts([
        ...certs,
        { id: Date.now(), name: newCert, type: "Certificate", desc: "Custom ✅", img: require("../assets/darkos.png") },
      ]);
      setNewCert("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📜 Certificates & Approvals</Text>

      {certs.map((c) => (
        <View key={c.id} style={styles.card}>
          <Image source={c.img} style={styles.logo} />
          <View>
            <Text style={styles.certName}>{c.name}</Text>
            <Text style={styles.certDetail}>{c.desc}</Text>
          </View>
        </View>
      ))}

      <View style={styles.addBox}>
        <TextInput
          style={styles.input}
          placeholder="Add Certificate / Approval"
          placeholderTextColor="#888"
          value={newCert}
          onChangeText={setNewCert}
        />
        <Button title="Add" onPress={addCert} color="#25D366" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#25D366", fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  logo: { width: 40, height: 40, marginRight: 15, borderRadius: 5 },
  certName: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  certDetail: { color: "#aaa", fontSize: 14 },
  addBox: { marginTop: 20, flexDirection: "row", alignItems: "center", gap: 10 },
  input: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
});