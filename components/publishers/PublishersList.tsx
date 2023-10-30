import { FC, useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

import { PublishersContext } from "../../context/PublishersContext";

import { AppText, AppIcon } from "../UI";

import { formatDate } from "../../helpers/date";
import { GlobalStyles } from "../../constants/styles";

import { deletePublisher } from "../../api/api";

interface IPublisher {
  id: number;
  names: string;
  joinedDate: Date;
  _count?: {
    newsPapers: number;
  };
}
// publishers list
const PublishersList: FC<{ publishers: IPublisher[] }> = ({ publishers }) => {
  return (
    <View style={styles.publishersContainer}>
      {publishers.map((publisher) => (
        <PublisherItem key={publisher.id} publisher={publisher} />
      ))}
    </View>
  );
};

// single publisher
const PublisherItem: React.FC<{ publisher: IPublisher }> = ({ publisher }) => {
  const navigation: any = useNavigation();
  const publishersCtx = useContext(PublishersContext);

  // view publisher details
  const viewPublisher = () =>
    navigation.navigate("publisher", { publisherId: publisher.id });

  const updatePublisher = (publisher: IPublisher) => {
    navigation.navigate("managePublisher", {
      isEditing: true,
      publisher,
    });
  };

  // delete publisher
  const removePublisher = async (id: number) => {
    try {
      await deletePublisher(id);
      publishersCtx.removePublisher(id);
      Alert.alert(
        "Success",
        "Publisher and related newspapers deleted successfully"
      );
    } catch (error) {
      // TODO: UPDATE
      console.log(error);
    }
  };

  // NEWSPAPER ACTION
  // view newspaper
  const renderLeftActions = () => {
    return (
      <View
        style={[
          styles.publisherActionsContainer,
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
          onPress={viewPublisher}
        />
      </View>
    );
  };

  //edit /delete newspaper
  const renderRightActions = () => {
    return (
      <View style={{ flexDirection: "row", gap: 4 }}>
        <View
          style={[
            styles.publisherActionsContainer,
            { backgroundColor: GlobalStyles.colors.warning },
          ]}
        >
          <AppIcon
            icon={
              <Ionicons
                name="create-sharp"
                size={24}
                color={GlobalStyles.colors.light}
              />
            }
            onPress={() => updatePublisher(publisher)}
          />
        </View>
        <View
          style={[
            styles.publisherActionsContainer,
            { backgroundColor: GlobalStyles.colors.danger },
          ]}
        >
          <AppIcon
            icon={
              <Ionicons
                name="trash"
                size={24}
                color={GlobalStyles.colors.light}
              />
            }
            onPress={() => removePublisher(publisher.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      <View style={styles.publisherContainer}>
        <View>
          <AppText labelStyles={styles.publisherTitle}>
            {publisher.names}
          </AppText>
          <AppText>Joined on {formatDate(publisher.joinedDate)}</AppText>
          <AppText>
            number of Newspapers: {publisher._count?.newsPapers}
          </AppText>
        </View>
      </View>
    </Swipeable>
  );
};

export default PublishersList;

const styles = StyleSheet.create({
  publishersContainer: {
    gap: 16,
  },
  publisherContainer: {
    backgroundColor: GlobalStyles.colors.semilight,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  publisherTitle: {
    fontSize: 28,
  },
  publisherActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 24,
  },
});
