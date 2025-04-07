import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import Input from "@/components/Input";

const googleimg = require("../../assets/images/google.png");
const faceimg = require("../../assets/images/facebook.png");

export default function Register() {
  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView keyboardShouldPersistTaps="handled">
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
              Bem-vindo! Sua jornada começa aqui.
            </Text>

            <TextInput style={styles.input} placeholder="Digite seu e-mail" />
            <View>
              <TextInput style={styles.input} placeholder="Digite sua senha" />
            </View>
            <View>
              <TextInput style={styles.input} placeholder="Repita sua senha" />
            </View>
            <View>
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 13,
                }}
              >
                Ao se cadastrar, você concorda com nossos{" "}
                <Link
                  style={{ color: "blue", textDecorationLine: "underline" }}
                  href="https://youtu.be/HLQ1cK9Edhc?t=17"
                >
                  {" "}
                  Termos de Uso
                </Link>{" "}
                e{" "}
                <Link
                  style={{ color: "blue", textDecorationLine: "underline" }}
                  href="https://youtu.be/dQw4w9WgXcQ?si=lKCppNKL0mfiIaca"
                >
                  {" "}
                  Política de Privacidade
                </Link>
                .
              </Text>
            </View>

            <Pressable style={styles.login}>
              <Text style={{ color: "white" }}>Cadastrar</Text>
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
              Já tem uma conta?
              <Link
                style={{ color: "blue", textDecorationLine: "underline" }}
                href={"/(auth)/login"}
              >
                {" "}
                Faça login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
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
