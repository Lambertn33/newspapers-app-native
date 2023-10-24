import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppText from "./components/AppText";

export default function App() {
  return (
    <View style={styles.container}>
      <AppText additionalStyles={{fontSize: 24}}>Hello world</AppText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
