import { FC, useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { addNewsPaper } from "../../api/api";

import { AppBar, AppContainer } from "../../components/UI";
import NewspapersForm from "../../components/newspapers/NewspapersForm";

import { GlobalStyles } from "../../constants/styles";

import { NewspapersContext } from "../../context/NewspapersContext";
import { PublishersContext } from "../../context/PublishersContext";

export const Manage: FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const publishersCtx = useContext(PublishersContext);
  const newspapersCtx = useContext(NewspapersContext);

  const goBack = () => navigation.goBack();

  const createNewsPaperHandler = async (values: any) => {
    try {
      const response = await addNewsPaper(values);
      const { newNewsPaper: newNewspaper } = response;
      const selectedPublisher = publishersCtx.publishers.find(
        (publisher) => publisher.id == values.publisherId
      );

      const createdNewspaper = {
        id: newNewspaper.id,
        image: newNewspaper.image,
        creationDate: newNewspaper.creationDate,
        title: newNewspaper.title,
        publisher: {
          id: selectedPublisher?.id!,
          names: selectedPublisher?.names!,
        },
      };
      newspapersCtx.addNewspaper(createdNewspaper);
      publishersCtx.updatePublisherNewspapersCount(values.publisherId, "ADD");
      navigation.navigate("newspapers");
    } catch (error) {
      // TODO: Handle Errors
      console.log(error);
    }
  };
  return (
    <AppContainer>
      <AppBar
        title="ADD NEWSPAPER"
        backIcon={
          <AntDesign
            name="back"
            size={32}
            color={GlobalStyles.colors.light}
            onPress={goBack}
          />
        }
      />
      <ScrollView style={styles.formContainer}>
        <NewspapersForm
          goBack={goBack}
          onManageNewspaper={createNewsPaperHandler}
        />
      </ScrollView>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: GlobalStyles.colors.semilight,
  },
});
