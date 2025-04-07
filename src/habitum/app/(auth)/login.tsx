import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { Image } from "expo-image";

const googleimg = require("../../assets/images/google.png");
const faceimg = require("../../assets/images/facebook.png");

export default function Login() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          gap: 20,
          maxWidth: 340,
        }}
      >
        <Text style={styles.title}>
          Bem-vindo de volta! Sua jornada continua aqui.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail ou usuário"
        />
        <View>
          <TextInput style={styles.input} placeholder="Digite sua senha" />
          <Text
            style={{
              paddingTop: 10,
              fontSize: 13,
              textDecorationLine: "underline",
            }}
          >
            Esqueceu a senha?
          </Text>
        </View>

        <Pressable
          style={styles.login}
          onPress={() => {
            router.push("/(tabs)");
          }}
        >
          <Text style={{ color: "white" }}>Logar</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 60,
        }}
      >
        <Pressable style={styles.fakelogin}>
          <Image source={googleimg} style={{ width: 30, height: 30 }} />
        </Pressable>
        <Pressable style={styles.fakelogin}>
          <Image source={faceimg} style={{ width: 30, height: 30 }} />
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 30,
        }}
      >
        <Text>
          Não tem uma conta?
          <Link
            style={{ color: "blue", textDecorationLine: "underline" }}
            href={"/(auth)/register"}
          >
            {" "}
            Registre-se
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 16,
    textAlign: "left",
  },
  input: {
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
  login: {
    width: 340,
    alignSelf: "center",
    backgroundColor: "#007AFF",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    // Android
    elevation: 5,
    //ios
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fakelogin: {
    width: 100,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

    // Android
    elevation: 5,
    //ios
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
