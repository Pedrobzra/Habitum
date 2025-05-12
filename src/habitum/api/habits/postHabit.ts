import { router } from "expo-router";
import api from "../apisettings";

export default async function postHabit(
  habit: {
    name: string;
    icon: string;
    color: string;
    desc: string;
    notifications: boolean;
    frequency: number;
    weekDays: string[];
    interval: number;
    alertHour: boolean;
    alertHourTime: Date;
    goal: string;
  },
  setErrors: (errors: { [key: string]: string[] }) => void
) {
  try {
    await api.post("/Habits", {
      name: habit.name,
      icon: habit.icon,
      color: habit.color,
      description: habit.desc,
      notifications: habit.notifications,
      frequency: habit.frequency,
      weekDays: habit.weekDays,
      interval: habit.interval,
      alertHour: habit.alertHour,
      alertHourTime: habit.alertHourTime,
      goal: habit.goal,
    });

    router.replace("/(protected)/(habit)/SuccessHabit");
  } catch (err: any) {
    const { errors, message } = err.response?.data || {};
    setErrors(errors || { global: [message || "Erro desconhecido"] });
  }
}
