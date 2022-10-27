import { View, Text, StyleSheet } from "react-native"

export default function Score({ score }) {
 
    return (
        <View>
            <Text>Score: {score}</Text>
        </View>
    )
}
