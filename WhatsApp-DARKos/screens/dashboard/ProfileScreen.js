import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* صورة الحساب */}
      <Image
        source={require("../../assets/profile-placeholder.png")} // تجهز صورة بروفايل هنا
        style={styles.avatar}
      />

      {/* معلومات الحساب */}
      <Text style={styles.username}>User: @3bod ✅ DEV</Text>
      <Text style={styles.info}>WhatsApp Account: +964 772777237</Text>
      <Text style={styles.info}>DΛRKos System: Active</Text>

      {/* Developer Info */}
      <View style={styles.devBox}>
        <Text style={styles.dev}>Developer: Abdullah (DΛRK)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    color: "#25D366",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  devBox: {
    marginTop: 25,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#1C1C1E",
  },
  dev: {
    color: "#4CD964",
    fontWeight: "bold",
  },
});