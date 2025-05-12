import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { results } from "@/data/fakeusers";
import Ionicons from "@expo/vector-icons/Ionicons";
import PersonItemList from "@/components/Community/PersonItemList";
import FriendsTab from "@/components/Community/FriendsTab";
import GlobalTab from "@/components/Community/GlobalTab";

const routes = [
  { key: "friends", title: "Amigos" },
  { key: "global", title: "Global" },
];

export default function Community() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <KeyboardAvoidingView
      behavior="height"
      className="flex-1 flex flex-col p-[10px] gap-[10px] md:max-w-[768px] md:self-center"
    >
      <View className="flex flex-row items-center bg-white px-[12px] rounded-xl">
        <TextInput
          className="flex-1 mr-[8px] py-[15px] text-black"
          placeholder="Buscar pessoas..."
          placeholderTextColor="#888"
        />
        <Pressable>
          <Ionicons name="search" size={20} color="#888" />
        </Pressable>
      </View>
      {results.length > 0 && (
        <View>
          <Text className="text-neutral-600">Resultados da pesquisa:</Text>
          <View className=" bg-neutral-100 rounded-xl overflow-hidden max-h-[300px]">
            <FlatList
              ItemSeparatorComponent={() => <View className="h-[1px]" />}
              keyExtractor={(item, index) => item.name + index}
              data={results}
              renderItem={({ item }) => (
                <PersonItemList
                  name={item.name}
                  streak={item.streak}
                  rank={item.rank}
                />
              )}
            />
          </View>
        </View>
      )}
      <View className="flex-1">
        <TabView
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            friends: FriendsTab,
            global: GlobalTab,
          })}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              activeColor="#46ab91"
              inactiveColor="grey"
              indicatorStyle={{ backgroundColor: "#46ab91" }}
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                overflow: "hidden",
                elevation: 0,
              }}
            />
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
