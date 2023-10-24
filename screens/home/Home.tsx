import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { AppContainer, AppText, AppButton } from "../../components/UI";

const Home: FC<{ navigation: any }> = ({ navigation }) => {
  const navigate = () => navigation.navigate("Tabs");

  return (
    <AppContainer additionalStyles={styles.container}>
      <View style={styles.content}>
        <AppText labelStyles={styles.title}>Newspapers App</AppText>
        <AppText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ratione
          possimus alias suscipit atque, id, neque nisi nam sapiente iure ut, in
          dolores quo eius enim maiores blanditiis consequuntur veritatis.
        </AppText>
        <AppButton
          onPress={navigate}
          buttonStyles={styles.button}
          labelStyles={styles.buttonLabel}
        >
          START
        </AppButton>
      </View>
    </AppContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    gap: 24,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 20,
  },
});
