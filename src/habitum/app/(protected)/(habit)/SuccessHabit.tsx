import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams as useSearchParams } from "expo-router";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Button from "@/components/Button";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";
export default function SuccessHabit() {
  const { action } = useSearchParams();
  const rotation = useSharedValue(0);

  useEffect(() => {
    const rotateOnce = () => {
      rotation.value = withTiming(
        360,
        {
          duration: 105000,
          easing: Easing.linear,
        },
        () => {
          rotation.value = 0;
        }
      );
    };
    rotateOnce();

    const interval = setInterval(() => {
      rotateOnce();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  const successMessage =
    action === "created" ? "Hábito criado." : "Hábito alterado.";
  const secondaryMessage =
    action === "created"
      ? "Você está construindo o seu bem-estar, um hábito de cada vez!"
      : "Suas mudanças foram salvas com sucesso!";
  return (
    <Animated.View style={styles.container}>
      <LinearGradient
        style={styles.background}
        colors={["#68D5B9", "#8FE5B9"]}
        start={{ x: 0, y: 0 }}
      >
        <View style={{ paddingTop: 90 }}>
          <Image
            style={{
              position: "absolute",
              top: 90,
              width: 200,
              height: 200,
              alignSelf: "center",
              marginBottom: 100,
            }}
            source={require("@/assets/images/logoH.png")}
          ></Image>
          <Animated.Image
            source={require("@/assets/images/logoArrows.png")}
            style={[
              {
                width: 200,
                height: 200,
                alignSelf: "center",
                marginBottom: 100,
              },
              animatedStyle,
            ]}
          ></Animated.Image>
          <View style={{ paddingBottom: 50 }}>
            <Text style={styles.title}>{successMessage}</Text>
            <Text style={{ color: "white", fontWeight: 600 }}>
              {secondaryMessage}
            </Text>
          </View>

          <View style={{ gap: 10 }}>
            <Button
              text="Retornar a página inicial"
              onPress={() => router.replace("/")}
            ></Button>
            <Pressable style={styles.pressable} onPress={() => router.back()}>
              <Text style={{ color: "white", fontSize: 18 }}>
                Quero continuar evoluindo
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    padding: 30,
  },
  container: {
    width: "100%",
  },
  title: {
    fontWeight: 800,
    fontSize: 50,
    color: "white",
  },
  pressable: {
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
});
