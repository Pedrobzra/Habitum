import { StyleSheet, TextInput } from "react-native";

type Props = {
  placeh: string;
};

export default function Input({ placeh }: Props) {
  return (
    <>
      <TextInput style={styles.input} placeholder={placeh}></TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "grey",
    fontWeight: "500",
    fontSize: 18,
    width: 340,
    backgroundColor: "transparent",
    alignSelf: "center",
    borderColor: "#D9D9D9",
    borderRadius: 10,
    padding: 20,
    height: 60,
    borderStyle: "solid",
    borderWidth: 2,
  },
});
