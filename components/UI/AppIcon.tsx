import { StyleSheet, Text, View, Pressable } from "react-native";
import { FC, ReactNode } from "react";

interface AppIconProps {
  onPress: () => any;
  icon: ReactNode;
}

const AppIcon: FC<AppIconProps> = ({ icon, onPress }) => {
  return <Pressable onPress={onPress}>{icon}</Pressable>;
};

export default AppIcon;

const styles = StyleSheet.create({});
