import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { NewsPapers, Publishers } from "../screens";

import { GlobalStyles } from "../constants/styles";

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="newspapers"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.dark,
        },
      }}
    >
      <Tabs.Screen
        name="newspapers"
        component={NewsPapers}
        options={{
          title: "Newspapers",
          tabBarLabel: "Newspapers",
          tabBarActiveTintColor: GlobalStyles.colors.light,
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: GlobalStyles.fontFamily,
          },
          tabBarIcon: () => (
            <Entypo
              name="publish"
              size={19}
              color={GlobalStyles.colors.light}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="publishers"
        component={Publishers}
        options={{
          title: "Publishers",
          tabBarLabel: "Publishers",
          tabBarActiveTintColor: GlobalStyles.colors.light,
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: GlobalStyles.fontFamily,
          },
          tabBarIcon: () => (
            <FontAwesome
              name="users"
              size={19}
              color={GlobalStyles.colors.light}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
