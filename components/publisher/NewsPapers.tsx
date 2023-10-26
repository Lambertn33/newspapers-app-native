import { FC } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  ListRenderItem,
  Image,
} from "react-native";

import { AppText } from "../UI";
import { GlobalStyles } from "../../constants/styles";

import { FontAwesome } from "@expo/vector-icons";
import { formatDate } from "../../helpers/date";

interface INewsPaper {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  abstract: string;
}

const NewsPapers: FC<{
  newspapers: INewsPaper[] | undefined;
}> = ({ newspapers }) => {
  const { width } = Dimensions.get("window");
  const itemWidth = width / 1.5;

  const renderItem: ListRenderItem<INewsPaper> = ({ item }) => (
    <View style={[styles.item, { width: itemWidth }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.descriptionsContainer}>
        <AppText labelStyles={styles.title}>{item.title}</AppText>
        <AppText labelStyles={styles.description}>{item.abstract}</AppText>
        <View>
          <View style={styles.creationDateContainer}>
            <FontAwesome
              name="calendar"
              size={24}
              color={GlobalStyles.colors.light}
            />
            <AppText>{formatDate(item.creationDate)}</AppText>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={newspapers}
      horizontal={true}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: GlobalStyles.colors.semilight,
    borderRadius: 10,
    margin: 10,
    gap: 8,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  descriptionsContainer: {
    padding: 12,
  },
  description: {
    textAlign: "justify",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  creationDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default NewsPapers;
