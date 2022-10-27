import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
    return (

        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
