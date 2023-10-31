import { FC, useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { addNewsPaper } from "../../api/api";

import { AppBar, AppContainer } from "../../components/UI";
import NewspapersForm from "../../components/newspapers/NewspapersForm";

import { GlobalStyles } from "../../constants/styles";

export const Manage: FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const goBack = () => navigation.goBack();

  const createNewsPaperHandler = async (values: any) => {
    console.log(values);
    try {
      const response = await addNewsPaper(values);
      console.log(response);
    } catch (error) {
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
