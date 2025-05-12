import React from "react";
import { Text } from "react-native";

type Props = {
  messages?: string[];
};

export default function ValidationError({ messages }: Props) {
  if (!messages) return null;
  return (
    <>
      {messages.map((msg, index) => (
        <Text key={index} style={{ color: "#dc2626", fontSize: 12 }}>
          {msg}
        </Text>
      ))}
    </>
  );
}
