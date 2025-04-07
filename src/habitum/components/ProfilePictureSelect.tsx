import { View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ProfilePictureSelect() {
  return (
    <View style={style.section}>
      <View style={style.container}>
        <Link href={"/(auth)/selectImg"} style={style.imgContainer}>
          <Image
            style={style.img}
            source={require("@/assets/images/profilePictures/pp-default.png")}
          />
        </Link>
        <View style={style.editImg}>
          <Image
            style={[style.icon]}
            source={require("@/assets/images/icons/user-pen.png")}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  section: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    borderRadius: 999,
    overflow: "hidden",
  },
  img: {
    width: "90%",
    height: "90%",
    resizeMode: "cover",
  },
  icon: {
    width: "70%",
    height: "70%",
    resizeMode: "cover",
    tintColor: "grey",
  },
  editImg: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "35%",
    width: 30,
    height: 30,

    position: "absolute",
    top: 100,
    left: 100,
  },
});
