import { router } from "expo-router";
import api from "../apisettings";

export default async function postTodo(
  todo: {
    name: string;
    icon: string;
    color: string;
    desc: string;
    notifications: boolean;
    startDate: Date;
    endDate: Date;
  },
  setErrors: (errors: { [key: string]: string[] }) => void
) {
  try {
    await api.post("/ToDos", {
      name: todo.name,
      icon: todo.icon,
      color: todo.color,
      description: todo.desc,
      notifications: todo.notifications,
      startDate: todo.startDate,
      endDate: todo.endDate,
    });

    router.replace("/(protected)/(habit)/SuccessHabit");
  } catch (err: any) {
    const { errors, message } = err.response?.data || {};
    setErrors(errors || { global: [message || "Erro desconhecido"] });
  }
}
