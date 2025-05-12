import { View, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Switch } from "@/components/ui/switch";
import colors from "tailwindcss/colors";
import React, { useState } from "react";
import { updateHabitDraft } from "@/services/createHabit";
import useItemConsts from "@/constants/Item";

type Props = {
  icon: string;
  text: string;
  color?: any;
  type?: "notifications" | "todo" | "alerthour";
  children?: React.ReactNode;
  onChange?: (value: boolean) => void;
};

export default function InfoHabitBtn({
  icon,
  text,
  color,
  children,
  type,
  onChange,
}: Props) {
  const { setNotifications, alertHour, setAlertHour } = useItemConsts();
  const [toDo, setTodo] = useState(false);

  return (
    <View>
      <Button action="secondary" style={{ backgroundColor: "#F0F0F0" }}>
        <HStack style={styles.elementsBtn}>
          <HStack style={styles.buttonText}>
            <View style={styles.buttonIcon}>
              <FontAwesome6 name={icon} size={18} color={color} />
            </View>
            <ButtonText>{text}</ButtonText>
          </HStack>
          {type === "notifications" ? (
            <Switch
              size="sm"
              trackColor={{
                false: colors.neutral[300],
                true: colors.neutral[600],
              }}
              thumbColor={colors.neutral[50]}
              onValueChange={(value) => {
                setNotifications(value);
                onChange?.(value);
              }}
            />
          ) : type === "todo" ? (
            <Switch
              size="sm"
              trackColor={{
                false: colors.neutral[300],
                true: colors.neutral[600],
              }}
              isDisabled={false}
              thumbColor={colors.neutral[50]}
              value={toDo}
              onValueChange={(value) => {
                setTodo(value);
                onChange?.(value);
              }}
            />
          ) : (
            <Switch
              size="sm"
              trackColor={{
                false: colors.neutral[300],
                true: colors.neutral[600],
              }}
              isDisabled={false}
              thumbColor={colors.neutral[50]}
              value={alertHour}
              onValueChange={(value) => {
                setAlertHour(value);
                onChange?.(value);
                updateHabitDraft({ alertHour: value });
              }}
            />
          )}
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
