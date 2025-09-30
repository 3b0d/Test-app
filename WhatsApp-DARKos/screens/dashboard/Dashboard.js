import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Shield, FileText, Image as ImageIcon, AlertTriangle, User } from "lucide-react-native";

// استيراد الشاشات
import VPNScreen from "./VPNScreen";
import LogsScreen from "./LogsScreen";
import GalleryScreen from "./GalleryScreen";
import PanicScreen from "./PanicScreen";

const Tab = createBottomTabNavigator();

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 Profile</Text>
      <Text style={styles.textSmall}>User: @3bod</Text>
      <Text style={styles.textSmall}>Developer: Abdullah (DΛRK)</Text>
    </View>
  );
}

export default function Dashboard() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#000" },
          tabBarActiveTintColor: "#25D366",
          tabBarInactiveTintColor: "#888",
        }}
      >
        <Tab.Screen
          name="VPN"
          component={VPNScreen}
          options={{ tabBarIcon: ({ color }) => <Shield color={color} /> }}
        />
        <Tab.Screen
          name="Logs"
          component={LogsScreen}
          options={{ tabBarIcon: ({ color }) => <FileText color={color} /> }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{ tabBarIcon: ({ color }) => <ImageIcon color={color} /> }}
        />
        <Tab.Screen
          name="Panic"
          component={PanicScreen}
          options={{ tabBarIcon: ({ color }) => <AlertTriangle color={color} /> }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarIcon: ({ color }) => <User color={color} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" },
  text: { color: "#25D366", fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  textSmall: { color: "#fff", fontSize: 16 },
});