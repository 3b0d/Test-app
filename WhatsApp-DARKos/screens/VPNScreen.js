import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView, Linking, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function HomeTab() {
  const [connected, setConnected] = useState(false);
  const [ip, setIp] = useState("—");

  const toggleVPN = () => {
    if (!connected) {
      setIp("203.0.113." + Math.floor(Math.random() * 200));
    } else {
      setIp("—");
    }
    setConnected(!connected);
  };

  return (
    <View style={styles.center}>
      <Text style={styles.title}>DΛRKos VPN</Text>
      <Button
        title={connected ? "Disconnect" : "Connect"}
        onPress={toggleVPN}
        color={connected ? "red" : "green"}
      />
      <Text style={styles.info}>User Real IP: 192.168.1.22</Text>
      <Text style={styles.info}>New IP: {ip}</Text>
      <Text style={styles.info}>Server: vpn.darkos-secure.net</Text>
      <Text style={styles.info}>Archive Location: Baghdad, Iraq 📍</Text>
    </View>
  );
}

function MapTab() {
  return (
    <ScrollView style={styles.center}>
      <Text style={styles.title}>🌍 Server Map</Text>
      <Image
        source={require("../assets/vpn-map.png")}
        style={{ width: "100%", height: 300, marginTop: 20 }}
        resizeMode="contain"
      />
      <Text style={styles.info}>Choose any country as fake server location.</Text>
    </ScrollView>
  );
}

function ApplyTab() {
  const handleApply = () => {
    Linking.openURL(
      "https://github.com/3b0d/VPN/raw/refs/heads/main/DARKosVPN.mobileconfig"
    );
  };

  return (
    <View style={styles.center}>
      <Text style={styles.title}>⚙️ Apply VPN</Text>
      <Text style={styles.info}>
        Press below to add DΛRKos VPN to your iOS Settings.
      </Text>
      <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
        <Text style={styles.applyText}>Apply DΛRKos VPN</Text>
      </TouchableOpacity>
      <Text style={[styles.info, { marginTop: 15, color: "#25D366" }]}>
        Your system is secure and DΛRKos is on your settings.
      </Text>
    </View>
  );
}

function ProfileTab() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>👤 VPN Profile</Text>
      <Text style={styles.info}>WhatsApp User: 3bod</Text>
      <Text style={styles.info}>DΛRKos User: @3bod</Text>
      <Text style={styles.info}>Developer: Abdullah (DΛRK)</Text>
      <Text style={[styles.info, { marginTop: 20 }]}>UUID: 7477-0070-21OS-CIDF</Text>
      <Text style={styles.info}>Encryption: AES-256 / SHA-2</Text>
      <Text style={styles.info}>Status: Verified ✅</Text>
    </View>
  );
}

export default function VPNScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#25D366",
        tabBarIndicatorStyle: { backgroundColor: "#25D366" },
      }}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Map" component={MapTab} />
      <Tab.Screen name="Apply" component={ApplyTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center", padding: 20 },
  title: { color: "#25D366", fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  info: { color: "#fff", fontSize: 16, marginTop: 5, textAlign: "center" },
  applyBtn: {
    marginTop: 20,
    backgroundColor: "#25D366",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  applyText: { color: "#000", fontSize: 16, fontWeight: "bold" },
});