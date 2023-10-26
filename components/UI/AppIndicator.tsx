import { StyleSheet, View, ActivityIndicator } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const AppIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={60} color={GlobalStyles.colors.light} />
    </View>
  );
};

export default AppIndicator;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
});
