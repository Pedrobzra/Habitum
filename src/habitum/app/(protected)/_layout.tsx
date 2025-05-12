import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/api/authApi";

export default function ProtectedLayout() {
  return (
    <GluestackUIProvider mode="light">
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(auth)/selectImg"
            options={{
              presentation: "modal",
              title: "Selecionar Foto",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="(auth)/accountsetup"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(habit)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          <Stack.Screen
            name="(habit)/IconModal"
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
              title: "Escolha um Ícone",
              headerShown: true,
            }}
          />
        </Stack>
      </AuthProvider>
    </GluestackUIProvider>
  );
}
