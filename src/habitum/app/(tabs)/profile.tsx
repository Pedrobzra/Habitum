import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Challenges() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oi essa é a página de Meu perfil!</Text>
      <Link
        style={[
          styles.text,
          { textDecorationLine: "underline", color: "#a8a8a8" },
        ]}
        href={"/(auth)/start"}
      >
        Clique aqui para ir a tela inicial e vizualizar Login e Cadastro!
      </Link>
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
