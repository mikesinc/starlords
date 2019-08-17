import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

class Ress extends Component {
    render() {
        return (
            <View style={styles.resTab}>
                <Text style={{color: 'gold', fontSize: 24, fontFamily: 'monospace', fontWeight: 'bold', paddingBottom: 2}}>RESOURCES</Text>
                <FlatList 
                    data = {[
                        {key: `Res 1: [current] [income]`},
                        {key: 'Res 2: [current] [income]'},
                        {key: 'Res 3: [current] [income]'},
                        {key: 'Res 4: [current] [income]'},
                        {key: 'Res 5: [current] [income]'},
                        {key: 'Res 6: [current] [income]'},
                        {key: 'Res 7: [current] [income]'},
                        {key: 'Res 8: [current] [income]'},
                        {key: 'Res 9: [current] [income]'},
                        {key: 'Res 10: [current] [income]'},
                    ]}
                    renderItem = {({item}) => <Text style={styles.res}>{item.key}</Text>}
                />                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    resTab: {
        paddingTop: 20,
        flexBasis: '50%',
        height: 140,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderBottomLeftRadius: 30,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
      },
    res: {
        fontSize: 12,
        color: 'gold',
        padding: 5,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    }
});

export default Ress;