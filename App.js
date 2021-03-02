import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import GameScreen from './components/Game/GameScreen.js'
import GameScreen2 from './components/Game/GameScreen2.js'
import GameScreen3 from './components/Game/GameScreen3.js'
import GameScreen4 from './components/Game/GameScreen4.js'
import GameScreen5 from './components/Game/GameScreen5.js'
import GameScreen6 from './components/Game/GameScreen6.js'
import GameScreen7 from './components/Game/GameScreen7.js'
import TextSearchScreen from './components/TextSearch/TextSearchScreen.js'
import ImageSearchScreen from './components/ImageSearch/ImageSearchScreen.js'
import ImageSearchScreen2 from './components/ImageSearch/ImageSearchScreen2.js'
import PlantGardenScreen from './components/PlantGarden/PlantGardenScreen.js'
import SettingScreen from './components/Setting/SettingScreen.js'

export default function App() {
  const Stack = createStackNavigator();
  return (

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Game2" component={GameScreen2} />
        <Stack.Screen name="Game3" component={GameScreen3} />
        <Stack.Screen name="Game4" component={GameScreen4} />
        <Stack.Screen name="Game5" component={GameScreen5} />
        <Stack.Screen name="Game6" component={GameScreen6} />
        <Stack.Screen name="Game7" component={GameScreen7} />
        <Stack.Screen name="TextSearch" component={TextSearchScreen} />
        <Stack.Screen name="ImageSearch" component={ImageSearchScreen} />
        <Stack.Screen name="ImageSearch2" component={ImageSearchScreen2} />
        {/* <Stack.Screen name="ImageSearch3" component={ImageSearchScreen3} />
        <Stack.Screen name="ImageSearch4" component={ImageSearchScreen4} />  */}
        <Stack.Screen name="PlantGarden" component={PlantGardenScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />


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
