// screens/HomeTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// شاشات التبويبات
import ChatsScreen from "./tabs/ChatsScreen";
import CallsScreen from "./tabs/CallsScreen";
import UpdatesScreen from "./tabs/UpdatesScreen";
import CommunitiesScreen from "./tabs/CommunitiesScreen";
import SettingsScreen from "./tabs/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#25D366", // WhatsApp الأخضر
        tabBarInactiveTintColor: "#8E8E93", // رمادي
        tabBarStyle: {
          backgroundColor: "#1F1F1F",
          borderTopColor: "#2C2C2E",
          borderTopWidth: 0.33,
        },
        headerStyle: {
          backgroundColor: "#1F1F1F",
          shadowColor: "transparent",
          elevation: 0,
          borderBottomWidth: 0.33,
          borderBottomColor: "#2C2C2E",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 17,
          color: "#FFFFFF",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Chats") iconName = "chatbubble";
          else if (route.name === "Calls") iconName = "call";
          else if (route.name === "Updates") iconName = "sparkles";
          else if (route.name === "Communities") iconName = "people";
          else if (route.name === "Settings") iconName = "settings";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Updates" component={UpdatesScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Communities" component={CommunitiesScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}