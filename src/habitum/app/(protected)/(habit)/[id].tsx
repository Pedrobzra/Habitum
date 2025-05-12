import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { EditHabitAPI } from "@/api/habits/editHabit";
import apiInstance from "@/api/apisettings";
import { useItem } from "@/constants/ItemContext";
import CreateHabit from "./CreateHabit";

export default function EditHabitScreen() {
  const { id } = useLocalSearchParams();
  const habitId = Number(id);
  const router = useRouter();

  const {
    icon,
    setIcon,
    name,
    setName,
    desc,
    setDesc,
    goal,
    setGoal,
    color,
    setColor,
    frequency,
    setFrequency,
    alertHour,
    setAlertHour,
    alertHourTime,
    setAlertHourTime,
    interval,
    setInterval,
    notifications,
    setNotifications,
    activeDays,
    setActiveDays,
  } = useItem();

  const [errorMessages, setErrorMessages] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    if (!habitId || isNaN(habitId)) return;

    const fetchHabit = async () => {
      try {
        const response = await apiInstance.get(`/Habits/${habitId}`);
        const data = response.data as {
          name: string;
          icon: string;
          color: string;
          description: string;
          notifications: boolean;
          frequency: number;
          weekDays: string[];
          interval: number;
          alertHour: boolean;
          alertHourTime: string;
          goal: string;
        };

        setName(data.name);
        setIcon(data.icon);
        setColor(data.color);
        setDesc(data.description);
        setNotifications(data.notifications);
        setFrequency(data.frequency);
        setInterval(data.interval);
        setAlertHour(data.alertHour);
        setAlertHourTime(new Date(data.alertHourTime));
        setGoal(data.goal);

        if (Array.isArray(data.weekDays)) {
          const daysOfWeek = [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
          ];
          const updatedActiveDays = daysOfWeek.map((day) =>
            data.weekDays.includes(day)
          );
          setActiveDays(updatedActiveDays);
        }
      } catch (error) {
        console.error("Erro ao buscar hábito:", error);
        Alert.alert("Erro", "Não foi possível carregar o hábito.");
      }
    };

    fetchHabit();
  }, [habitId]);

  const handleEdit = async () => {
    const daysOfWeek = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];

    const weekDays = activeDays
      .map((active, i) => (active ? daysOfWeek[i] : null))
      .filter(Boolean) as string[];

    await EditHabitAPI(
      habitId,
      {
        name,
        icon,
        color,
        description: desc,
        notifications,
        frequency,
        weekDays,
        interval,
        alertHour,
        alertHourTime,
        goal,
      },
      setErrorMessages
    );
  };

  return (
    <CreateHabit
      buttonText="Salvar"
      onPress={handleEdit}
      habitId={String(habitId)}
    />
  );
}
