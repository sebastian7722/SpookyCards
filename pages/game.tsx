import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Card from '../features/game/card';
import Overlay from '../features/game/overlay';
import GameStatistics from '../features/game/statistics';
import RadialBackground from '../features/ui/radial-background';

const Game = () => {
  return (
    <RadialBackground>
      <ScrollView>
        <View style={styles.container}>
          <GameStatistics />
          <View style={styles['cards-container']}>
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
            <Card image="bat" />
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
  },
  'cards-container': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: -5,
  },
});

export default Game;
