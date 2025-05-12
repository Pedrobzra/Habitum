import { View, Text, Image, Pressable, FlatList } from "react-native";
import PersonItemList from "@/components/Community/PersonItemList";
import { globalUsers } from "@/data/fakeusers";

let sortedGlobal = globalUsers
  .slice()
  .sort((a, b) => b.rank - a.rank)
  .sort((a, b) => b.streak - a.streak);

export default function GlobalTab() {
  return (
    <View className="flex-1 p-3 gap-3">
      <View className="flex flex-row justify-center">
        <Text className="font-bold text-xl">Rank Mundial</Text>
      </View>
      <View className="flex-1 bg-neutral-100 rounded-xl flex flex-col gap-[2px] overflow-hidden">
        <FlatList
          data={sortedGlobal}
          ItemSeparatorComponent={() => <View className="h-[1px]" />}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item, index }) => {
            return (
              <PersonItemList
                name={`${index + 1}. ${item.name}`}
                streak={item.streak}
                rank={item.rank}
                global
              />
            );
          }}
        />
      </View>
    </View>
  );
}
