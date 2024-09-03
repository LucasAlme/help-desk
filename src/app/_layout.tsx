import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants/colors";
import { useRoute } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarColor: colors.background,
        }}
      >
        <Stack.Screen name="home/index" />
        <Stack.Screen name="createAccount/index" />
      </Stack>
    </>
  );
}
