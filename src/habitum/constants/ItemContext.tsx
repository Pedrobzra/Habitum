import React, { useState, createContext, useContext } from "react";

interface ItemContextType {
  icon: string;
  setIcon: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  desc: string;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  goal: string;
  setGoal: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  frequency: number;
  setFrequency: React.Dispatch<React.SetStateAction<number>>;
  alertHour: boolean;
  setAlertHour: React.Dispatch<React.SetStateAction<boolean>>;
  alertHourTime: Date;
  setAlertHourTime: React.Dispatch<React.SetStateAction<Date>>;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  showAlertPicker: boolean;
  setShowAlertPicker: React.Dispatch<React.SetStateAction<boolean>>;
  showEndDate: boolean;
  setShowEndDate: React.Dispatch<React.SetStateAction<boolean>>;
  showStartDate: boolean;
  setShowStartDate: React.Dispatch<React.SetStateAction<boolean>>;
  isTodo: boolean;
  setIsTodo: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: boolean;
  setNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  interval: number;
  setInterval: React.Dispatch<React.SetStateAction<number>>;
  weekDays: string[];
  setWeekDays: React.Dispatch<React.SetStateAction<string[]>>;
  activeDays: boolean[];
  setActiveDays: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [icon, setIcon] = useState<string>("document-text-outline");
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [color, setColor] = useState<string>("#000000ff");
  const [frequency, setFrequency] = useState<number>(0);
  const [alertHour, setAlertHour] = useState<boolean>(false);
  const [alertHourTime, setAlertHourTime] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showAlertPicker, setShowAlertPicker] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showStartDate, setShowStartDate] = useState(false);
  const [isTodo, setIsTodo] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [interval, setInterval] = useState<number>(0);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [activeDays, setActiveDays] = useState<boolean[]>(Array(7).fill(false));

  const value = {
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
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    showAlertPicker,
    setShowAlertPicker,
    showEndDate,
    setShowEndDate,
    showStartDate,
    setShowStartDate,
    isTodo,
    setIsTodo,
    notifications,
    setNotifications,
    interval,
    setInterval,
    weekDays,
    setWeekDays,
    activeDays,
    setActiveDays,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export const useItem = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItem must be used within an ItemProvider");
  }
  return context;
};
