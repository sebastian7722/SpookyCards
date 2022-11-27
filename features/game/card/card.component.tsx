import React, {useRef} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import images from '../../../assets/images';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-redux';
import {primaryFontColor, secondaryFontColor} from '../../../styles';
import {incrementFlips} from '../statistics/statistics.slice';
import {selectCard, setIsAnimating, setIsFront} from './card.slice';

interface ICardProps {
  image: string;
}

const Card = ({image}: ICardProps) => {
  const {isFront, isAnimating} = useAppSelector(selectCard);
  const dispatch = useAppDispatch();

  const cardFlipAnimationValue = useRef(new Animated.Value(0)).current;

  const cardBackTranslationValue = cardFlipAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const cardFrontTranslationValue = cardFlipAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  console.log(isFront);

  const startCardFlipAnimation = () => {
    dispatch(setIsAnimating(true));
    Animated.timing(cardFlipAnimationValue, {
      toValue: isFront ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      dispatch(setIsAnimating(false));
      dispatch(incrementFlips());
    });
  };

  const cardFlipHandler = () => {
    if (isAnimating) return;
    startCardFlipAnimation();
  };

  return (
    <TouchableWithoutFeedback onPress={cardFlipHandler}>
      <View style={[styles.card]}>
        <Animated.View
          style={[
            styles['card-face'],
            styles['card-back'],
            {transform: [{rotateY: cardBackTranslationValue}]},
          ]}>
          <Image
            style={[styles.cobweb, styles['cobweb-top-left']]}
            source={images.cobweb}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-top-right']]}
            source={images.cobweb}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-bottom-left']]}
            source={images.cobweb}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-bottom-right']]}
            source={images.cobweb}></Image>
          <Image style={styles.spider} source={images.spider}></Image>
        </Animated.View>
        <Animated.View
          style={[
            styles['card-face'],
            styles['card-front'],
            {transform: [{rotateY: cardFrontTranslationValue}]},
          ]}>
          <Image
            style={[styles.cobweb, styles['cobweb-top-left']]}
            source={images.cobwebGray}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-top-right']]}
            source={images.cobwebGray}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-bottom-left']]}
            source={images.cobwebGray}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-bottom-right']]}
            source={images.cobwebGray}></Image>
          <Image style={styles['card-value']} source={images[image]}></Image>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    minWidth: 100,
    minHeight: 140,
    margin: 5,
  },
  'card-face': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    borderRadius: 9.6,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  'card-back': {
    backgroundColor: '#000',
    borderColor: primaryFontColor,
  },
  'card-front': {
    transform: [{rotateY: '180deg'}],
    backgroundColor: secondaryFontColor,
    justifyContent: 'center',
  },
  cobweb: {
    position: 'absolute',
    width: 37.6,
    height: 37.6,
  },
  'cobweb-top-left': {
    transform: [{rotate: '270deg'}],
    top: 0,
    left: 0,
  },
  'cobweb-top-right': {
    top: 0,
    right: 0,
  },
  'cobweb-bottom-left': {
    transform: [{rotate: '180deg'}],
    bottom: 0,
    left: 0,
  },
  'cobweb-bottom-right': {
    transform: [{rotate: '90deg'}],
    bottom: 0,
    right: 0,
  },
  spider: {
    transform: [{translateY: -18}, {scale: 0.8}],
  },
  'card-value': {
    transform: [{scale: 0.7}],
  },
});

export default Card;
