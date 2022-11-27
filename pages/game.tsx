import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Cards from '../features/game/cards';
import Overlay from '../features/game/overlay';
import GameStatistics from '../features/game/statistics';
import RadialBackground from '../features/ui/radial-background';

const Game = () => {
  return (
    <RadialBackground>
      <ScrollView>
        <View style={styles.container}>
          <GameStatistics />
          <View style={styles['cards-wrapper']}>
            <Cards />
          </View>
        </View>
      </ScrollView>
      <Overlay />
    </RadialBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 26,
    flexGrow: 1,
  },
  'cards-wrapper': {},
});

export default Game;
