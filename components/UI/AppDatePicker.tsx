import { FC, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { GlobalStyles } from "../../constants/styles";
import AppText from "./AppText";

interface IAppDatePickerProps {
  label: string;
  date: Date;
  onChangeDate: (date: Date) => void;
}

const AppDatePicker: FC<IAppDatePickerProps> = ({
  label,
  date,
  onChangeDate,
}) => {
  const [showDate, setShowDate] = useState(false);

  const onDateChange = (event: Event, selectedDate: Date) => {
    setShowDate(false);
    if (event.type === "set" && selectedDate) {
      onChangeDate(selectedDate);
    }
  };

  const onChangeAdapter = (event: any, selectedDate?: Date) => {
    onDateChange(event, selectedDate as Date);
  };

  return (
    <View style={styles.container}>
      <AppText labelStyles={styles.label}>{label}</AppText>
      <View style={styles.dateContainer}>
        <TextInput
          value={date.toLocaleDateString()}
          editable={false}
          style={styles.input}
        />
        <Fontisto
          name="date"
          size={24}
          color="white"
          onPress={() => setShowDate(!showDate)}
        />
      </View>
      {showDate && (
        <DateTimePicker
          value={date}
          mode={"date"}
          is24Hour={true}
          maximumDate={new Date()}
          onChange={onChangeAdapter}
        />
      )}
    </View>
  );
};

export default AppDatePicker;

const styles = StyleSheet.create({
  container: {
    gap: 1,
  },
  label: {
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 40,
    backgroundColor: GlobalStyles.colors.dark,
  },
  input: {
    flex: 1,
    color: GlobalStyles.colors.light,
    fontSize: 18,
    fontWeight: "500",
  },
});
