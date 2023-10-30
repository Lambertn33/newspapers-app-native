import { FC } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

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
  const renderLeftActions = () => {
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
          onPress={() => console.log("edit")}
        />
      </View>
    );
  };

  // edit & delete Action
  const renderRightActions = () => {
    return (
      <View style={{ flexDirection: "row", gap: 4 }}>
        <View
          style={[
            styles.newspaperActionsContainer,
            { backgroundColor: GlobalStyles.colors.warning },
          ]}
        >
          <AppIcon
            icon={
              <FontAwesome
                name="pencil-square-o"
                size={28}
                color={GlobalStyles.colors.dark}
              />
            }
            onPress={() => console.log("edit")}
          />
        </View>
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
            onPress={() => console.log("delete")}
          />
        </View>
      </View>
    );
  };
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
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
          <ScrollView style={{ gap: 4, maxHeight: 100 }}>
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
            <View>
              <MaterialIcons
                name="description"
                size={24}
                color={GlobalStyles.colors.light}
              />
            </View>
          </ScrollView>
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
