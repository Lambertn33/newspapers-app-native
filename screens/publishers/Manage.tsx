import { FC, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { PublishersContext } from "../../context/PublishersContext";

import { createPublisher, updatePublisher } from "../../api/api";
import { AppContainer, AppBar } from "../../components/UI";
import { GlobalStyles } from "../../constants/styles";

import PublishersForm from "../../components/publishers/PublishersForm";
import { stringifyDate } from "../../helpers/date";

interface IPublisherInputs {
  id?: number;
  names: string;
  joinedDate: string;
}

export const Manage: FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const publishersCtx = useContext(PublishersContext);
  const goBack = () => navigation.goBack();

  //create/ update publisher
  const managePublisherHandler = async (values: IPublisherInputs) => {
    try {
      const data: IPublisherInputs = {
        names: values.names,
        joinedDate: stringifyDate(values.joinedDate),
      };

      let response = route.params.isEditing
        ? await updatePublisher(values.id!, data)
        : await createPublisher(data);

      const { updatedPublisher, newPublisher } = response;

      if (route.params.isEditing) {
        const editedPublisher = {
          id: updatedPublisher.id,
          names: updatedPublisher.names,
          joinedDate: updatedPublisher.joinedDate,
        };
        publishersCtx.editPublisher(editedPublisher);
      } else {
        const createdPublisher = {
          id: newPublisher.id,
          names: newPublisher.names,
          joinedDate: newPublisher.joinedDate,
          _count: {
            newsPapers: 0,
          },
        };
        publishersCtx.addPublisher(createdPublisher);
      }

      navigation.navigate("publishers");
    } catch (error) {
      // TODO: Handle errors
    }
  };

  return (
    <AppContainer>
      <AppBar
        title={route.params.isEditing ? "EDIT PUBLISHER" : "ADD PUBLISHER"}
        backIcon={
          <AntDesign
            name="back"
            size={32}
            color={GlobalStyles.colors.light}
            onPress={goBack}
          />
        }
      />
      <View style={styles.formContainer}>
        <PublishersForm
          goBack={goBack}
          onManagePublisher={managePublisherHandler}
          publisherToEdit={
            route.params.isEditing ? route.params.publisher : null
          }
          isEditing={route.params.isEditing}
        />
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 24,
    marginHorizontal: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: GlobalStyles.colors.semilight,
  },
});
