import { View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ProfilePictureSelect() {
  return (
    <View style={style.container}>
      <Link href={"/(auth)/selectImg"} style={style.imgContainer}>
        <Image
          style={style.img}
          source={require("@/assets/images/profilePictures/pp-default.png")}
        />
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: "relative",
  },
  imgContainer: {
    width: 90,
    height: 90,
    borderRadius: 999,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
