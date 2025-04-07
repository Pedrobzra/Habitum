import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <View>
      <Text style={styles.text}>Se perdeu? nao se desespere volte agora</Text>
      <Link style={styles.link} href={"/(tabs)"}>
        Voltar para a Tela Inicial
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
  },
  link: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
