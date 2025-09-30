import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Account</Text>
      <TouchableOpacity style={styles.item}><Text style={styles.text}>Privacy</Text></TouchableOpacity>
      <TouchableOpacity style={styles.item}><Text style={styles.text}>Security</Text></TouchableOpacity>
      <TouchableOpacity style={styles.item}><Text style={styles.text}>Change Number</Text></TouchableOpacity>

      <Text style={styles.sectionTitle}>Chats</Text>
      <TouchableOpacity style={styles.item}><Text style={styles.text}>Theme</Text></TouchableOpacity>
      <TouchableOpacity style={styles.item}><Text style={styles.text}>Chat Backup</Text></TouchableOpacity>

      <Text style={styles.sectionTitle}>Notifications</Text>
      <TouchableOpacity style={styles.item}><Text style={styles.text}>Message Notifications</Text></TouchableOpacity>

      <Text style={styles.sectionTitle}>DΛRKos Control Panel</Text>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("CertificatesScreen")}>
        <Text style={styles.text}>Certificates & Approvals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("VPNScreen")}>
        <Text style={styles.text}>VPN Apply</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}><Text style={styles.text}>About</Text></TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.powered}>powered by :</Text>
        <Text style={styles.meta}>𝖬𝖾𝗍𝖺 • 𝖠𝗉𝗉𝗅𝖾 • 𝖠𝖻𝖽𝗎𝗅𝗅𝖺𝗁 (𝖣Λ𝖱𝖪)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  sectionTitle: { color: "#25D366", fontSize: 16, marginTop: 20, marginLeft: 12, marginBottom: 6, fontWeight: "600" },
  item: { padding: 14, borderBottomWidth: 0.3, borderBottomColor: "#222" },
  text: { color: "#fff", fontSize: 15 },
  footer: { marginTop: 40, alignItems: "center", justifyContent: "center", padding: 20 },
  powered: { color: "#888", fontSize: 12, marginBottom: 4 },
  meta: { color: "#fff", fontSize: 14, fontWeight: "600" },
});