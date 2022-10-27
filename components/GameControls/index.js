import Start from "./Start";
import Reset from "./Reset";
import { View, StyleSheet } from "react-native";

export default function GameControls() {
    return (
        <View style={styles.controls}>
            <Start/>
            <Reset/>
        </View>
    )
}

const styles = StyleSheet.create({
    controls: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
  });
