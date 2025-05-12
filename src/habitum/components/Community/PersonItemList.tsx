import { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  ImageSourcePropType,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  name: string;
  profPic?: string;
  streak: number;
  rank: number;
  added?: boolean;
  global?: boolean;
};

const rankImgMap: Record<number, ImageSourcePropType> = {
  0: require("@/assets/images/ranks/bronze.png"),
  1: require("@/assets/images/ranks/silver.png"),
  2: require("@/assets/images/ranks/gold.png"),
  3: require("@/assets/images/ranks/diamond.png"),
  4: require("@/assets/images/ranks/superfocus.png"),
};

export default function PersonItemList({
  name,
  streak,
  rank,
  added,
  profPic,
  global,
}: Props) {
  const [addFriend, setAddFriend] = useState(false);

  const renderActionButton = () => {
    if (added) {
      return (
        <Pressable
          className="bg-red-500 p-[7px] rounded-lg flex items-center justify-center"
          onPress={() => {
            Alert.alert(
              "Remover Amigo",
              `Tem certeza que deseja remover ${name.split(" ")[1]}?`,
              [
                { text: "Remover", onPress: () => {}, style: "destructive" },
                { text: "Cancelar", style: "cancel" },
              ]
            );
          }}
        >
          <Ionicons name="person-remove-sharp" size={20} color="white" />
        </Pressable>
      );
    }

    if (!global) {
      return (
        <Pressable
          className={`${
            addFriend ? "bg-amber-500" : "bg-emerald-500"
          } p-[7px] rounded-lg flex items-center justify-center`}
          onPress={() => setAddFriend(!addFriend)}
        >
          {addFriend ? (
            <Entypo name="dots-three-horizontal" size={20} color="white" />
          ) : (
            <Ionicons name="person-add-sharp" size={20} color="white" />
          )}
        </Pressable>
      );
    }

    return null;
  };

  return (
    <View className="w-full h-[75px] py-5 px-4 bg-white flex-row items-center">
      <View className="flex flex-row flex-1 gap-2 items-center overflow-hidden">
        <View className="w-[45px] h-[45px]">
          <Image
            style={{ width: "100%", height: "100%" }}
            source={
              profPic
                ? { uri: profPic }
                : require("@/assets/images/profilePictures/pp-default.png")
            }
          />
        </View>
        <View className="w-[40px] h-[40px]">
          <Image
            style={{ width: "100%", height: "100%" }}
            source={rankImgMap[rank]}
          />
        </View>
        <View className="flex flex-col flex-1 overflow-hidden">
          <Text className="font-medium" numberOfLines={1}>
            {name}
          </Text>
          <View className="flex flex-row items-center gap-1">
            <Text
              className={`${
                streak !== 0 ? "text-orange-500 font-bold" : "text-neutral-600"
              }`}
            >
              {streak}
            </Text>

            <View className="w-[20px] h-[20px]">
              <Image
                style={{ width: "100%", height: "100%" }}
                source={
                  streak !== 0
                    ? require("@/assets/images/icons/flame.png")
                    : require("@/assets/images/icons/flameGray.png")
                }
              />
            </View>
          </View>
        </View>
      </View>
      {renderActionButton()}
    </View>
  );
}
