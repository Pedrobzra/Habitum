import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { HStack } from "../ui/hstack";
import useItemConsts from "@/constants/Item";

type Props = {
  type: "startDate" | "endDate";
  show: boolean;
  onClose: () => void;
  onDateChange?: (type: "startDate" | "endDate", date: Date) => void;
};

export default function ToDoDateForms({
  type,
  show,
  onClose,
  onDateChange,
}: Props) {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [fullDate, setFullDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<"date" | "time">("date");

  const { setEndDate, setStartDate } = useItemConsts();

  const handlePress = (mode: "date" | "time") => {
    setPickerMode(mode);
    setShowPicker(true);
  };

  const handleChange = (_: any, selectedDate?: Date) => {
    if (!selectedDate) return setShowPicker(false);

    if (pickerMode === "date") setDate(selectedDate);
    if (pickerMode === "time") setTime(selectedDate);

    setShowPicker(false);
  };

  const format = (date?: Date | null) =>
    date
      ? date.toLocaleString([], { hour: "2-digit", minute: "2-digit" })
      : "--:--";

  const mergeDateAndTime = (date: Date, time: Date): Date => {
    const FullDate = new Date(date);
    FullDate.setHours(time.getHours());
    FullDate.setMinutes(time.getMinutes());
    return FullDate;
  };

  useEffect(() => {
    const sendDate = (finalDate: Date) => {
      if (type == "startDate") {
        setStartDate(finalDate);
        onDateChange?.(type, finalDate);
      }
      setEndDate(finalDate);
      onDateChange?.(type, finalDate);
    };

    if (Platform.OS === "ios" && fullDate) {
      sendDate(fullDate);
    } else if (date && time) {
      const finalDate = mergeDateAndTime(date, time);
      sendDate(finalDate);
    }
  }, [date, time, fullDate]);

  return (
    <View>
      {Platform.OS === "ios" ? (
        <Modal animationType="slide" transparent={true} visible={show}>
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.pickerBox}>
                  <DateTimePicker
                    mode="datetime"
                    display="spinner"
                    value={
                      date && time ? mergeDateAndTime(date, time) : new Date()
                    }
                    onChange={(_, selected) => {
                      if (selected) {
                        setFullDate(selected);
                        setDate(selected);
                        setTime(selected);
                      }
                    }}
                  />
                  <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={onClose}
                  >
                    <Text style={styles.confirmText}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      ) : (
        <HStack
          style={{
            padding: 10,
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => handlePress("date")}
            style={{
              backgroundColor: "#F0F0F0",
              padding: 8,
              borderRadius: 5,
            }}
          >
            <Text>{date?.toLocaleDateString() || "Sem data definida"}</Text>
          </TouchableOpacity>
          <Text>às</Text>
          <TouchableOpacity
            onPress={() => handlePress("time")}
            style={{
              backgroundColor: "#F0F0F0",
              padding: 8,
              borderRadius: 5,
            }}
          >
            <Text>{format(time)}</Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              mode={pickerMode}
              value={new Date()}
              is24Hour={true}
              display="default"
              onChange={handleChange}
            />
          )}
        </HStack>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#00000088",
    justifyContent: "flex-end",
  },
  pickerBox: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 50,
    minWidth: "100%",
    alignItems: "center",
  },
  confirmButton: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#1e90ff",
    borderRadius: 8,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
