import { View, Text, StyleSheet } from "react-native";

export default function Community() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Oi essa é a página da Comunidade, onde vc encontra seus amigos e compete
        contra eles
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
