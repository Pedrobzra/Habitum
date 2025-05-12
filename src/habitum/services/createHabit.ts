import AsyncStorage from "@react-native-async-storage/async-storage";
import { FullItem } from "@/types/ItemTypes"

const habitDraft = "habit-draft";

export async function updateHabitDraft(update: FullItem) {
    try {
        const draft = await getHabitDraft();
        const newDraft = {
            ...draft,
            ...update,
        };
        await saveHabitDraft(newDraft);
    } catch (error) {
        console.error("Erro ao atualizar o item:", error)
    }
}

export async function saveHabitDraft(data: any) {
    try {
        await AsyncStorage.setItem(habitDraft, JSON.stringify(data));
        console.log(data)
    } catch (error) {
        console.error("Erro ao salvar rascunho do hábito:", error);
    }
}

export async function getHabitDraft() {
    try {
        const data = await AsyncStorage.getItem(habitDraft);
        if (data) {
            return JSON.parse(data)
        }
        return null;
    } catch (error) {
        console.error("Erro ao recuperar rascunho do hábito:", error);
        return null;
    }
}

export async function clearHabitDraft() {
    try {
        await AsyncStorage.removeItem(habitDraft);
    } catch (error) {
        console.error("Erro ao limpar rascunho do hábito:", error);
    }
}
