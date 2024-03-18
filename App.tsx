
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import { useFonts } from 'expo-font';
import OnboardScreen from './screens/onboard/OnboardScreen';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/signUp/SignUpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="login" component={LoginScreen} />
    <Tab.Screen name="signup" component={SignUpScreen} />
    <Tab.Screen name="home" component={HomeScreen} />
  </Tab.Navigator>
);

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
        <Stack.Screen name="onboard" component={OnboardScreen} />
        <Stack.Screen name="MainScreen" component={MainTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}