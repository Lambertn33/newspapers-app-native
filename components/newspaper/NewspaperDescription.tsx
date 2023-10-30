import { FC } from "react";
import { StyleSheet, View, Linking, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { AppText } from "../UI";
import { GlobalStyles } from "../../constants/styles";
import { formatDate } from "../../helpers/date";

interface INewspaperDetails {
  id: number;
  creationDate: Date;
  title: string;
  abstract: string;
  link: string;
  publisher: {
    id: number;
    names: string;
  };
}

const NewspaperDescription: FC<{ newspaper: INewspaperDetails | null }> = ({
  newspaper,
}) => {
  const openUrlHandler = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    return supported
      ? await Linking.openURL(url)
      : Alert.alert("Error", "cannot open the url");
  };
  return (
    <View style={styles.container}>
      <View>
        <AppText labelStyles={styles.title}>{newspaper?.title}</AppText>
        <AppText>{newspaper?.abstract}</AppText>
      </View>
      <View style={styles.descriptionsContainer}>
        <View style={styles.description}>
          <FontAwesome
            name="user"
            size={24}
            color={GlobalStyles.colors.light}
          />
          <AppText>{newspaper?.publisher?.names}</AppText>
        </View>
        <View style={styles.description}>
          <FontAwesome
            name="calendar-plus-o"
            size={24}
            color={GlobalStyles.colors.light}
          />
          <AppText>{formatDate(newspaper?.creationDate!)}</AppText>
        </View>
        <View style={styles.description}>
          <FontAwesome
            name="link"
            size={24}
            color={GlobalStyles.colors.light}
            onPress={() => openUrlHandler(newspaper?.link!)}
          />
          <AppText>Click the icon</AppText>
        </View>
      </View>
    </View>
  );
};

export default NewspaperDescription;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  title: {
    fontSize: 32,
  },
  descriptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
