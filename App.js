
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from './Screens/Login';
import Starting from './Screens/Starting';
import Signup from "./Screens/Signup";



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">

        <Stack.Screen name="Start" component={Starting} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        


      </Stack.Navigator>

    </NavigationContainer>
  );
}


