import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PanicScreen() {
  const [active, setActive] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (active && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [active, countdown]);

  const startPanic = () => {
    setActive(true);
    setCountdown(10); // 10 seconds demo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panic Mode</Text>
      {active ? (
        <Text style={styles.countdown}>⏳ {countdown}s</Text>
      ) : (
        <Button title="Activate Panic Mode" color="red" onPress={startPanic} />
      )}
      {countdown === 0 && active && (
        <Text style={styles.done}>⚠️ Data wiped (simulation)</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  title: { color: "#25D366", fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  countdown: { color: "red", fontSize: 28, fontWeight: "bold" },
  done: { color: "#fff", marginTop: 20, fontSize: 18 },
});