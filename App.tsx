import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Game from './components/Game';
import RadialBackground from './components/RadialBackground';
import {primaryFontColor} from './styles';

const App = () => {
  return (
    <SafeAreaView>
      <RadialBackground>
        <ScrollView>
          <Game />
        </ScrollView>
        <View style={styles['game-overlay']}>
          <Text style={styles['game-overlay-text']}>Click to start</Text>
        </View>
      </RadialBackground>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  'game-overlay': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'none',
  },
  'game-overlay-text': {
    fontSize: 65,
    fontFamily: 'Creepy',
    color: primaryFontColor,
  },
});
