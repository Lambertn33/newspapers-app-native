import { FC } from "react";
import { StyleSheet, View, Image } from "react-native";

import { AppContainer, AppText, AppButton } from "../../components/UI";
import { GlobalStyles } from "../../constants/styles";

const Home: FC<{ navigation: any }> = ({ navigation }) => {
  const image = require("../../assets/images/newspapers.png");
  const navigate = () => navigation.navigate("Tabs");

  return (
    <AppContainer>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View>
          <AppText labelStyles={styles.title}>Newspapers App</AppText>
          <AppText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ratione
            possimus alias suscipit atque, id, neque nisi nam sapiente iure ut,
            in dolores quo eius enim maiores blanditiis consequuntur veritatis.
          </AppText>
          <AppText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ratione
            possimus alias suscipit atque, id, neque nisi nam sapiente iure ut,
            in dolores quo eius enim maiores blanditiis consequuntur veritatis.
          </AppText>
        </View>
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
  imageContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.semilight,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 16,
    marginTop: -40,
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.dark,
    justifyContent: 'space-between',
    gap: 24,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 32,
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
