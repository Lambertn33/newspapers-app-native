import { FC, useContext } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { NewspapersContext } from "../../context/NewspapersContext";

import { deleteNewspaper } from "../../api/api";

import { AppIcon, AppText } from "../UI";
import { formatDate } from "../../helpers/date";
import { GlobalStyles } from "../../constants/styles";

interface INewspaper {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  publisher: {
    names: string;
  };
}

const NewspaperItem: FC<{ newspaper: INewspaper }> = ({ newspaper }) => {
  const newspapersCtx = useContext(NewspapersContext);
  // delete newspaper
  const removeNewspaper = async (id: number) => {
    try {
      await deleteNewspaper(id);
      newspapersCtx.removeNewspaper(id);
      Alert.alert("Success", "Newspaper deleted successfully");
    } catch (error) {
      // TODO: UPDATE
      console.log(error);
    }
  };

  // view newspaper details
  const renderLeftActions = (id: number) => {
    return (
      <View
        style={[
          styles.newspaperActionsContainer,
          { backgroundColor: GlobalStyles.colors.info },
        ]}
      >
        <AppIcon
          icon={
            <FontAwesome
              name="eye"
              size={28}
              color={GlobalStyles.colors.dark}
            />
          }
          onPress={() => console.log("view", id)}
        />
      </View>
    );
  };

  // delete Action
  const renderRightActions = (id: number) => {
    return (
      <View
        style={[
          styles.newspaperActionsContainer,
          { backgroundColor: GlobalStyles.colors.danger },
        ]}
      >
        <AppIcon
          icon={
            <FontAwesome
              name="trash"
              size={28}
              color={GlobalStyles.colors.dark}
            />
          }
          onPress={() => removeNewspaper(newspaper.id)}
        />
      </View>
    );
  };
  return (
    <Swipeable
      renderRightActions={() => renderRightActions(newspaper.id)}
      renderLeftActions={() => renderLeftActions(newspaper.id)}
    >
      <View style={styles.newspaperContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: newspaper.image }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <View style={{ gap: 4, maxHeight: 100 }}>
            <AppText labelStyles={styles.title}>
              {newspaper.title.toLocaleUpperCase()}
            </AppText>
            <View style={styles.description}>
              <AntDesign
                name="user"
                size={24}
                color={GlobalStyles.colors.light}
              />
              <AppText>{newspaper.publisher.names}</AppText>
            </View>
            <View style={styles.description}>
              <AntDesign
                name="calendar"
                size={24}
                color={GlobalStyles.colors.light}
              />
              <AppText>{formatDate(newspaper.creationDate)}</AppText>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default NewspaperItem;

const styles = StyleSheet.create({
  newspaperContainer: {
    backgroundColor: GlobalStyles.colors.semilight,
    borderRadius: 12,
    flexDirection: "row",
  },
  newspaperActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  descriptionContainer: {
    flex: 2,
    paddingVertical: 8,
    paddingHorizontal: 15,
    maxHeight: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
