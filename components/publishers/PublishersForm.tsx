import { FC, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import React from "react";
import { AppButton, AppDatePicker, AppTextInput } from "../UI";
import { GlobalStyles } from "../../constants/styles";

const PublishersForm: FC<{
  onManagePublisher: Function;
  goBack: () => void;
}> = ({ onManagePublisher, goBack }) => {
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
      <View style={styles.buttonsContainer}>
        <AppButton
          onPress={managePublisher}
          buttonStyles={styles.formButton}
          labelStyles={styles.formButtonLabel}
        >
          Create Publisher
        </AppButton>
        <AppButton
          onPress={goBack}
          buttonStyles={styles.cancelButton}
          labelStyles={styles.cancelButtonLabel}
        >
          Cancel
        </AppButton>
      </View>
    </View>
  );
};

export default PublishersForm;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    paddingVertical: 12,
  },
  buttonsContainer: {
    marginTop: 12,
    gap: 24,
  },
  formButton: {
    width: "100%",
    paddingVertical: 5,
    borderColor: GlobalStyles.colors.light,
    borderWidth: 2,
  },
  cancelButton: {
    backgroundColor: GlobalStyles.colors.light,
    paddingVertical: 5,
    borderColor: GlobalStyles.colors.light,
    borderWidth: 2,
  },
  cancelButtonLabel: {
    fontSize: 20,
    color: GlobalStyles.colors.semilight,
  },
  formButtonLabel: {
    fontSize: 20,
  },
  inputsContainer: {
    gap: 16,
  },
});
