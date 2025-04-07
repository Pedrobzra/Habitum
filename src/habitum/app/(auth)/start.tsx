import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

const LogoImg = require("../../assets/images/logo.png");

export default function Start() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#68D5B9", "#8FE5B9"]}
        start={{ x: 0, y: 0 }}
        style={styles.background}
      />
      <View
        style={{
          flex: 10,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image source={LogoImg} style={styles.logo} />
        <Text style={styles.text}>
          Construa hábitos. Alcance seus objetivos.
        </Text>
        <View style={{ gap: 20 }}>
          <Link style={styles.login} href={"/login"}>
            Login
          </Link>
          <Link style={styles.register} href={"/register"}>
            Cadastre-se
          </Link>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text style={styles.copyright}>
          Copyright © 2025 Habitum. All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: 600,
    marginBottom: 20,
  },
  login: {
    backgroundColor: "white",
    padding: 20,
    width: 340,
    textAlign: "center",
    borderRadius: 15,
    fontSize: 18,
  },
  register: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 3,
    padding: 20,
    width: 340,
    textAlign: "center",
    borderRadius: 15,
    color: "white",
    fontSize: 18,
  },
  logo: {
    width: 350,
    height: 350,
    borderRadius: 20,
  },
  copyright: {
    fontSize: 14,
    color: "white",
    padding: 20,
  },
});
