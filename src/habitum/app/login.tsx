import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import { useState } from "react";
import { useAuth } from "@/api/authApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();

  const login = async () => {
    const result = await onLogin!(email, password);
    if (result) {
      return router.replace("/");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <LinearGradient
        colors={["#68D5B9", "#8FE5B9"]}
        start={{ x: 0, y: 0 }}
        style={styles.background}
      />
      <TouchableWithoutFeedback
        onPress={Platform.OS !== "web" ? Keyboard.dismiss : undefined}
      >
        <View>
          <View style={{ paddingBottom: 50 }}>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={{ color: "white", fontWeight: 600 }}>
              Entre na sua conta ou vá para o cadastro.
            </Text>
          </View>
          <View style={{ gap: 10, paddingBottom: 50 }}>
            <TextInput
              style={styles.input}
              placeholder="Digite aqui seu email..."
              placeholderTextColor="white"
              value={email}
              keyboardType="email-address"
              onChangeText={(text: string) => {
                setEmail(text);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite aqui sua senha..."
              placeholderTextColor="white"
              value={password}
              onChangeText={(text: string) => {
                setPassword(text);
              }}
              secureTextEntry={true}
            />
          </View>
          <View style={{ gap: 10 }}>
            <Button
              text="Entrar"
              onPress={async () => {
                await login();
              }}
            ></Button>
            <Pressable
              style={styles.pressable}
              onPress={() => router.navigate("/register")}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                Não possui um login? Clique aqui.
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  title: {
    fontWeight: 800,
    fontSize: 50,
    color: "white",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    padding: 10,
    color: "white",
    fontSize: 16,
  },
  pressable: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "transparent",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
