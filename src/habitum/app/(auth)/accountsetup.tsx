import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import ProfilePictureSelect from "@/components/ProfilePictureSelect";
import Input from "@/components/Input";
import Button from "@/components/Button";
import StartHabitOpt from "@/components/StartHabitOpt";

export default function AccountSetup() {
  const { width } = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior="height" style={styles.page}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <Text
            style={[
              styles.title,
              { alignSelf: width > 600 ? "center" : "flex-start" },
            ]}
          >
            Ótimo! Agora, termine a configuração de sua conta 😁
          </Text>
        </View>
        <ProfilePictureSelect />
        <Input placeh="Digite seu nome aqui" />
        <Text
          style={[
            styles.subTitle,
            { alignSelf: width > 600 ? "center" : "flex-start" },
          ]}
        >
          Gostaria de já adicionar algum(s) destes{" "}
          <Text style={[styles.c_green, ,]}>hábitos</Text> diários?
        </Text>
        <View style={styles.startHabitSelect}>
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
        <Button text={"Prosseguir"}></Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
  },
  c_green: {
    color: "#68D5B9",
    fontWeight: "bold",
  },
  startHabitSelect: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 40,
  },
});
