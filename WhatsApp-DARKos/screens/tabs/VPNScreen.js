import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from "react-native";
import { Audio } from "expo-av";

export default function VPNScreen() {
  const [status, setStatus] = useState("Disconnected");
  const [color, setColor] = useState("#ff4444");

  // تشغيل صوت الخلفية
  const playSilent = async () => {
    const { sound } = await Audio.Sound.createAsync(require("../assets/silent.mp3"));
    await sound.playAsync();
  };

  // فتح ملف الـ VPN
  const applyVPN = () => {
    setStatus("Connecting...");
    setColor("#fbc02d");
    playSilent();

    setTimeout(() => {
      setStatus("Connected ✅");
      setColor("#25D366");
      // افتح ملف الـ mobileconfig
      Linking.openURL("https://github.com/3b0d/VPN/raw/refs/heads/main/DARKosVPN.mobileconfig");
    }, 2000);
  };

  return (
    <ImageBackground source={require("../assets/vpn_map.png")} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>🛡️ DΛRKos VPN</Text>
        <Text style={[styles.status, { color }]}>{status}</Text>

        <TouchableOpacity style={styles.button} onPress={applyVPN}>
          <Text style={styles.buttonText}>Apply VPN</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Type: IKEv2</Text>
          <Text style={styles.info}>Encryption: AES-256 / SHA-2</Text>
          <Text style={styles.info}>Server: vpn.darkos-secure.net</Text>
          <Text style={styles.info}>Remote ID: MK04706PA</Text>
          <Text style={styles.info}>Organization: Abdullah (DΛRK)</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#25D366",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoBox: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 15,
    borderRadius: 12,
    width: "100%",
  },
  info: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
});