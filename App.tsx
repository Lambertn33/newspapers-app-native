import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, FontAwesome } from "@expo/vector-icons";

import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import { Publishers, NewsPapers } from "./screens";

const BottomStack = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomStack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000'
          }
        }}
      >
        <BottomStack.Screen name="publishers" component={Publishers} options={{
           title: "Publishers",
           tabBarLabel: "Publishers",
           tabBarActiveTintColor: "#fff",
           tabBarLabelStyle: {
             fontSize: 14,
             fontFamily: "Poppins_600SemiBold",
           },
          tabBarIcon: () => <FontAwesome name="newspaper-o" size={19} color="#fff"  />
        }} />
        <BottomStack.Screen
          name="newspapers"
          component={NewsPapers}
          options={{
            title: "Newspapers",
            tabBarLabel: "Newspapers",
            tabBarActiveTintColor: "#fff",
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
            },
            tabBarIcon: () => <Entypo name="publish" size={19} color="#fff" />,
          }}
        />
      </BottomStack.Navigator>
    </NavigationContainer>
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
