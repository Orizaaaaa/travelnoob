
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import { useFonts } from 'expo-font';
import OnboardScreen from './screens/onboard/OnboardScreen';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/signUp/SignUpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        return <AntDesign name="home" size={30} color={color} />
      } else if (route.name === 'login') {
        return (
          <View className='bg-primary p-4 rounded-full absolute bottom-4 border-2 border-gray-200' >
            <Feather name="search" size={25} color={'white'} />
          </View>
        )
      } else if (route.name === 'Profile') {
        return <FontAwesome name="user-o" size={30} color={color} />
      } else if (route.name === 'Message') {
        return <Ionicons name="chatbubble-ellipses-outline" size={30} color={color} />
      } else if (route.name === 'Calendar') {
        return <Ionicons name="calendar-outline" size={30} color={color} />
      }

    },

    tabBarActiveTintColor: '#24BAEC',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#FFFFFF',
      elevation: 0,
      height: 60,
    }
  })
  } >

    <Tab.Screen name="Home" component={HomeScreen} />
    {/* home */}
    {/* calendar */}
    {/* login */}
    {/* message */}
    {/* profile */}
    {/* <Tab.Screen name="Calendar" component={calendarScreen} />
    <Tab.Screen name="login" component={LoginScreen} options={{
      tabBarLabel: '',
    }} />
    <Tab.Screen name="Message" component={messagesScreen} />
    <Tab.Screen name="Profile" component={profileScreen} /> */}


  </Tab.Navigator >
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


const profileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

const messagesScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

const calendarScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

