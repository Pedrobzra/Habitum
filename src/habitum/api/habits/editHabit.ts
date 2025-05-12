import { router } from "expo-router";
import apiInstance from "../apisettings";

export async function EditHabitAPI(
  id: number,
  data: {
    name: string;
    icon: string;
    color: string;
    description: string;
    notifications: boolean;
    frequency: number;
    weekDays: string[];
    interval: number;
    alertHour: boolean;
    alertHourTime: Date;
    goal: string;
  },
  setErrorMessages: (errors: { [key: string]: string[] }) => void
) {
  try {
    await apiInstance.put(`/Habits/${id}`, {
      id,
      name: data.name,
      icon: data.icon,
      color: data.color,
      description: data.description,
      notifications: data.notifications,
      frequency: data.frequency,
      weekDays: data.weekDays,
      interval: data.interval,
      alertHour: data.alertHour,
      alertHourTime: data.alertHourTime,
      goal: data.goal,
    });

    router.replace("/(protected)/(habit)/SuccessHabit");
  } catch (error: any) {
    const data = error.response.data;

    if (data.errors) {
      setErrorMessages(data.errors);
    } else if (data.message) {
      setErrorMessages({ global: [data.message] });
    }
  }
}
