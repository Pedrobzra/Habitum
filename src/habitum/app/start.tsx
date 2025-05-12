import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";

const LogoImg = require("../assets/images/logo.png");

export default function Start() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#68D5B9", "#8FE5B9"]}
        start={{ x: 0, y: 0 }}
        style={styles.background}
      />
      <View style={{ paddingTop: 50 }}>
        <View
          style={{
            flex: 10,
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Image source={LogoImg} style={styles.logo} />
          <Text style={styles.text}>
            Construa hábitos. Alcance seus objetivos.
          </Text>
          <View style={{ gap: 20 }}>
            <Button
              text="Entrar"
              onPress={() => router.replace("/login")}
            ></Button>
            <Pressable
              style={styles.register}
              onPress={() => router.replace("/register")}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                Crie sua conta
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={styles.copyright}>
            Copyright © 2025 Habitum. All rights reserved.
          </Text>
        </View>
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
  register: {
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
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  copyright: {
    fontSize: 14,
    color: "white",
    padding: 20,
  },
});
