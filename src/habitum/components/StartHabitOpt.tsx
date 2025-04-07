import { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";

type Props = {
  source: ImageSourcePropType;
  description: string;
};

export default function StartHabitOpt({ source, description }: Props) {
  const [isActive, setIsActive] = useState(false);
  const checkedIcon = useMemo(
    () => require("@/assets/images/icons/checked.png"),
    []
  );

  return (
    <Pressable
      style={isActive ? styles.containerActive : styles.container}
      onPress={() => setIsActive(!isActive)}
    >
      {isActive && <Image style={styles.checkedIcon} source={checkedIcon} />}

      <View style={styles.imgContainer}></View>
      <Image style={styles.img} source={source} />
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "#D9D9D9",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 140,
    height: 140,
  },
  containerActive: {
    position: "relative",
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "#68D5B9",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 140,
    height: 140,
  },
  checkedIcon: {
    position: "absolute",
    top: -16,
    zIndex: 999,
    left: 50,
    height: 30,
    width: 30,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 100,
  },
  img: {
    width: "70%",
    height: "70%",
    resizeMode: "cover",
  },
  description: {
    fontWeight: "700",
    textAlign: "center",
  },
});
