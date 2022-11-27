import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {secondaryFontColor} from '../../../styles';
import {useAppSelector} from '../../../hooks/use-redux';
import {selectStatistics} from './statistics.slice';

const GameStats = () => {
  const {time, flips} = useAppSelector(selectStatistics);

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
