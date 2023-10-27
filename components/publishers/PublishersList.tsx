import { FC, useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { PublishersContext } from "../../context/PublishersContext";

import { AppText, AppIcon } from "../UI";

import { formatDate } from "../../helpers/date";
import { GlobalStyles } from "../../constants/styles";

import { deletePublisher } from "../../api/api";

interface IPublisher {
  id: number;
  names: string;
  joinedDate: Date;
  _count: {
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

  const navigate = () =>
    navigation.navigate("publisher", { publisherId: publisher.id });

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

  return (
    <View style={styles.publisherContainer}>
      <View>
        <AppText labelStyles={styles.publisherTitle}>{publisher.names}</AppText>
        <AppText>Joined on {formatDate(publisher.joinedDate)}</AppText>
        <AppText>number of Newspapers: {publisher._count.newsPapers}</AppText>
      </View>
      <View style={styles.publisherActions}>
        <AppIcon
          icon={<Ionicons name="eye" size={24} color="white" />}
          onPress={navigate}
        />
        <AppIcon
          icon={<Ionicons name="create-sharp" size={24} color="white" />}
          onPress={() => null}
        />
        <AppIcon
          icon={<Ionicons name="trash" size={24} color="white" />}
          onPress={() => removePublisher(publisher.id)}
        />
      </View>
    </View>
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
  publisherActions: {
    flexDirection: "row",
    gap: 8,
  },
  publisherTitle: {
    fontSize: 28,
  },
});
