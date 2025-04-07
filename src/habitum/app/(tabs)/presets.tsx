import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { AddIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import HabitBtn from "@/components/habitBtn";
import { router } from "expo-router";
import HabitBox from "@/components/HabitBox";

export default function Presets() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }} style={{ flex: 1 }}>
      <Button
        style={styles.button}
        size="lg"
        variant="solid"
        action="primary"
        onPress={() => router.push("/(habit)/createhabit")}
      >
        <HStack style={styles.elementsBtn}>
          <ButtonText>Crie um novo hábito</ButtonText>
          <ButtonIcon as={AddIcon} />
        </HStack>
      </Button>

      <Box style={styles.Boxes}>
        <View style={{ flexDirection: "column" }}>
          <HabitBox text="Saúde e Bem-estar">
            <HabitBtn
              text="Dormir cedo"
              icon="bed"
              color="darkblue"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Beber água"
              icon="glass-water"
              color="lightblue"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Correr"
              icon="person-running"
              color="green"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Tomar Banho"
              icon="shower"
              color="orange"
              theme="presets"
            ></HabitBtn>
          </HabitBox>

          <HabitBox text="Desenvolvimento Pessoal">
            <HabitBtn
              text="Orar"
              icon="person-praying"
              color="grey"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Ler um livro"
              icon="book"
              color="blue"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Menos tempo de tela"
              icon="mobile"
              color="red"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Fazer reciclagem"
              icon="recycle"
              color="darkgreen"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Ver um Filme"
              icon="film"
              color="black"
              theme="presets"
            ></HabitBtn>
          </HabitBox>

          <HabitBox text="Finanças">
            <HabitBtn
              text="Acompanhe seus gastos"
              icon="cash-register"
              color="gold"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Faça um fundo de reserva"
              icon="piggy-bank"
              color="pink"
              theme="presets"
            ></HabitBtn>
            <HabitBtn
              text="Aprender sobre finanças"
              icon="book"
              color="lightgreen"
              theme="presets"
            ></HabitBtn>
          </HabitBox>
        </View>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignContent: "center",
  },

  elementsBtn: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    alignSelf: "flex-start",
  },

  buttonText: {
    flexGrow: 1,
    columnGap: 10,
    alignSelf: "flex-start",
    textAlign: "left",
  },

  Boxes: {
    paddingTop: 15,
    justifyContent: "flex-start",
  },
});
