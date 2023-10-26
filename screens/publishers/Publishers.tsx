import { FC, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { PublishersContext } from "../../context/PublishersContext";

import {
  AppText,
  AppContainer,
  AppBar,
  AppIndicator,
} from "../../components/UI";
import { GlobalStyles } from "../../constants/styles";
import AppError from "../../components/UI/AppError";

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
          publishers.map((publisher) => (
            <AppText key={publisher.id}>{publisher.names}</AppText>
          ))
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
    padding: 12
  }
});
