import { StyleSheet, Image } from "react-native";
import { FC } from "react";

const NewspaperImage: FC<{ image: string | undefined }> = ({ image }) => {
  return (
    <Image
      source={{ uri: image }}
      resizeMode="cover"
      style={styles.imageContainer}
    />
  );
};

export default NewspaperImage;

const styles = StyleSheet.create({
  imageContainer: {
    height: "100%",
  },
});
