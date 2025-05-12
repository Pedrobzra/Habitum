import { Ionicons } from "@expo/vector-icons";

type Item = {
  id: number;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  desc: string;
  notifications: boolean;
};

export type Habit = Item & {
  frequency?: number;
  weekDays?: string[];
  interval?: Number;
  alertHour?: boolean;
  alertHourTime?: Date;
  goal: string;
};

export type ToDo = Item & {
  startDate?: Date;
  endDate?: Date;
};

export type FullItem = Item & Partial<Habit> & Partial<ToDo>;
