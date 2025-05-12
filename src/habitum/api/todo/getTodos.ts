import api from "@/api/apisettings";

export async function getTodos() {
  try {
    const res = await api.get("/Todos");
    return res.data;
  } catch (err: any) {
    throw err.response?.data || { message: "Erro ao buscar tarefas" };
  }
}
