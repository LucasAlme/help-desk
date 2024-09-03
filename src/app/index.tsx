import React, { useEffect, useState } from "react";

import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  useEffect(() => {
    if (!loading) {
      router.replace("/login");
    }
  }, [loading]);
  return (
    <>
      {
        // TODO: SPLASH SCREEN ANIMATED
      }
      {loading && (
        <View>
          <Text>Todo: SPLASH SCREEN ANIMATED</Text>
        </View>
      )}
    </>
  );
}
