import DateTimePicker from "@react-native-community/datetimepicker";
import { useState, useEffect } from "react";
import {
  Platform,
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

type Props = {
  onTimeSelected?: (date: Date) => void;
  show: boolean;
  onClose: () => void;
};

export default function AlertHourForms({
  onTimeSelected,
  show,
  onClose,
}: Props) {
  const [tempDate, setTempDate] = useState(new Date());

  useEffect(() => {
    if (show) setTempDate(new Date());
  }, [show]);

  const handleChange = (_: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      const finalDate = selectedDate || tempDate;
      setTempDate(finalDate);
      onTimeSelected?.(finalDate);
      onClose();
    } else if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const handleConfirmIOS = () => {
    onTimeSelected?.(tempDate);
    onClose();
  };

  if (!show) return null;

  return Platform.OS === "ios" ? (
    <Modal animationType="slide" transparent={true} visible={show}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.pickerBox}>
              <DateTimePicker
                value={tempDate}
                is24Hour={true}
                mode="time"
                display="spinner"
                onChange={handleChange}
                style={{ backgroundColor: "white" }}
              />
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirmIOS}
              >
                <Text style={styles.confirmText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  ) : (
    <DateTimePicker
      value={tempDate}
      is24Hour={true}
      mode="time"
      display="default"
      onChange={handleChange}
    />
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
