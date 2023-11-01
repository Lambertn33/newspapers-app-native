import { FC, useContext } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { NewspapersContext } from "../../context/NewspapersContext";

import {
  AppContainer,
  AppText,
  AppBar,
  AppIndicator,
  AppError,
} from "../../components/UI";
import { GlobalStyles } from "../../constants/styles";
import NewspapersList from "../../components/newspapers/NewspapersList";

const NewsPapers: FC<{ navigation: any }> = ({ navigation }) => {
  const { error, loading, newspapers } = useContext(NewspapersContext);
  const goBack = () => navigation.navigate("Home");

  const manageNewspaper = () => {
    navigation.navigate("manageNewspaper");
  };

  return (
    <AppContainer>
      <AppBar
        title="Newspapers"
        actionIcon={
          <Entypo
            name="add-to-list"
            size={32}
            color={GlobalStyles.colors.light}
            onPress={manageNewspaper}
          />
        }
        backIcon={
          <AntDesign
            name="back"
            size={32}
            color={GlobalStyles.colors.light}
            onPress={goBack}
          />
        }
      />
      <SafeAreaView style={styles.container}>
        {loading ? (
          <AppIndicator />
        ) : error !== null ? (
          <AppError error="We couldn't fetch the publishers..." />
        ) : newspapers.length > 0 ? (
          <ScrollView>
            <NewspapersList newspapers={newspapers} />
          </ScrollView>
        ) : (
          <View style={styles.emptyList}>
            <AppText>No newspapers available</AppText>
          </View>
        )}
      </SafeAreaView>
    </AppContainer>
  );
};

export default NewsPapers;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
