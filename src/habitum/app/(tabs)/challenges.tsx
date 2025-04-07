import { View, Text, StyleSheet } from "react-native";

export default function Challenges() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Oi essa é a página de Desafios, onde vc se supera e melhora a cada dia!
      </Text>
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
});
