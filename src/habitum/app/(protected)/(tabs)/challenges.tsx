import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import ProgressBar from "@/components/ProgressBar";
import HabitBox from "@/components/HabitBox";

export default function Challenges() {
  return (
    <ScrollView style={{ flex: 1, padding: 20, gap: 10 }}>
      <HabitBox text="Rank">
        <View style={styles.areaRow}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("@/assets/images/ranks/diamond.png")}
          />
          <View style={{ gap: 10, flex: 1 }}>
            <Text style={styles.textBox}>Diamante</Text>
            <ProgressBar min={700} max={1200} current={950} height={10} />
          </View>
        </View>
      </HabitBox>
      <HabitBox text="Desafios Diários">
        <View style={[styles.areaRow, { flex: 1 }]}>
          <View style={styles.doneChallenge}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("@/assets/images/icons/white-check.png")}
            />
            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
              Fazer {"\n"}3 de {"\n"} sequência
            </Text>
          </View>
          <View style={styles.doneChallenge}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("@/assets/images/icons/white-check.png")}
            />
            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
              Fazer {"\n"}5 de {"\n"} sequência
            </Text>
          </View>
          <View style={styles.doneChallenge}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("@/assets/images/icons/white-check.png")}
            />
            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
              Fazer {"\n"}7 de {"\n"} sequência
            </Text>
          </View>
        </View>
      </HabitBox>
      <HabitBox text="Desafios Semanais">
        <View style={[styles.areaRow, { flex: 1 }]}>
          <View style={styles.doneChallenge}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("@/assets/images/icons/white-check.png")}
            />
            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
              1 {"\n"} semana {"\n"} em {"\n"} sequência
            </Text>
          </View>
          <View style={styles.doneChallenge}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("@/assets/images/icons/white-check.png")}
            />
            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
              2 {"\n"} semanas {"\n"} em {"\n"} sequência
            </Text>
          </View>
          <View style={styles.undoneChallenge}>
            <Image
              style={{ width: 55, height: 55 }}
              source={require("@/assets/images/icons/task.png")}
            />
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              3 {"\n"} semanas {"\n"} em {"\n"} sequência
            </Text>
          </View>
        </View>
      </HabitBox>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  areaRow: {
    flexDirection: "row",
    gap: 10,
  },
  textBox: {
    fontSize: 18,
    fontWeight: 700,
    paddingBottom: 15,
  },
  doneChallenge: {
    backgroundColor: "#68D5B9",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingBottom: 15,
    paddingTop: 10,
  },
  undoneChallenge: {
    backgroundColor: "#F0F0F0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    paddingBottom: 15,
    paddingTop: 10,
  },
});
