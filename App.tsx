
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import { useFonts } from 'expo-font';
import Onboard1 from './screens/onboard1';
import Onboard3 from './screens/onboard3';
import Onboard2 from './screens/onboard2';



const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Geometric': require('./assets/fonts/geometric-415-black-bt.ttf'),
    'Inter': require('./assets/fonts/Inter-VariableFont_slnt,wght.ttf'),
    'Gil': require('./assets/fonts/gil.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboard1" component={Onboard1} />
        <Stack.Screen name="onboard2" component={Onboard2} />
        <Stack.Screen name="onboard3" component={Onboard3} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}