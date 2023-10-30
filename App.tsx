import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { StackNavigator } from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import {
  PublishersContextProvider,
  NewspapersContextProvider,
} from "./context";
import { GlobalStyles } from "./constants/styles";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <PublishersContextProvider>
            <NewspapersContextProvider>
              <StackNavigator />
            </NewspapersContextProvider>
          </PublishersContextProvider>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: GlobalStyles.colors.medium },
});
