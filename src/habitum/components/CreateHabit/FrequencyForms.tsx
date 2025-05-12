import { Text, View, StyleSheet, Pressable } from "react-native";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Button, ButtonIcon } from "../ui/button";
import { AddIcon, RemoveIcon } from "@/components/ui/icon";

type Props = {
  frequency: number;
  activeDays: boolean[];
  setActiveDays: React.Dispatch<React.SetStateAction<boolean[]>>;
  interval: number;
  setInterval: React.Dispatch<React.SetStateAction<number>>;
};

export default function FrequencyForms({
  frequency,
  interval,
  setInterval,
  activeDays,
  setActiveDays,
}: Props) {
  const daysOfWeek = [
    { label: "D", value: "Domingo" },
    { label: "S", value: "Segunda" },
    { label: "T", value: "Terça" },
    { label: "Q", value: "Quarta" },
    { label: "Q", value: "Quinta" },
    { label: "S", value: "Sexta" },
    { label: "S", value: "Sábado" },
  ];

  const selectWeekDays = daysOfWeek.map((daysOfWeek, day) => (
    <Pressable
      key={day}
      onPressIn={() => {
        const setDay = [...activeDays];
        setDay[day] = !setDay[day];
        setActiveDays(setDay);
      }}
      style={[
        styles.circle,
        { backgroundColor: activeDays[day] ? "#68D5B9" : "#9B9B9B" },
      ]}
    >
      <Text style={[styles.text, { color: "white" }]}>{daysOfWeek.label}</Text>
    </Pressable>
  ));

  const removeIntervalDay = () =>
    setInterval((current) => (current > 1 ? current - 1 : 1));

  const addIntervalDay = () =>
    setInterval((current) => (current >= 30 ? 30 : current + 1));

  if (frequency === 1) {
    return <View style={styles.areaRow}>{selectWeekDays}</View>;
  }

  if (frequency === 2) {
    return (
      <Box>
        <HStack
          style={{ gap: 10, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Repetir de..</Text>
          <Button
            size="sm"
            onPress={removeIntervalDay}
            style={{ backgroundColor: "#F0f0f0" }}
          >
            <ButtonIcon as={RemoveIcon} color="black" />
          </Button>
          <Text>{interval}</Text>
          <Button
            size="sm"
            onPress={addIntervalDay}
            style={{ backgroundColor: "#F0f0f0" }}
          >
            <ButtonIcon as={AddIcon} color="black" />
          </Button>
          <Text>em {interval} dia(s)</Text>
        </HStack>
      </Box>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
  },

  areaRow: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
  },

  circle: {
    padding: 5,
    width: 35,
    height: 35,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
