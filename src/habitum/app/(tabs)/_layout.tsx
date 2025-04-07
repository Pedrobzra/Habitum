import { Tabs } from "expo-router";

var date = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();

var currentDate = date.toString();
var currentMonth = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
var currentYear = year.toString();

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title:
            currentDate + " de " + currentMonth[month] + " de " + currentYear,
        }}
      />
      <Tabs.Screen name="challenges" options={{ title: "Desafios e Metas" }} />
      <Tabs.Screen name="presets" options={{ title: "Hábitos Predefinidos" }} />
      <Tabs.Screen name="community" options={{ title: "Comunidade" }} />
      <Tabs.Screen name="profile" options={{ title: "Meu Perfil" }} />
    </Tabs>
  );
}
