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
    flexDirection: "row",
    position: "relative",
    borderRadius: 15,

    borderColor: "#68D5B9",
    borderWidth: 2,
    padding: 5,

    alignItems: "center",
    gap: 10,

    width: 290,
    height: 60,
  },
  containerActive: {
    flexDirection: "row",
    position: "relative",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "white",

    padding: 5,

    alignItems: "center",
    gap: 10,

    width: 290,
    height: 60,
  },
  checkedIcon: {
    position: "absolute",
    top: 12,
    zIndex: 999,
    left: 270,
    height: 30,
    width: 30,
  },
  imgContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  img: {
    width: "15%",
    height: "87%",
    resizeMode: "cover",
  },
  description: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
});
