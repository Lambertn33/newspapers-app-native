import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { AppContainer, AppBar } from "../../components/UI";
import PublishersForm from "../../components/publishers/PublishersForm";
import { GlobalStyles } from "../../constants/styles";

export const Manage: FC<{ navigation: any }> = ({ navigation }) => {
  const goBack = () => navigation.goBack();
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
      <View>
        <PublishersForm />
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({});
