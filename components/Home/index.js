import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Grid from '../Grid';
import GameControls from '../GameControls'
import GameInfo from '../GameInfo';
import { useState, useEffect } from 'react';

export default function Home() {
    const [score, setScore] = useState(0)
    const [nutCount, setNutCount] = useState(0)
    const [nutsLeft, setNutsLeft] = useState(true)

    useEffect(() => {
        if (nutCount === 0) {
            setNutsLeft(!nutsLeft)
        }
    }, [nutCount])

    return (
        <View style={styles.home}>
            <GameInfo score={score}/>
            <View style={styles.container}>
                <Grid columns={5} rows={5} score={score} setScore={setScore} nutCount={nutCount} setNutCount={setNutCount} nutsLeft={nutsLeft} />
            </View>
            <GameControls></GameControls>
        </View>
    )
}
    
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  home : {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center'
  }
});
