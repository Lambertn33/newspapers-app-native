import { FC } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import AppText from "./AppText";

interface IAppTextInputProps {
  label: string;
  otherProps: object;
}

const AppTextInput: FC<IAppTextInputProps> = ({ label, otherProps }) => {
  return (
    <View style={styles.container}>
      <AppText labelStyles={styles.label}>{label}</AppText>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} {...otherProps} />
      </View>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    gap: 1,
  },
  label: {
    fontSize: 16,
  },
  textInputContainer: {
    flexDirection: "row",
    borderColor: GlobalStyles.colors.semilight,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.dark,
  },
  textInput: {
    color: GlobalStyles.colors.light,
    fontSize: 18,
    width: '100%',
    fontWeight: "500",
  },
});
