import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import FirstPage from './screen/FirstPage';
import SecondPage from './screen/SecondPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='FirstPage'
     screenOptions={{headerShown:false}
    }
    >

      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
