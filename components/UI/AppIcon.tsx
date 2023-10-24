import { FC, ReactNode } from "react";
import { Pressable } from "react-native";

interface AppIconProps {
  onPress: () => any;
  icon: ReactNode;
}

const AppIcon: FC<AppIconProps> = ({ icon, onPress }) => {
  return <Pressable onPress={onPress}>{icon}</Pressable>;
};

export default AppIcon;
