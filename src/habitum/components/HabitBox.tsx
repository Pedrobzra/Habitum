import { View, Text, StyleSheet } from "react-native";
import { Box } from "@/components/ui/box";

type Props = {
  text?: string;
};

export default function Habitbox({
  text,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <View>
      <Box style={styles.Box} className="w-100">
        <Text style={styles.textBox}>{text}</Text>
        {children}
      </Box>
    </View>
  );
}
const styles = StyleSheet.create({
  textBox: {
    fontWeight: "700",
    paddingBottom: 15,
  },

  Box: {
    rowGap: 5,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 10,
  },
});
