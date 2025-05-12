import { AuthProvider } from "@/api/authApi";
import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="register"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="start"
          options={{ headerShown: false, animation: "none" }}
        ></Stack.Screen>
      </Stack>
    </AuthProvider>
  );
}
