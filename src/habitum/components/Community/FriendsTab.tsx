import { View, Text, Image, Pressable, FlatList } from "react-native";
import PersonItemList from "@/components/Community/PersonItemList";
import { friends } from "@/data/fakeusers";

export default function FriendsTab() {
  let sortedFriends = friends.slice().sort((a, b) => b.rank - a.rank);

  return (
    <View className="flex-1 p-3 gap-3">
      <View className="flex flex-row justify-between">
        <Text className="font-bold text-xl">Meus Amigos</Text>
        <View className="flex flex-row gap-3 items-center">
          <Text> Filtrar por:</Text>
          <Pressable className="flex flex-row gap-1 bg-neutral-300 rounded-xl p-2">
            <View className="w-[20px] h-[20px]">
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/images/ranks/superfocus.png")}
              />
            </View>
            <Text className="font-bold">Rank</Text>
          </Pressable>
        </View>
      </View>
      <View className="flex-1 bg-neutral-100 rounded-xl flex flex-col gap-[2px] overflow-hidden">
        <FlatList
          data={sortedFriends}
          ItemSeparatorComponent={() => <View className="h-[1px]" />}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item, index }) => {
            return (
              <PersonItemList
                name={`${index + 1}. ${item.name}`}
                streak={item.streak}
                added
                rank={item.rank}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
