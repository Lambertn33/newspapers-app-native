import { FC } from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";

const AppError: FC<{ error: string }> = ({ error }) => {
  return (
    <View style={styles.container}>
      <AppText>{error}</AppText>
    </View>
  );
};

export default AppError;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
});
