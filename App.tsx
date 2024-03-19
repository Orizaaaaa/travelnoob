
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import { useFonts } from 'expo-font';
import OnboardScreen from './screens/onboard/OnboardScreen';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/signUp/SignUpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'home') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'ios-list' : 'ios-list-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={'home'} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#24BAEC',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#FFFFFF',
      elevation: 0,
    }

  })} >

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
        <Tab.Screen name="login" component={LoginScreen} />
        <Tab.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="MainScreen" component={MainTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}