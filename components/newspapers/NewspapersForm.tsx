import { StyleSheet, Text, View } from "react-native";
import { FC, useState } from "react";
import { AppDatePicker, AppTextInput } from "../UI";

const NewspapersForm: FC<{ goBack: () => void}> = ({ goBack }) => {
  const [newspaper, setNewspaper] = useState({
    title: "",
    link: "",
    creationDate: new Date(),
    file: null,
    publisherId: "",
    abstract: "",
  });

  const inputChangedHandler = (input: string, value: string | Date) => {
    setNewspaper((prevValues) => {
      return {
        ...prevValues,
        [input]: value,
      };
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <AppTextInput
          label="Newspaper Title"
          otherProps={{
            keyboardType: "default",
            onChangeText: inputChangedHandler.bind(this, "title"),
            value: newspaper.title,
          }}
        />
        <AppTextInput
          label="Newspaper Link"
          otherProps={{
            keyboardType: "url",
            onChangeText: inputChangedHandler.bind(this, "link"),
            value: newspaper.link,
          }}
        />
         <AppDatePicker
          label="Publisher Joined Date"
          date={newspaper.creationDate}
          onChangeDate={inputChangedHandler.bind(this, "creationDate")}
        />
      </View>
    </View>
  );
};

export default NewspapersForm;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    paddingVertical: 12,
  },
  inputsContainer: {
    gap: 16,
  },
});
