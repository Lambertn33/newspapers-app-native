import { FC } from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import { GlobalStyles } from "../../constants/styles";

interface AppBarProps {
  title: string;
  actionIcon?: React.ReactNode;
  backIcon?: React.ReactNode
}

const AppBar: FC<AppBarProps> = ({ title, actionIcon, backIcon }) => {
  return (
    <View style={styles.container}>
      <AppText labelStyles={styles.title}>{title}</AppText>
      <View style={styles.iconsContainer}>
        {backIcon}
        {actionIcon}
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.dark,
    flexDirection: "row",
    paddingVertical: 14,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    textTransform: "uppercase",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 24,
  },
});
