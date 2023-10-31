import { useState, FC } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import AppText from "./AppText";

interface AppSelectProps {
  data: {
    id: number;
    names: string;
  }[];
  label: string;
  onSelect: (value: string) => void;
}

const AppSelect: FC<AppSelectProps> = ({ data, label, onSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const selectHandler = (itemValue: any) => {
    setSelectedLanguage(itemValue);
    onSelect(itemValue);
  };
  return (
    <View style={styles.container}>
      <AppText labelStyles={styles.label}>{label}</AppText>
      <View style={styles.textInputContainer}>
        <Picker
          dropdownIconColor={GlobalStyles.colors.info}
          selectedValue={selectedLanguage}
          onValueChange={selectHandler}
        >
          {data.map((d) => (
            <Picker.Item
              key={d.id}
              color={GlobalStyles.colors.info}
              label={d.names}
              value={d.id}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default AppSelect;

const styles = StyleSheet.create({
  container: {
    gap: 1,
  },
  label: {
    fontSize: 16,
  },
  textInputContainer: {
    borderColor: GlobalStyles.colors.semilight,
    color: GlobalStyles.colors.light,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.dark,
  },
  textInput: {
    color: GlobalStyles.colors.light,
    fontSize: 18,
    width: "100%",
    fontWeight: "500",
  },
});
