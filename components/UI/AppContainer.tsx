import { StyleSheet, Text, View } from "react-native";
import { FC, ReactNode } from "react";

const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
  },
});
