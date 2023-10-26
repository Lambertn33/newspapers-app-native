import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { StackNavigator } from "./navigation";

import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import { PublishersContextProvider } from "./context";
import { GlobalStyles } from "./constants/styles";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <PublishersContextProvider>
          <StackNavigator />
        </PublishersContextProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: GlobalStyles.colors.medium },
});
