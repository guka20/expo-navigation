import { StyleSheet, View, Text } from "react-native";
import { Stack } from "expo-router/stack";
import Settings from "./settings";

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="home" options={{ title: "Home 3" }} />
      <Stack.Screen name="index" options={{ title: "Index 23" }} />
      <Stack.Screen name="settings" options={{ title: "Settings 2" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "red",
  },
});
