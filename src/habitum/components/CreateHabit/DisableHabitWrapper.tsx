import { View } from "react-native";

type Props = {
  disabled: boolean;
  children: React.ReactNode;
};
export default function DisabledWrapper({ disabled, children }: Props) {
  return (
    <View
      style={{ opacity: disabled ? 0.4 : 1 }}
      pointerEvents={disabled ? "none" : "auto"}
    >
      {children}
    </View>
  );
}
