import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Shield, FileText, User } from "lucide-react-native";

// استدعاء الشاشات
import VPNScreen from "./VPNScreen";
import CertificatesScreen from "./CertificatesScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

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
          name="Certificates"
          component={CertificatesScreen}
          options={{ tabBarIcon: ({ color }) => <FileText color={color} /> }}
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