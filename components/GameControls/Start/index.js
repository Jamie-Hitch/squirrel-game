import { TouchableOpacity, Text, StyleSheet } from "react-native"

export default function Start() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>START</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: 'darkgreen',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        borderRadius: 10,
        marginHorizontal: 5
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
  });

