import { FC, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import React from "react";
import { AppButton, AppDatePicker, AppTextInput } from "../UI";

const PublishersForm: FC<{ onManagePublisher: Function }> = ({
  onManagePublisher,
}) => {
  const [publisher, setPublisher] = useState({
    names: "",
    joinedDate: new Date(),
  });

  const inputChangedHandler = (input: string, value: string | Date) => {
    setPublisher((prevValues) => {
      return {
        ...prevValues,
        [input]: value,
      };
    });
  };

  const managePublisher = () => {
    const { names } = publisher;
    const namesIsValid = names.trim().length > 0;

    if (!namesIsValid) {
      Alert.alert("Error...", "please correct all errors and try again");
      return;
    }
    onManagePublisher(publisher);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <AppTextInput
          label="Publisher Names"
          otherProps={{
            keyboardType: "default",
            onChangeText: inputChangedHandler.bind(this, "names"),
            value: publisher.names,
          }}
        />
        <AppDatePicker
          label="Publisher Joined Date"
          date={publisher.joinedDate}
          onChangeDate={inputChangedHandler.bind(this, "joinedDate")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={managePublisher}
          buttonStyles={styles.button}
          labelStyles={styles.buttonLabel}
        >
          Create Publisher
        </AppButton>
      </View>
    </View>
  );
};

export default PublishersForm;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  buttonContainer: {
    marginTop: 12,
  },
  button: {
    width: "100%",
    paddingVertical: 5,
  },
  buttonLabel: {
    fontSize: 20,
  },
  inputsContainer: {
    gap: 16,
  },
});
