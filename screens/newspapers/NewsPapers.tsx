import { FC } from "react";
import { StyleSheet} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { AppContainer, AppText, AppBar } from "../../components/UI";

const NewsPapers: FC<{ navigation: any }> = ({ navigation }) => {
  const goBack = () => navigation.navigate("Home");

  return (
    <AppContainer>
      <AppBar
        title="Newspapers"
        actionIcon={<Entypo name="add-to-list" size={32} color="#fff" />}
        backIcon={
          <AntDesign name="back" size={32} color="#fff" onPress={goBack} />
        }
      />
      <AppText>NewsPapers</AppText>
    </AppContainer>
  );
};

export default NewsPapers;

const styles = StyleSheet.create({});
