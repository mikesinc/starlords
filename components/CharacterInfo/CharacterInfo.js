import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class CharacterInfo extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Image style={{marginLeft: 5, width: 70, height: 70, borderRadius: 35, alignSelf: 'center'}} source={require('../../assets/images/char.jpg')} />
            
            <View style={styles.characterCard}>
                <Text style={styles.characterDetails}>
                    <Text>Name: Alex Nguyen</Text>
                </Text>
                <Text style={styles.characterDetails}>
                    <Text>Race: The Ark</Text>
                </Text>
                <Text style={styles.characterDetails}>
                    <Text>Homeworld: Earth</Text>
                </Text>
                <Text style={styles.characterDetails}>
                    <Text>Wallet: 2 Credits</Text>
                </Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderTopLeftRadius: 35,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'black',
    },
    characterCard: {
        flexBasis: '80%',
        padding: 5,
      },
    characterDetails: {
        fontSize: 14,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'gold',
        padding: 2,
      },
});

export default CharacterInfo;