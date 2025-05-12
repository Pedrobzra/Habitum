import { View, FlatList } from "react-native";
import type { Habit, ToDo, FullItem } from "@/types/ItemTypes";
import ListItem from "@/components/Index/ItemsList/ListItem";

type Props = {
  todos: ToDo[];
  habits: Habit[];
  onDelete: (id: number) => void;
};

export default function ItemList({ todos, habits, onDelete }: Props) {
  const items: FullItem[] = [...habits, ...todos];

  return (
    <View className="bg-white p-2 rounded-xl h-[170px] grow">
      <FlatList<FullItem>
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} onDelete={onDelete} />}
        ItemSeparatorComponent={() => <View className="h-1" />}
      />
    </View>
  );
}
