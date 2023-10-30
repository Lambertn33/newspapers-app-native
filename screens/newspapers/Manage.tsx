import { FC, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { AppBar, AppContainer } from "../../components/UI";
import { GlobalStyles } from "../../constants/styles";
import NewspapersForm from "../../components/newspapers/NewspapersForm";

export const Manage: FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const goBack = () => navigation.goBack();
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
      <View style={styles.formContainer}>
        <NewspapersForm  goBack={goBack}/>
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
