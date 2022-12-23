import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../hooks/use-redux';
import ViewWithDimensions from '../../ui/view-with-dimensions';
import {setVictory} from '../overlay/overlay.slice';
import Card from './card';
import {selectCards} from './cards.slice';

const Cards = () => {
  const cards = useAppSelector(selectCards);
  const dispatch = useDispatch();

  useEffect(() => {
    const allCardsTurned = cards.every(x => x.isFlipped);

    if (allCardsTurned) {
      dispatch(setVictory());
    }
  }, [cards]);

  const [{width}, setDimensions] = useState<{
    height: number;
    width: number;
  }>({width: 0, height: 0});

  return (
    <ViewWithDimensions
      style={styles['cards-container']}
      onDimensions={setDimensions}>
      {cards.map(cardProps => {
        const cardWidth = (width - 42) / 4;
        return <Card key={cardProps.id} {...cardProps} cardWidth={cardWidth} />;
      })}
    </ViewWithDimensions>
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

export default Cards;
