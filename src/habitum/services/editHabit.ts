import apiInstance from "@/api/apisettings";

export async function getHabitById(id: number) {
  try {
    const response = await apiInstance.get(`/Habits/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar hábito por ID:", error);
    throw error;
  }
}
