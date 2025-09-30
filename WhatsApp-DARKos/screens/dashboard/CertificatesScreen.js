import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function CertificatesScreen() {
  const certificates = [
    {
      title: "Apple Certification",
      issued: "2024-01-01",
      expiry: "Lifetime",
      status: "✅ Valid",
    },
    {
      title: "Google Security Approval",
      issued: "2023-06-12",
      expiry: "Lifetime",
      status: "✅ Valid",
    },
    {
      title: "Harvard Research License",
      issued: "2022-09-01",
      expiry: "Lifetime",
      status: "✅ Valid",
    },
    {
      title: "DΛRKos Cyber Authority",
      issued: "2025-01-01",
      expiry: "Lifetime",
      status: "✅ Valid",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {certificates.map((cert, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{cert.title}</Text>
          <Text style={styles.text}>Issued: {cert.issued}</Text>
          <Text style={styles.text}>Expiry: {cert.expiry}</Text>
          <Text style={styles.status}>{cert.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },
  card: {
    backgroundColor: "#1C1C1E",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    color: "#25D366",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  status: {
    color: "#4CD964",
    fontWeight: "bold",
    marginTop: 6,
  },
});