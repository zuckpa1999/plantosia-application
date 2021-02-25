import { Button, Text, View } from 'react-native';
import React from 'react'
export default function ImageSearchScreen({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home feffefefef</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.goBack()}
            />
        </View>

    )
}
