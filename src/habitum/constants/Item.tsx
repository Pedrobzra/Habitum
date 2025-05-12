import { useState } from "react";

export default function useItemConsts() {
  const [icon, setIcon] = useState<string>("document-text-outline");
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [color, setColor] = useState<string>("#000000ff");
  const [frequency, setFrequency] = useState<number>(0); // 0: Diário, 1: Semanal, 2: Interval//
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

  return {
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
}
