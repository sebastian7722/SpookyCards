import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import images from '../../../../assets/images';
import {useAppDispatch} from '../../../../hooks/use-redux';
import {primaryFontColor, secondaryFontColor} from '../../../../styles';
import {cardAnimationToBackDone, flipCard, ICard} from '../cards.slice';

const Card = (props: ICard) => {
  const {id, name, isFlipped, cardWidth} = props;
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

  const flipCardToBack = () => {
    Animated.timing(cardFlipAnimationValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      dispatch(cardAnimationToBackDone());
    });
  };

  const flipCardToFront = () => {
    Animated.timing(cardFlipAnimationValue, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFlipped) {
      flipCardToBack();
    } else {
      flipCardToFront();
    }
  }, [isFlipped]);

  const cardClickHandler = () => {
    dispatch(flipCard(id));
  };

  const cardBaseStyle = {
    width: cardWidth,
    height: cardWidth * 1.4,
  };

  const cobwebBaseStyle = {
    width: cardWidth * 0.35,
    height: cardWidth * 0.35,
  };

  const spiderBaseStyle = {
    width: cardWidth * 0.7,
    height: cardWidth * 0.7 * 1.4,
  };

  const cardValueBaseStyle = {
    transform: [{scale: cardWidth * 0.007}],
  };

  return (
    <TouchableWithoutFeedback onPress={cardClickHandler}>
      <View style={[styles.card, cardBaseStyle]}>
        <Animated.View
          style={[
            styles['card-face'],
            styles['card-back'],
            {transform: [{rotateY: cardBackTranslationValue}]},
          ]}>
          <Image
            style={[cobwebBaseStyle, styles['cobweb-top-left']]}
            source={images.cobweb}></Image>
          <Image
            style={[cobwebBaseStyle, styles['cobweb-top-right']]}
            source={images.cobweb}></Image>
          <Image
            style={[cobwebBaseStyle, styles['cobweb-bottom-left']]}
            source={images.cobweb}></Image>
          <Image
            style={[cobwebBaseStyle, styles['cobweb-bottom-right']]}
            source={images.cobweb}></Image>
          <Image
            style={[spiderBaseStyle, styles.spider]}
            source={images.spider}></Image>
        </Animated.View>
        <Animated.View
          style={[
            styles['card-face'],
            styles['card-front'],
            {transform: [{rotateY: cardFrontTranslationValue}]},
          ]}>
          <Image
            style={[cobwebBaseStyle, styles['cobweb-top-left']]}
            source={images.cobwebGray}></Image>
          <Image
            style={[cobwebBaseStyle, styles['cobweb-top-right']]}
            source={images.cobwebGray}></Image>
          <Image
            style={[cobwebBaseStyle, styles['cobweb-bottom-left']]}
            source={images.cobwebGray}></Image>
          <Image
            style={[cobwebBaseStyle, styles['cobweb-bottom-right']]}
            source={images.cobwebGray}></Image>
          <Image style={cardValueBaseStyle} source={images[name]}></Image>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
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
  'cobweb-top-left': {
    position: 'absolute',
    transform: [{rotate: '270deg'}],
    top: 0,
    left: 0,
  },
  'cobweb-top-right': {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  'cobweb-bottom-left': {
    position: 'absolute',
    transform: [{rotate: '180deg'}],
    bottom: 0,
    left: 0,
  },
  'cobweb-bottom-right': {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    bottom: 0,
    right: 0,
  },
  spider: {
    alignSelf: 'center',
  },
});

export default Card;
