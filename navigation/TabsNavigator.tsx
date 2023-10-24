import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { NewsPapers, Publishers } from "../screens";

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Tabs.Screen
        name="publishers"
        component={Publishers}
        options={{
          title: "Publishers",
          tabBarLabel: "Publishers",
          tabBarActiveTintColor: "#fff",
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: "Poppins_600SemiBold",
          },
          tabBarIcon: () => (
            <FontAwesome name="newspaper-o" size={19} color="#fff" />
          ),
        }}
      />
      <Tabs.Screen
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
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
