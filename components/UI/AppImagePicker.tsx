import { FC } from "react";
import { Alert, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerAsset } from "expo-image-picker/build/ImagePicker.types";

import { generateFileObject } from "../../helpers/file";

import AppButton from "./AppButton";
import AppText from "./AppText";
import { GlobalStyles } from "../../constants/styles";

const AppImagePicker: FC<{
  label: string;
  onPickImage: (file: ImagePickerAsset) => void;
}> = ({ onPickImage, label }) => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uploadedFile: ImagePickerAsset = generateFileObject(result);
      onPickImage(uploadedFile);
    }
  };
  return (
    <View>
      <AppText labelStyles={styles.label}>{label}</AppText>
      <AppButton
        buttonStyles={styles.button}
        labelStyles={{}}
        onPress={pickImageAsync}
      >
        Tap to Select
      </AppButton>
    </View>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  button: {
    borderRadius: 40,
    borderColor: GlobalStyles.colors.dark,
    backgroundColor: GlobalStyles.colors.dark,
    borderWidth: 3,
    paddingVertical: 3,
  },
});
