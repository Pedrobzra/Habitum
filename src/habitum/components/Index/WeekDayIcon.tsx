import { View, Text } from "react-native";

type Props = {
  text: string;
  status: "pending" | "missed" | "done" | "inactive";
  isToday?: boolean;
};

export default function WeekDayIcon({ text, status, isToday }: Props) {
  const baseStyle =
    "relative overflow-hidden flex-row justify-center items-center w-[30px] h-[30px] rounded-full";

  const statusStyles: Record<
    string,
    { bg: string; text: string; cross?: string }
  > = {
    missed: {
      bg: "bg-rose-500",
      text: "text-white",
      cross: "bg-transparent",
    },
    done: {
      bg: "bg-emerald-500",
      text: "text-white",
    },
    inactive: {
      bg: "bg-neutral-200",
      text: "text-neutral-300",
      cross: "bg-neutral-300",
    },
    pending: {
      bg: "bg-neutral-200",
      text: "text-neutral-700",
    },
  };

  const { bg, text: textColor, cross } = statusStyles[status];
  const content = (
    <View className={`${baseStyle} ${bg}`}>
      <Text className={`${textColor} font-bold text-lg`}>{text}</Text>
      {cross && (
        <View className={`absolute w-[60px] h-[3px] ${cross} rotate-45`} />
      )}
    </View>
  );

  return (
    <View
      className="p-[3px] rounded-full"
      style={{ backgroundColor: isToday ? "#3B82F6" : "transparent" }}
    >
      <View
        className="p-[3px] rounded-full"
        style={{ backgroundColor: "white" }}
      >
        {content}
      </View>
    </View>
  );
}
