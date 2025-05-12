import { Stack } from "expo-router";
import { ItemProvider } from "@/constants/ItemContext";

export default function HabitLayout() {
  return (
    <ItemProvider>
      <Stack>
        <Stack.Screen
          name="CreateHabit"
          options={{
            title: "Criar Hábito",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            title: "Editar Hábito",
            headerShown: true,
          }}
        />
        <Stack.Screen name="SuccessHabit" options={{ headerShown: false }} />
      </Stack>
    </ItemProvider>
  );
}
