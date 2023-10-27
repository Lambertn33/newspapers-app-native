import { FC, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { PublishersContext } from "../../context/PublishersContext";

import { createPublisher } from "../../api/api";
import { AppContainer, AppBar } from "../../components/UI";
import { GlobalStyles } from "../../constants/styles";

import PublishersForm from "../../components/publishers/PublishersForm";
import { stringifyDate } from "../../helpers/date";

interface IPublisherInputs {
  id?: number;
  names: string;
  joinedDate: string;
}

export const Manage: FC<{ navigation: any }> = ({ navigation }) => {
  const publishersCtx = useContext(PublishersContext);
  const goBack = () => navigation.goBack();
  
  //create/ update publisher
  const managePublisherHandler = async (values: IPublisherInputs) => {
    const data: IPublisherInputs = {
      names: values.names,
      joinedDate: stringifyDate(values.joinedDate),
    };
    try {
      const response = await createPublisher(data);
      const { newPublisher } = response;

      const createdPublisher = {
        id: newPublisher.id,
        names: newPublisher.names,
        joinedDate: newPublisher.joinedDate,
        _count: {
          newsPapers: 0,
        },
      };
      publishersCtx.addPublisher(createdPublisher);
      navigation.navigate("publishers");
    } catch (error) {}
  };

  return (
    <AppContainer>
      <AppBar
        title="ADD PUBLISHER"
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
        <PublishersForm onManagePublisher={managePublisherHandler} />
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
