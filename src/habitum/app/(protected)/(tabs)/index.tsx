import { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { getHabits } from "@/api/habits/getHabits";
import WeekDayIcon from "@/components/Index/WeekDayIcon";
import ItemsList from "@/components/Index/ItemsList/ItemsList";
import { useAuth } from "@/api/authApi";
import { baseURL } from "@/api/apisettings";
import { Ionicons } from "@expo/vector-icons";
import { getTodos } from "@/api/todo/getTodos";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [habits, setHabits] = useState<any[]>([]);
  const [todos, setTodos] = useState<any[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const { authState } = useAuth();
  const token = authState?.token;

  const handleDeleteHabit = async (habitId: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURL}Habits/${habitId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setHabits((prevHabits) =>
          prevHabits.filter((habit) => habit.id !== habitId)
        );
      } else if (response.status === 401) {
        setErrors({ global: ["Não autorizado a apagar este hábito."] });
      } else if (response.status === 404) {
        setErrors({ global: ["Hábito não encontrado."] });
      } else {
        setErrors({ global: ["Erro ao apagar o hábito."] });
      }
    } catch (error: any) {
      setErrors({ global: [error.message] });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setErrors({}); // Limpa erros anteriores

      try {
        const [todosData, habitsData] = await Promise.all([
          getTodos(),
          getHabits(),
        ]);

        setTodos(todosData);
        setHabits(habitsData);
      } catch (err: any) {
        setErrors({ global: [err.message] });
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <View className="p-2 max-w-[768px] self-center w-full h-full flex flex-col">
      <View className="flex-col gap-3">
        <Text className="font-bold text-xl">Sequência Semanal</Text>
        <View className="flex-row justify-between items-center gap-1 px-3 bg-white p-3 rounded-xl w-full self-center max-w-[400px]">
          <WeekDayIcon text="D" status="missed" />
          <WeekDayIcon text="S" status="done" />
          <WeekDayIcon text="T" status="done" />
          <WeekDayIcon text="Q" status="inactive" />
          <WeekDayIcon text="Q" status="done" />
          <WeekDayIcon text="S" status="pending" isToday />
          <WeekDayIcon text="S" status="pending" />
        </View>
      </View>

      <View className="g-[10px] grow">
        <Text className="font-bold text-xl">Resumo do dia</Text>
        <View className="bg-white p-2 rounded-xl max-h-[166px] grow">
          <View className="flex flex-row gap-2">
            <ScrollView style={{ height: 150 }}>
              <View className="bg-neutral-100 rounded-md p-2 flex flex-row items-center justify-center gap-3">
                <Ionicons name="checkmark-circle" size={24} color={"#10b981"} />
                <Text className="grow text-neutral-600 text-lg font-bold">
                  Exemplo de tarefa concluída!
                </Text>
              </View>
            </ScrollView>

            <View className="bg-emerald-500 p-5 rounded h-[150px] justify-center items-center">
              <View>
                <Text className="text-white text-[70px] font-bold">1</Text>
              </View>
              <View>
                <Text className="text-white text-[15px] font-semibold">
                  Concluídos
                </Text>
              </View>
              <View>
                <Text className="text-white text-[12px] font-light">
                  Continue Assim!
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="grow">
          <Text className="font-bold text-xl">Pendentes</Text>
          <View className="grow">
            {isLoading ? (
              <View className="flex-1 justify-center items-center grow">
                <ActivityIndicator size="large" color="#10b981" />
                <Text className="mt-2 text-neutral-500">
                  Carregando hábitos e tarefas...
                </Text>
              </View>
            ) : habits.length === 0 && todos.length === 0 ? (
              <View className="flex-col justify-center items-center gap-5 grow">
                <Text className="text-center text-neutral-500 text-2xl font-semibold">
                  Nenhum hábito ou tarefa pendente
                </Text>
                <Link
                  className="bg-emerald-400 text-white text-2xl font-semibold p-3 rounded-xl"
                  href="/(protected)/(tabs)/presets"
                >
                  <Text>Criar hábito/tarefa</Text>
                </Link>
              </View>
            ) : (
              <ItemsList
                todos={todos}
                habits={habits}
                onDelete={handleDeleteHabit}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
