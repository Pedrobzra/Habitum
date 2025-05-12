import { StyleSheet, View, Text } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { ChevronRightIcon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { router } from "expo-router";

type IoniconsKeys = keyof typeof Ionicons.glyphMap;
type FontAwesome6Keys = keyof typeof FontAwesome6.glyphMap;

type Props = {
  text: string;
  icon: IoniconsKeys | FontAwesome6Keys;
  color?: string;
  theme?: string;
  time?: string;
  unity?: string;
  onPress?: () => void;
};

export default function HabitBtn({
  text,
  icon,
  color,
  theme,
  time,
  unity,
  onPress,
}: Props) {
  if (theme === "presets") {
    return (
      <View>
        <Button
          action="secondary"
          style={{ backgroundColor: "#F0F0F0" }}
          onPress={() => router.push("/(habit)/CreateHabit")}
        >
          <HStack style={styles.elementsBtn}>
            <HStack style={styles.buttonText}>
              <View style={styles.buttonIcon}>
                <FontAwesome6
                  name={icon as FontAwesome6Keys}
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
          onLongPress={onPress}
          action="secondary"
          style={{
            backgroundColor: "#f0f0f0",
            height: 50,
          }}
        >
          <HStack style={styles.elementsBtn}>
            <HStack style={styles.buttonText}>
              <View style={styles.buttonIcon}>
                <Ionicons name={icon as IoniconsKeys} size={18} color={color} />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>{text}</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 12, color: "#9B9B9B" }}>{time}</Text>
                  <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                    {unity}
                  </Text>
                </View>
              </View>
            </HStack>
            <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
              Segure para Editar
            </Text>
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
              <FontAwesome6
                name={icon as FontAwesome6Keys}
                size={18}
              ></FontAwesome6>
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
