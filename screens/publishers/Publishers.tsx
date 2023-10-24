import { FC } from "react";
import { StyleSheet } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { AppText, AppContainer, AppBar } from "../../components/UI";

const Publishers: FC<{ navigation: any }> = ({ navigation }) => {
  const goBack = () => navigation.navigate("Home");

  return (
    <AppContainer>
      <AppBar
        title="Publishers"
        actionIcon={<Entypo name="add-to-list" size={32} color="#fff" />}
        backIcon={
          <AntDesign name="back" size={32} color="#fff" onPress={goBack} />
        }
      />
      <AppText>Publishers</AppText>
    </AppContainer>
  );
};

export default Publishers;

const styles = StyleSheet.create({});
