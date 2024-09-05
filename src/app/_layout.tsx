import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants/colors";
import { useRoute } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
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
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}
