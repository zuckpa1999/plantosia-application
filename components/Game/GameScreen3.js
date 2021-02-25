import React from 'react'
import { Button, Text, View } from 'react-native';
export default function GameScreen3({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home GaMee33333</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>

    )
}
