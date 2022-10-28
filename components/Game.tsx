import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {primaryFontColor, secondaryFontColor} from '../styles';
import Card from './Card';

const Game = () => {
  const timeRemaining = 100;
  const flipsTotal = 0;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles['sub-heading']}>Time {timeRemaining}</Text>
        <Text style={styles['sub-heading']}>Flips {flipsTotal}</Text>
      </View>
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
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    margin: 26,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'sub-heading': {
    fontSize: 42,
    fontFamily: 'Lunacy',
    color: secondaryFontColor,
  },
  'cards-container': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: -5,
  },
});
