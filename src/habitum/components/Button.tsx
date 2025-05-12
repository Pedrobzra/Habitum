import { StyleSheet, Pressable, Text } from "react-native";

type Props = {
  text: string;
  onPress?: () => void;
  theme?: string;
};

export default function Button({ text, onPress, theme }: Props) {
  if (theme === "profileBtn") {
    return (
      <Pressable style={styles.btnProfile} onPress={onPress}>
        <Text style={styles.textProfile}>{text}</Text>
      </Pressable>
    );
  }
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 700,
    color: "#68D5B9",
  },
  btnProfile: {
    borderRadius: 10,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textProfile: {
    fontWeight: "bold",
  },
});
