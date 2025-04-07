import { Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function selectImg() {
  return (
    <View>
      <Text>Aqui você escolherá a foto</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
