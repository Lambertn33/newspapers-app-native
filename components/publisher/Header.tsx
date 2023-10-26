import { StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { AppText } from "../UI";

import { FontAwesome } from "@expo/vector-icons";

interface IPublisherHeaderDetails {
  names: string | undefined;
  joinedDate: string | undefined;
}

const Header: FC<IPublisherHeaderDetails> = ({ joinedDate, names }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" size={160} color="white" />
      <View>
        <AppText labelStyles={styles.title}>{names}</AppText>
        <View style={styles.subtitlesContainer}>
          <FontAwesome name="calendar" size={20} color="white" />
          <AppText labelStyles={styles.subtitle}>{joinedDate}</AppText>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
  },
  subtitlesContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 14,
  },
});
