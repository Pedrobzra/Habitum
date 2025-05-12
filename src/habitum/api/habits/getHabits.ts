import api from "@/api/apisettings";

export async function getHabits() {
  try {
    const res = await api.get("/Habits");
    return res.data;
  } catch (err: any) {
    throw err.response?.data || { message: "Erro ao buscar hábitos" };
  }
}
