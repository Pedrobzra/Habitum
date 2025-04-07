import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { VStack } from "@/components/ui/vstack";
import HabitBox from "@/components/HabitBox";
import HabitBtn from "@/components/habitBtn";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          gap: 10,
        }}
      >
        <Text>Sequência Semanal</Text>
        <View style={styles.areaRow}>
          <View style={[styles.circle, { backgroundColor: "#68D5B9" }]}>
            <Text style={[styles.text, { color: "white" }]}>D</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: "#9B9B9B" }]}>
            <Text style={[styles.text, { color: "white" }]}>S</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: "#68D5B9" }]}>
            <Text style={[styles.text, { color: "white" }]}>T</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: "#9B9B9B" }]}>
            <Text style={[styles.text, { color: "white" }]}>Q</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: "#68D5B9" }]}>
            <Text style={[styles.text, { color: "white" }]}>Q</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: "#9B9B9B" }]}>
            <Text style={[styles.text, { color: "white" }]}>S</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: "#68D5B9" }]}>
            <Text style={[styles.text, { color: "white" }]}>S</Text>
          </View>
        </View>
      </View>

      <View style={{ gap: 10 }}>
        <Text>Resumo do dia</Text>
        <HabitBox text="Concluídos">
          <View style={{ flexDirection: "row", gap: 5 }}>
            <ScrollView style={{ height: 150 }}>
              <VStack style={{ gap: 5 }}>
                <HabitBtn text="Tarefa" icon="bed"></HabitBtn>
                <HabitBtn text="Tarefa" icon="bed"></HabitBtn>
                <HabitBtn text="Tarefa" icon="bed"></HabitBtn>
                <HabitBtn text="Tarefa" icon="bed"></HabitBtn>
                <HabitBtn text="Tarefa" icon="bed"></HabitBtn>
                <HabitBtn text="Tarefa" icon="bed"></HabitBtn>
                <HabitBtn text="Tarefa" icon="bed"></HabitBtn>
                <HabitBtn text="Tarefa" icon="bed"></HabitBtn>
              </VStack>
            </ScrollView>

            <View>
              <VStack style={styles.streak}>
                <View>
                  <Text
                    style={{
                      fontSize: 70,
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    15
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    Concluídos
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontWeight: 300,
                    }}
                  >
                    Continue Assim!
                  </Text>
                </View>
              </VStack>
            </View>
          </View>
        </HabitBox>

        <HabitBox text="Pendentes">
          <ScrollView style={{ height: 200 }}>
            <VStack style={{ gap: 5 }}>
              <HabitBtn
                text="Tarefa"
                icon="bed"
                theme="pendentes"
                time="00h00"
                unity="5 horas"
              ></HabitBtn>
              <HabitBtn
                text="Tarefa"
                icon="bed"
                theme="pendentes"
                time="00h00"
                unity="5 horas"
              ></HabitBtn>
              <HabitBtn
                text="Tarefa"
                icon="bed"
                theme="pendentes"
                time="00h00"
                unity="5 horas"
              ></HabitBtn>
              <HabitBtn
                text="Tarefa"
                icon="bed"
                theme="pendentes"
                time="00h00"
                unity="5 horas"
              ></HabitBtn>
              <HabitBtn
                text="Tarefa"
                icon="bed"
                theme="pendentes"
                time="00h00"
                unity="5 horas"
              ></HabitBtn>
              <HabitBtn
                text="Tarefa"
                icon="bed"
                theme="pendentes"
                time="00h00"
                unity="5 horas"
              ></HabitBtn>
              <HabitBtn
                text="Tarefa"
                icon="bed"
                theme="pendentes"
                time="00h00"
                unity="5 horas"
              ></HabitBtn>
              <HabitBtn
                text="Tarefa"
                icon="bed"
                theme="pendentes"
                time="00h00"
                unity="5 horas"
              ></HabitBtn>
            </VStack>
          </ScrollView>
        </HabitBox>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
  },

  container: {
    flex: 1,
    marginTop: 20,
    alignContent: "center",
    backgroundColor: "#F0F0F0",
    gap: 30,
  },

  areaRow: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },

  circle: {
    padding: 5,
    width: 35,
    height: 35,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  streak: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    padding: 20,
    borderRadius: 5,
    height: 150,
  },
});
