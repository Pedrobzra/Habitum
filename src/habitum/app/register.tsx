import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import { useState } from "react";
import { useAuth } from "@/api/authApi";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const { onLogin, onRegister } = useAuth();

  const login = async () => {
    const result = await onLogin!(email, password);
    if (result && result.error) {
      alert(result.msg);
    }
  };

  const register = async () => {
    const result = await onRegister!(name, email, password);
    if (result && result.error) {
      alert(result.msg);
    } else {
      await login();
      return router.replace("/(protected)/(auth)/accountsetup");
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
        <View style={{ paddingTop: 90 }}>
          <View style={{ paddingBottom: 50 }}>
            <Text style={styles.title}>Bem vindo ao Habitum.</Text>
            <Text style={{ color: "white", fontWeight: 600 }}>
              Crie sua conta e comece logo sua nova rotina.
            </Text>
          </View>
          <View style={{ gap: 10, paddingBottom: 50 }}>
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              placeholderTextColor="white"
              value={name}
              onChangeText={(value) => {
                setName(value);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              value={email}
              onChangeText={(value) => {
                setEmail(value);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="white"
              value={password}
              onChangeText={(value) => {
                setPassword(value);
              }}
              secureTextEntry
              autoComplete="off"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor="white"
              value={confirmPass}
              onChangeText={(value) => {
                setConfirmPass(value);
              }}
              secureTextEntry
            />
          </View>
          <View style={{ gap: 10, paddingBottom: 50 }}>
            <Button
              text="Cadastre-se"
              onPress={async () => {
                await register();
              }}
            ></Button>
            <Pressable
              style={styles.pressable}
              onPress={() => router.navigate("/login")}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                Já possui um login? Clique aqui.
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
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 40,
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
