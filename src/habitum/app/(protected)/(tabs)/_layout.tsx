import { Tabs } from "expo-router";
import { Image, View, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

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
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#68D5B9",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title:
            currentDate + " de " + currentMonth[month] + " de " + currentYear,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              size={30}
              name={focused ? "home-variant" : "home-variant-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="challenges"
        options={{
          title: "Desafios e Metas",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              size={28}
              name={focused ? "flag-variant" : "flag-variant-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="presets"
        options={{
          title: "Novo Hábito",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // backgroundColor: "#68D5B9",
                top: 10,
                width: 60,
                height: 60,
                borderRadius: 99,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 5,
                borderColor: "#fff",
                marginBottom: Platform.OS === "ios" ? 15 : 20,
              }}
            >
              {focused ? (
                <AntDesign name={"pluscircle"} size={50} color="#68D5B9" />
              ) : (
                <AntDesign name="pluscircleo" size={50} color="#68D5B9" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Community"
        options={{
          title: "Comunidade",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="globe-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Meu Perfil",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("@/assets/images/profilePictures/pp-default.png")}
                style={
                  focused
                    ? {
                        width: Platform.OS === "ios" ? 35 : 30,
                        height: Platform.OS === "ios" ? 35 : 30,
                        borderRadius: 999,
                        borderWidth: 2,
                        borderColor: "#68D5B9",
                      }
                    : {
                        width: 30,
                        height: 30,
                        borderRadius: 999,
                      }
                }
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
