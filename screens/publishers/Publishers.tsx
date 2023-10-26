import { FC, useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { PublishersContext } from "../../context/PublishersContext";

import {
  AppText,
  AppContainer,
  AppBar,
  AppIndicator,
  AppError,
} from "../../components/UI";

import PublishersList from "../../components/publishers/PublishersList";
import { GlobalStyles } from "../../constants/styles";

const Publishers: FC<{ navigation: any }> = ({ navigation }) => {
  const { loading, error, publishers } = useContext(PublishersContext);

  const goBack = () => navigation.navigate("Home");

  return (
    <AppContainer>
      <AppBar
        title="Publishers"
        actionIcon={
          <Entypo
            name="add-to-list"
            size={32}
            color={GlobalStyles.colors.light}
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
      <View style={styles.container}>
        {loading ? (
          <AppIndicator />
        ) : error !== null ? (
          <AppError error="We couldn't fetch the publishers..." />
        ) : publishers.length > 0 ? (
          <ScrollView>
            <PublishersList publishers={publishers} />
          </ScrollView>
        ) : (
          <AppText>No publishers available</AppText>
        )}
      </View>
    </AppContainer>
  );
};

export default Publishers;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
