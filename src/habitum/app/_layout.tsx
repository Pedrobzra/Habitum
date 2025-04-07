import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/start" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ title: "Login" }} />
        <Stack.Screen name="(auth)/register" options={{ title: "Cadastro" }} />
        <Stack.Screen
          name="(auth)/selectImg"
          options={{
            presentation: "modal",
            title: "Selecionar Foto",
          }}
        />
        <Stack.Screen
          name="(auth)/accountsetup"
          options={{ title: "Configuração da Conta" }}
        />
        <Stack.Screen
          name="(habit)/createhabit"
          options={{ title: "Crie um Hábito" }}
        />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </GluestackUIProvider>
  );
}
