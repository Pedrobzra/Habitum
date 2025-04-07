import { StyleSheet, Pressable, Text } from "react-native";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    paddingHorizontal: 20,
    maxWidth: 340,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#68D5B9",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
