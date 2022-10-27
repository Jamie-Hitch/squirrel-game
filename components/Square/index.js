import { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default function Square({ score, setScore, nutsLeft, nutCount, setNutCount }) {
    const [nut, setNut] = useState(Math.random() > 0.7);

    useEffect(() => {
        if (nut) {
            setNutCount(nutCount + 1)
        }
        setNut(Math.random() > 0.7)
    }, [nutsLeft])

    const handlePress = () => {
        console.log(typeof score)
        console.log(score)
        if (nut) {
            setScore(score + 1)
            setNutCount(nutCount - 1)
            setNut(false);
        }
    }

    return(
        <TouchableOpacity style={[styles.square]} onPress={handlePress}>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: 'green',
        flex: 1,
        borderColor: 'darkgreen',
        borderWidth: 5,
        margin: 3,
        borderRadius: 10
    }
})
