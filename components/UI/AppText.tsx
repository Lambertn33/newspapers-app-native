import { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import { GlobalStyles } from "../../constants/styles";

interface AppTextProps {
  children: ReactNode;
  labelStyles?: object;
}

const AppText: FC<AppTextProps> = ({ children, labelStyles }) => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Text style={[styles.text, labelStyles]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: GlobalStyles.fontFamily,
    color: GlobalStyles.colors.light,
  },
});
