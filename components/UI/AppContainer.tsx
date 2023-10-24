import { StyleSheet, Text, View } from "react-native";
import { FC, ReactNode } from "react";

const AppContainer: FC<{ children: ReactNode; additionalStyles?: object }> = ({
  children,
  additionalStyles,
}) => {
  return <View style={[styles.container, additionalStyles]}>{children}</View>;
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
  },
});
