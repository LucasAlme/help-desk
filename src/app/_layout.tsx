import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants/colors";

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
      </Stack>
    </>
  );
}
