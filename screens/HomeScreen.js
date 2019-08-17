import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import CharacterInfo from '../components/CharacterInfo/CharacterInfo.js';
import FleetSummary from '../components/FleetSummary/FleetSummary.js';
import StarMap from '../components/StarMap/StarMap.js';
import Resources from '../components/Resources/Resources.js';
import Menu from '../components/Menu/Menu.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground style={styles.backgroundImage} source={require('../assets/images/backdrop.jpg')}>
          <View style={styles.headerContainer}>
            <Resources />
            <FleetSummary />
          </View>
            <StarMap />
          <View style={styles.footerContainer}>
            <CharacterInfo />
            <Menu />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  footerContainer: {
    flexDirection: 'row',
  },
  // contentContainer: {
  //   paddingTop: 30,
  // },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // navigationFilename: {
  //   marginTop: 5,
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },
});
