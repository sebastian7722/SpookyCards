import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import images, {ImageDictionaryKeys} from '../infrastructure/imageSource';
import {primaryFontColor, secondaryFontColor} from '../styles';

type Props = {
  image: ImageDictionaryKeys;
};

const Card = ({image}: Props) => {
  const cardFlipAnimationValue = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState({value: 0, animating: false});

  const cardBackTranslationValue = cardFlipAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const cardFrontTranslationValue = cardFlipAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  const startCardFlipAnimation = () => {
    if (visible.animating) return;
    Animated.timing(cardFlipAnimationValue, {
      toValue: visible.value,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setVisible(({value}) => ({value, animating: false}));
    });
    setVisible(({value}) => ({value: value === 0 ? 1 : 0, animating: true}));
  };

  return (
    <TouchableWithoutFeedback onPress={startCardFlipAnimation}>
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

export default Card;

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
