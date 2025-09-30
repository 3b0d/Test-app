import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/splash.png")} style={styles.logo} />
      <Text style={styles.text}>Meta · Apple · Abdullah (DΛRK)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  logo: { width: 120, height: 120, marginBottom: 20 },
  text: { color: "#25D366", fontSize: 16 }
});