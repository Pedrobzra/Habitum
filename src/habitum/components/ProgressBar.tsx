import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  min: number;
  max: number;
  current: number;
  height: number;
};

export default function ProgressBar({ min, max, current, height }: Props) {
  const progress = Math.max(0, Math.min(1, (current - min) / (max - min)));
  return (
    <View style={{ flexDirection: "column", gap: 5 }}>
      <View
        style={{
          height,
          backgroundColor: "#F0F0F0",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height,
            width: `${progress * 100}%`,
            borderRadius: height,
            backgroundColor: "#68D5B9",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginRight: 5,
          marginLeft: 5,
        }}
      >
        <Text style={{ fontSize: 12 }}>{min}</Text>
        <Text style={{ fontSize: 12, textAlign: "right", marginRight: 5 }}>
          {current}/{max}
        </Text>
      </View>
    </View>
  );
}
