import React from 'react'
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen2 from './GameScreen2.js'
export default function GameScreen({ navigation }) {
    const StackGame = createStackNavigator();
    <NavigationContainer>
        <StackGame.Navigator >
            <StackGame.Screen name="Game2" component={GameScreen2} />
        </StackGame.Navigator>
    </NavigationContainer>
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home GaMee</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go forward"
                onPress={() => navigation.navigate('Game2')}
            />
        </View>

    )
}
