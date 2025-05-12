import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import Button from "@/components/Button";
import StartHabitOpt from "@/components/StartHabitOpt";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function AccountSetup() {
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
      <View style={{ paddingTop: 40 }}>
        <Text style={[styles.title]}>Ótimo!</Text>
        <Text style={{ color: "white", fontWeight: 600 }}>
          Falta pouco para finalizar seu cadastro.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VStack space="2xl">
          <HStack space="md">
            <Pressable
              onPress={() => router.push("/(protected)/(auth)/selectImg")}
            >
              <View style={styles.avatarWrapper}>
                <Avatar style={styles.imgContainer}>
                  <AvatarImage
                    style={styles.imgPerfil}
                    source={require("@/assets/images/profilePictures/pp-default.png")}
                  />
                </Avatar>
                <Feather
                  name="camera"
                  size={20}
                  color="white"
                  style={styles.cameraIcon}
                />
              </View>
            </Pressable>

            <VStack style={{ justifyContent: "center" }}>
              <Heading style={{ color: "white" }} size="xl">
                Ronald Richards
              </Heading>
              <Text style={{ color: "white" }}>RonaldRichards@email.com</Text>
            </VStack>
          </HStack>
        </VStack>
      </View>

      <View style={styles.startHabitSelect}>
        <Text
          style={{
            color: "white",
            fontWeight: 800,
            fontSize: 20,
            padding: 5,
          }}
        >
          O que acha de já adicionar novos hábitos na sua rotina?
        </Text>
        <StartHabitOpt
          description="Beber 2 litros de água"
          source={require("@/assets/images/startHabitOptImg/drink.png")}
        />
        <StartHabitOpt
          description="Correr 3 quilômetros"
          source={require("@/assets/images/startHabitOptImg/run.png")}
        />
        <StartHabitOpt
          description="Dormir ás 21h"
          source={require("@/assets/images/startHabitOptImg/sleep.png")}
        />
        <StartHabitOpt
          description="Não comer açucar"
          source={require("@/assets/images/startHabitOptImg/nosugar.png")}
        />
      </View>
      <Button
        text={"Finalizar cadastro"}
        onPress={() => router.replace("/")}
      ></Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 50,
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
  startHabitSelect: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  imgPerfil: { width: "100%", height: "100%", resizeMode: "cover" },
  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "white",
  },
  avatarWrapper: {
    position: "relative",
    width: 100,
    height: 100,
  },
  cameraIcon: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#68D5B9",
    padding: 5,
    borderRadius: 999,
  },
});
