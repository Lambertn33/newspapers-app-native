import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import AppText from "./AppText";

interface AppButtonProps {
  onPress: () => any;
  buttonStyles: object;
  labelStyles: object;
  children: React.ReactNode;
}

const AppButton: FC<AppButtonProps> = ({
  buttonStyles,
  children,
  labelStyles,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyles]}>
      <AppText labelStyles={labelStyles}>{children}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderColor: GlobalStyles.colors.light,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
  },
});
