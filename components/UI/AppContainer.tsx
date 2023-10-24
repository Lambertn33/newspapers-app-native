import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

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
    backgroundColor: GlobalStyles.colors.medium,
  },
});
