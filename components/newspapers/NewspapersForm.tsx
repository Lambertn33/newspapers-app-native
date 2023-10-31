import { FC, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { PublishersContext } from "../../context/PublishersContext";
import {
  AppDatePicker,
  AppTextInput,
  AppSelect,
  AppImagePicker,
  AppText,
  AppButton,
} from "../UI";
import { GlobalStyles } from "../../constants/styles";

interface NewspaperInputs {
  title: string;
  link: string;
  creationDate: Date;
  file: {
    uri: string;
    name: string;
    type: string;
  } | null;
  publisherId: string;
  abstract: string;
}

const NewspapersForm: FC<{
  goBack: () => void;
  onManageNewspaper: Function;
}> = ({ goBack, onManageNewspaper }) => {
  const { publishers } = useContext(PublishersContext);
  const [newspaper, setNewspaper] = useState<NewspaperInputs>({
    title: "",
    link: "",
    creationDate: new Date(),
    file: null,
    publisherId: "",
    abstract: "",
  });

  const inputChangedHandler = (
    input: string,
    value: any
  ) => {
    setNewspaper((prevValues) => {
      return {
        ...prevValues,
        [input]: value,
      };
    });
  };

  const submitForm = () => {
    onManageNewspaper(newspaper);
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
          label="Newspaper Created date"
          date={newspaper.creationDate}
          onChangeDate={inputChangedHandler.bind(this, "creationDate")}
        />
        <AppSelect
          onSelect={inputChangedHandler.bind(this, "publisherId")}
          label="Select Publisher"
          data={publishers}
        />
        <View style={{ gap: 4 }}>
          <AppImagePicker
            label="Newspaper Image"
            onPickImage={inputChangedHandler.bind(this, "file")}
          />
          <AppText labelStyles={styles.selectedImageLabel}>
            {newspaper.file === null
              ? "No Image selected"
              : newspaper.file.name}
          </AppText>
        </View>
        <AppTextInput
          label="Newspaper Abstract"
          otherProps={{
            keyboardType: "default",
            numberOfLines: 4,
            onChangeText: inputChangedHandler.bind(this, "abstract"),
            value: newspaper.abstract,
          }}
        />
        <View style={styles.buttonsContainer}>
          <AppButton
            onPress={submitForm}
            buttonStyles={styles.formButton}
            labelStyles={styles.formButtonLabel}
          >
            Create
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
    </View>
  );
};

export default NewspapersForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputsContainer: {
    gap: 16,
  },
  selectedImageLabel: {
    color: GlobalStyles.colors.info,
  },
  buttonsContainer: {
    gap: 8,
    flexDirection: "row",
  },
  formButton: {
    borderColor: GlobalStyles.colors.light,
    paddingVertical: 5,
    borderWidth: 2,
    alignItems: "center",
    flex: 1,
  },
  cancelButton: {
    backgroundColor: GlobalStyles.colors.light,
    paddingVertical: 5,
    borderColor: GlobalStyles.colors.light,
    borderWidth: 2,
    flex: 1,
  },
  cancelButtonLabel: {
    fontSize: 20,
    color: GlobalStyles.colors.semilight,
  },
  formButtonLabel: {
    fontSize: 20,
  },
});
