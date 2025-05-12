import React from "react";
import { FlatList, TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import iconNames from "@/assets/ionicons.json";
import { updateHabitDraft } from "@/services/createHabit";
import { router } from "expo-router";

const iconList = Object.keys(iconNames);

export default function IconModal() {
  return (
    <View style={styles.container}>
      <FlatList
        data={iconList}
        keyExtractor={(item) => item}
        numColumns={7}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={async () => {
              await updateHabitDraft({ icon: item });
              router.back();
            }}
          >
            <Ionicons name={item as any} size={28} color="black" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  iconContainer: {
    padding: 12,
  },
});
