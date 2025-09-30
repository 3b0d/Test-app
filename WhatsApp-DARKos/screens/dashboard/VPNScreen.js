import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function VPNScreen() {
  const [connected, setConnected] = useState(false);

  const toggleVPN = () => {
    setConnected(!connected);
  };

  return (
    <View style={styles.container}>
      {/* شعار أو أيقونة VPN */}
      <Image
        source={require("../../assets/darkos-vpn-logo.png")} // انت جهز الصورة وحطها هنا
        style={styles.logo}
      />

      {/* زر الاتصال */}
      <TouchableOpacity
        style={[styles.button, connected ? styles.disconnect : styles.connect]}
        onPress={toggleVPN}
      >
        <Text style={styles.buttonText}>
          {connected ? "DISCONNECT" : "CONNECT"}
        </Text>
      </TouchableOpacity>

      {/* حالة الاتصال */}
      <Text style={styles.status}>
        {connected ? "✅ Connected" : "❌ Not Connected"}
      </Text>

      {/* تفاصيل الاتصال */}
      <View style={styles.infoBox}>
        <Text style={styles.info}>User Real IP: 192.168.1.101</Text>
        <Text style={styles.info}>
          New IP: {connected ? "203.0.113.77" : "---"}
        </Text>
        <Text style={styles.info}>
          Server: {connected ? "New York, USA" : "---"}
        </Text>
        <Text style={styles.info}>
          Archive IP & Location: {connected ? "London, UK" : "---"}
        </Text>
      </View>

      {/* صورة الخريطة النيون */}
      <Image
        source={require("../../assets/vpn-map.png")} // الخريطة neon اللي وريتها
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: "contain",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 20,
  },
  connect: {
    backgroundColor: "#25D366",
  },
  disconnect: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: "#1C1C1E",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    marginBottom: 30,
  },
  info: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  map: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginTop: 10,
  },
});