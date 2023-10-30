import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  Publisher,
  PublisherManage,
  NewsPaper,
  NewspapersManage,
} from "../screens";
import TabsNavigator from "./TabsNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="publisher" component={Publisher} />
      <Stack.Screen name="newspaper" component={NewsPaper} />
      <Stack.Screen
        name="managePublisher"
        component={PublisherManage}
        options={{
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="manageNewspaper"
        component={NewspapersManage}
        options={{
          animation: "fade_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
