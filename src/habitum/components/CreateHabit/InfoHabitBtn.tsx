import { View, Text, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { ChevronRightIcon } from "@/components/ui/icon";
import { router } from "expo-router";

type Props = {
  icon: string;
  text: string;
  preview?: string | JSX.Element;
  color?: any;
  type?: "modal" | "switch" | "none" | "alertHour";
  children?: React.ReactNode;
  onPress?: () => void;
  alertHourTime?: Date;
  startDate?: Date;
  endDate?: Date;
};

export default function InfoHabitBtn({
  icon,
  text,
  preview,
  color,
  type,
  children,
  onPress,
  alertHourTime,
  startDate,
  endDate,
}: Props) {
  const formatTime = (value?: Date) => {
    if (!value) return "Sem horário definido";

    const date = value instanceof Date ? value : new Date(value);

    if (isNaN(date.getTime())) return "Horário inválido";

    if (alertHourTime) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else
      return date.toLocaleTimeString([], {
        day: "numeric",
        month: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
  };

  const typeBtn = () => {
    switch (type) {
      case "modal":
        return (
          <>
            <Text>{preview}</Text>
            <ButtonIcon as={ChevronRightIcon} />
          </>
        );
      case "none":
        return <>{preview}</>;
      case "alertHour":
        return (
          <>
            <Text>
              {alertHourTime
                ? formatTime(alertHourTime)
                : startDate
                ? formatTime(startDate)
                : endDate
                ? formatTime(endDate)
                : "Sem horário definido"}
            </Text>
            <ButtonIcon as={ChevronRightIcon} />
          </>
        );
      default:
        return null;
    }
  };

  const handlePress = () => {
    if (type === "modal") {
      router.push(`/(habit)/IconModal` as never);
    } else if (type === "alertHour" && onPress) {
      onPress();
    }
  };

  return (
    <View>
      <Button
        action="secondary"
        style={{ backgroundColor: "#F0F0F0" }}
        onPress={handlePress}
      >
        <HStack style={styles.elementsBtn}>
          <HStack style={styles.buttonText}>
            <View style={styles.buttonIcon}>
              <FontAwesome6 name={icon} size={18} color={color} />
            </View>
            <ButtonText>{text}</ButtonText>
          </HStack>
          {typeBtn()}
        </HStack>
      </Button>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  elementsBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    columnGap: 10,
    textAlign: "left",
  },

  buttonIcon: {
    alignSelf: "center",
    height: 20,
    width: 30,
  },
});
