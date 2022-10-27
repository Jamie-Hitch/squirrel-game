import { View , StyleSheet } from "react-native";

import Row from "../Row"

export default function Grid({ columns, rows, score, setScore, nutCount, setNutCount, nutsLeft }) {

    console.log(columns)
    
    const numOfCols = [...Array(columns).keys()]
    console.log(numOfCols)

    
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            {numOfCols.map((elem, index) => <Row key={index} rows={rows} score={score} setScore={setScore} nutCount={nutCount} setNutCount={setNutCount} nutsLeft={nutsLeft}></Row>)}
        </View>
    )
}
