import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class FleetSummary extends Component {
    render() {
        return (
            <View style={styles.fleetSummary}>
                <Text style={{color: 'gold', fontSize: 24, fontFamily: 'monospace', fontWeight: 'bold', paddingBottom: 2}}>FLEETS</Text>
                <FlatList 
                    data = {[
                        {key: `Fleet 1: [task] [duration]`},
                        {key: `Fleet 2: [task] [duration]`},
                        {key: `Fleet 3: [task] [duration]`},
                        {key: `Fleet 4: [task] [duration]`},
                        {key: `Fleet 5: [task] [duration]`},
                        {key: `Fleet 6: [task] [duration]`},
                        {key: `Fleet 7: [task] [duration]`},
                        {key: `Fleet 8: [task] [duration]`},
                        {key: `Fleet 9: [task] [duration]`},
                        {key: `Fleet 10: [task] [duration]`},
                    ]}
                    renderItem = {({item}) => <Text style={styles.fleetDetails}>{item.key}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fleetSummary: {
        paddingTop: 20,
        flexBasis: '50%',
        height: 140,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderBottomRightRadius: 30,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: 'black',
      },
    fleetDetails: {
        fontSize: 12,
        color: 'gold',
        padding: 5,
        fontFamily: 'monospace',
        fontWeight: 'bold',
      },
});

export default FleetSummary;