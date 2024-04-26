import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import notScreen from "../screens/noticiaScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigatior() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Noticia" component={notScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
