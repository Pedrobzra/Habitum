import { StyleSheet, View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { CheckIcon, ChevronRightIcon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { router } from "expo-router";
import { useRoute } from "@react-navigation/native";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
} from "@/components/ui/checkbox";

type Props = {
  text: string;
  icon: string;
  color?: string;
  theme?: string;
  time?: string;
  unity?: string;
};

export default function HabitBtn({
  text,
  icon,
  color,
  theme,
  time,
  unity,
}: Props) {
  if (theme === "presets") {
    return (
      <View>
        <Button
          action="secondary"
          style={{ backgroundColor: "#F0F0F0" }}
          onPress={() => router.push("/(habit)/createhabit")}
        >
          <HStack style={styles.elementsBtn}>
            <HStack style={styles.buttonText}>
              <View style={styles.buttonIcon}>
                <FontAwesome6
                  name={icon}
                  size={18}
                  color={color}
                ></FontAwesome6>
              </View>
              <ButtonText>{text}</ButtonText>
            </HStack>
            <ButtonIcon as={ChevronRightIcon} />
          </HStack>
        </Button>
      </View>
    );
  }

  if (theme === "pendentes") {
    return (
      <View>
        <Button
          action="secondary"
          style={{ backgroundColor: "#F0F0F0", height: 50 }}
        >
          <HStack style={styles.elementsBtn}>
            <HStack style={styles.buttonText}>
              <View style={styles.buttonIcon}>
                <FontAwesome6
                  name={icon}
                  size={18}
                  color={color}
                ></FontAwesome6>
              </View>
              <View style={{ flexDirection: "column" }}>
                <ButtonText>{text}</ButtonText>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 12, color: "#9B9B9B" }}>{time}</Text>
                  <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                    {unity}
                  </Text>
                </View>
              </View>
            </HStack>
            <Checkbox size="lg" value="">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
            </Checkbox>
          </HStack>
        </Button>
      </View>
    );
  }
  return (
    <View>
      <Button action="secondary" style={{ backgroundColor: "#F0F0F0" }}>
        <HStack style={styles.elementsBtn}>
          <HStack style={styles.buttonText}>
            <View style={styles.buttonIcon}>
              <FontAwesome6 name={icon} size={18}></FontAwesome6>
            </View>
            <ButtonText>{text}</ButtonText>
          </HStack>
        </HStack>
      </Button>
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
    alignSelf: "flex-start",
    textAlign: "left",
  },

  buttonIcon: {
    alignSelf: "center",
    height: 20,
    width: 30,
  },
});
