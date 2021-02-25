import React from 'react'
import { Button, Text, View } from 'react-native';

export default function GameScreen2({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home GaMee222</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go forward"
                onPress={() => navigation.navigate('Game3')}
            />
        </View>

    )
}
