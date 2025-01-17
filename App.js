import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Home';


const Stack = createNativeStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{headerShown:false}}  name="Home" component={HomeScreen} />
      </Stack.Navigator>  
    </NavigationContainer>

    
  );
}
