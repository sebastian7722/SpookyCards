import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../card';
import images, {IImages} from '../../../assets/images';

const Cards = () => {
  const availableCardImages: string[] = [
    'bat',
    'bones',
    'cauldron',
    'dracula',
    'eye',
    'ghost',
    'pumpkin',
    'skull',
  ];

  const cardDeck: string[] = Array(2).fill(availableCardImages).flat();
  const shuffledCardDeck = shuffle(cardDeck);

  return (
    <View style={styles['cards-container']}>
      {shuffledCardDeck.map((cardName, index) => (
        <Card image={cardName} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  'cards-container': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: -5,
  },
});

function shuffle(array: any[]) {
  let currentIndex: number = array.length;
  let randomIndex: number = 0;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default Cards;
