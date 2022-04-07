import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function SandBox() {
    return (
        <View style={styles.container}>
        <Text style={styles.boxOne}>one</Text>
        <Text style={styles.boxTwo}>two</Text>
        <Text style={styles.boxThree}>three</Text>
        <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

 const styles = StyleSheet.create({
     container: {
         flexDirection: 'row',
         justifyContent:'space-around',
         alignItems: 'flex-end',
         paddingTop: 40,
         backgroundColor: '#ddd'
     },
     boxOne:{
         flex:1,
         backgroundColor: 'violet',
         padding: 10
     },
     boxTwo: {
        flex:2,
         backgroundColor: 'gold',
         padding: 20
     },
     boxThree: {
        flex:1,
        backgroundColor: 'green',
        padding: 30
    },
    boxFour: {
        flex:3,
        backgroundColor: 'purple',
        padding: 40
    }
 })