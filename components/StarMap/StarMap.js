import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

const planetNum = Math.floor(Math.random() * 6 + 1);

const generatePlanets = () => {
    let planets = [];
    for(i = 0; i < planetNum; i++) {
        let planetGraphic = Math.floor(Math.random() * 6 + 1);
        planets.push(<Planet key={i} planet={i+1} planetGraphic={planetGraphic}/>);
    }
    return planets;
}

class Planet extends Component {
    render() {
        const getPlanetGraphic = () => {
            switch (this.props.planetGraphic) {
                case 1: 
                return planetSrc = require('../../assets/images/Planets/planet1.jpg')
                case 2: 
                return planetSrc = require('../../assets/images/Planets/planet2.jpg')
                case 3: 
                return planetSrc = require('../../assets/images/Planets/planet3.jpg')
                case 4: 
                return planetSrc = require('../../assets/images/Planets/planet4.jpg')
                case 5: 
                return planetSrc = require('../../assets/images/Planets/planet5.jpg')
                case 6: 
                return planetSrc = require('../../assets/images/Planets/planet6.jpg')
            }
        }
        getPlanetGraphic();      
        return (
            <ImageBackground style={styles.planetImage} imageStyle={{borderRadius: 25, borderWidth: 1, borderColor:'black',}} source={planetSrc}>
                <View style={styles.planet}>
                    <Text style={styles.planetText}>Planet {this.props.planet}</Text>
                </View>
            </ImageBackground>
        )
    }
}

class StarMap extends Component {
    render() {
        const getSystemGraphic = () => {
            switch (planetNum) {
                case 1: 
                return systemSrc = require('../../assets/images/SolarSystems/system1.jpg')
                case 2: 
                return systemSrc = require('../../assets/images/SolarSystems/system2.jpg')
                case 3: 
                return systemSrc = require('../../assets/images/SolarSystems/system3.jpg')
                case 4: 
                return systemSrc = require('../../assets/images/SolarSystems/system4.jpg')
                case 5: 
                return systemSrc = require('../../assets/images/SolarSystems/system5.jpg')
                case 6: 
                return systemSrc = require('../../assets/images/SolarSystems/system6.jpg')
            }
        }
        getSystemGraphic();      
        return (
                <View style={styles.starMap}>
                    <ImageBackground style={styles.solarSystem} imageStyle={{borderRadius: 10,}} source={systemSrc}>
                        {generatePlanets()}
                    </ImageBackground> 
                </View>
             
        )
    }
}

const styles = StyleSheet.create({
    solarSystem: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    planetImage: {
        width: 50,
        height: 50,
        margin: 5,
    },
    starMap: {
        height: '62%',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
        margin: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderColor: 'black',
      },
    planet: {
        height: 50,
        width: 50,
        margin: 5,
    },
    planetText: {
        color: 'gold',
        fontSize: 12,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    },
});

export default StarMap;