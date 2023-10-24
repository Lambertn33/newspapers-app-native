import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
