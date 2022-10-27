import { View , StyleSheet } from "react-native"

import Timer from './Timer'
import Score from './Score'

export default function GameInfo({ score }) {
    return (
        <View>
            <Timer/>
            <Score score={score}/>
        </View>
    )
}
