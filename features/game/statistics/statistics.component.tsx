import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useGameTime} from '../../../hooks/use-game-time';
import {useAppSelector} from '../../../hooks/use-redux';
import {secondaryFontColor} from '../../../styles';
import {selectFlips} from '../cards/cards.slice';

const GameStats = () => {
  const flips = useAppSelector(selectFlips);
  const time = useGameTime();

  return (
    <View style={styles.header}>
      <Text style={styles['sub-heading']}>Time {time}</Text>
      <Text style={styles['sub-heading']}>Flips {flips}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'sub-heading': {
    fontSize: 42,
    fontFamily: 'Lunacy',
    color: secondaryFontColor,
  },
});

export default GameStats;
