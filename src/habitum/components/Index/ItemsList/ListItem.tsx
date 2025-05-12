import { View, Text, TouchableOpacity, Alert, Platform } from "react-native";
import { Ionicons, FontAwesome6, Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { SwipeableMethods } from "react-native-gesture-handler/ReanimatedSwipeable";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import type { Habit, ToDo } from "@/types/ItemTypes";

type Props = {
  item: Habit | ToDo;
  onDelete: (id: number) => void;
};

export default function ListItem({ item, onDelete }: Props) {
  const [isExtended, setIsExtended] = useState(false);
  const swipeableRef = useRef<SwipeableMethods>(null);

  const handleDelete = () => {
    console.log("Deletar item " + item.id);
    onDelete(item.id);
  };

  const confirmDelete = () => {
    if (Platform.OS === "web") {
      const confirmed = window.confirm(
        `Tem certeza que deseja deletar o hábito "${item.name}"?`
      );
      if (confirmed) {
        handleDelete();
      } else {
        swipeableRef.current?.close();
      }
    } else {
      Alert.alert(
        "Tem certeza?",
        `Deseja deletar o hábito "${item.name}"?`,
        [
          {
            text: "Não",
            style: "cancel",
            onPress: () => swipeableRef.current?.close(),
          },
          {
            text: "Sim",
            onPress: handleDelete,
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable
        ref={swipeableRef}
        overshootRight={false}
        onSwipeableWillClose={() => {
          setIsExtended(false);
        }}
        onSwipeableWillOpen={(direction) => {
          setIsExtended(true);
          if (direction === "right") {
            confirmDelete();
          }
        }}
        renderRightActions={() => (
          <>
            <TouchableOpacity
              className="w-[60px] flex-row items-center justify-center bg-green-500"
              onPress={() => {
                console.log("Marcar como feito o hábito " + item.id);
              }}
            >
              <Feather name="check-circle" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-[60px] flex-row items-center justify-center bg-blue-500"
              onPress={() => {
                router.push({
                  pathname: "/(protected)/(habit)/[id]",
                  params: { id: item.id.toString() },
                });
              }}
            >
              <FontAwesome6 name="edit" size={24} color="white" />
            </TouchableOpacity>
          </>
        )}
        renderLeftActions={() => (
          <TouchableOpacity className="grow flex-row items-center justify-start px-2 bg-red-500 rounded-sm">
            <Ionicons name="trash" size={24} color={"white"} />
          </TouchableOpacity>
        )}
        friction={1}
        containerStyle={{
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <View className="bg-neutral-100 p-2 flex-row justify-center items-center gap-3">
          <View className="flex flex-col justify-center items-center gap-2">
            <Ionicons name={item.icon} size={30} color={item.color} />
          </View>
          <View className="grow">
            <View className="flex flex-row items-center gap-2">
              {"goal" in item && (
                <Text className="text-blue-500 font-medium bg-neutral-200 p-[2px] rounded">
                  Hábito
                </Text>
              )}
              {("startDate" in item || "endDate" in item) && (
                <Text className="text-emerald-500 font-medium bg-neutral-200 p-[2px] rounded">
                  Tarefa
                </Text>
              )}
              <Text className="text-lg font-medium">{item.name}</Text>
            </View>

            <Text className="text-neutral-500">{(item as Habit).goal}</Text>
          </View>
          <View>
            <Feather
              name={isExtended ? "chevrons-right" : "chevrons-left"}
              size={30}
              color="grey"
              className="self-end"
            />
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
