import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { AppText, AppButton } from "../../components/UI";

const Home: FC<{ navigation: any }> = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate("tabs");
  };

  return (
    <View style={styles.container}>
      <AppText>Home</AppText>
      <AppButton
        onPress={navigate}
        buttonStyles={{
          width: "80%",
          paddingVertical: 8,
        }}
        labelStyles={{
          fontSize: 20,
        }}
      >
        START
      </AppButton>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
