import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Menu extends Component {
    render() {
        return (
            <View style={styles.menuContainer}>
                <Text style={styles.menuText}>MENU</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        flexBasis: '30%',
        borderTopRightRadius: 35,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderColor: 'black',
      },
    menuText: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'gold',
        fontSize: 26,
    }
});

export default Menu;