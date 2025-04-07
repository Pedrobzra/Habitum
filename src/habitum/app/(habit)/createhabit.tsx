import { View, Text, StyleSheet } from "react-native";

export default function CreateHabit() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui vc cria Hábitos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  link: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
