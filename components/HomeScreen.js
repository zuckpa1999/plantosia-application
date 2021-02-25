import React from 'react'
import { Button, Text, View } from 'react-native';
export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="button"
                onPress={() => navigation.navigate('Game')}
            />
            <Button
                title="button"
                onPress={() => navigation.navigate('TextSearch')}
            />
            <Button
                title="button"
                onPress={() => navigation.navigate('ImageSearch')}
            />
            <Button
                title="button"
                onPress={() => navigation.navigate('PlantGarden')}
            />
            <Button
                title="button"
                onPress={() => navigation.navigate('Setting')}
            />
        </View>
    )
}

