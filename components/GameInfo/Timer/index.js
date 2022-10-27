import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react";

export default function Timer() {
    const [count, setCount] = useState('');
    const [isActive, setIsActive] = useState(false);

    function handlePress() {
        // setIsActive(true);
        setCount(60);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        if (count == 0) {
            clearInterval(timer)
        }
        return () => clearInterval(timer);
    }, [count])

    // useEffect(() => {
    //     const timer = null;
    //     if (isActive) {
    //             // let interval = null;
    //         timer = setInterval(() => {
    //             setCount(prev => {
    //                 if (prev === 1) {
    //                     clearInterval(timer)
    //                     setIsActive(false)
    //                 }
    //                 return prev - 1
    //               })
    //         }, 1000);
    //     }

    //     return () => clearInterval(timer);
    // }, [count])

    return (
        <View>
            <Text>Timer: {count}</Text>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'blue'}} onPress={handlePress}/>
        </View>
    )
}
