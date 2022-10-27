import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Square from '../Square';

export default function Row({ rows, score, setScore, nutCount, setNutCount, nutsLeft }) {

    const numOfRows = [...Array(rows).keys()]

    return(
        <View style={{flex: 1}}>
            {numOfRows.map((square, idx) => <Square key={idx} score={score} setScore={setScore} nutCount={nutCount} setNutCount={setNutCount} nutsLeft={nutsLeft}/>)}
        </View>
    )
}


