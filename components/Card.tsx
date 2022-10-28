import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {getImage} from '../infrastructure/imageSource';
import {primaryFontColor, secondaryFontColor} from '../styles';

type Props = {
  image: string;
};

const Card = ({image}: Props) => {
  const cobwebImage = getImage('cobweb');
  const cobwebGrayImage = getImage('cobwebGray');
  const [visible, setVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setVisible(value => !value)}>
      <View style={[styles.card]}>
        <View
          style={[
            styles['card-face'],
            styles['card-back'],
            visible && {transform: [{rotateY: '-180deg'}]},
          ]}>
          <Image
            style={[styles.cobweb, styles['cobweb-top-left']]}
            source={cobwebImage}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-top-right']]}
            source={cobwebImage}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-bottom-left']]}
            source={cobwebImage}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-bottom-right']]}
            source={cobwebImage}></Image>
          <Image style={styles.spider} source={getImage('spider')}></Image>
        </View>
        <View
          style={[
            styles['card-face'],
            styles['card-front'],
            visible && {transform: [{rotateY: '0deg'}]},
          ]}>
          <Image
            style={[styles.cobweb, styles['cobweb-top-left']]}
            source={cobwebGrayImage}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-top-right']]}
            source={cobwebGrayImage}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-bottom-left']]}
            source={cobwebGrayImage}></Image>
          <Image
            style={[styles.cobweb, styles['cobweb-bottom-right']]}
            source={cobwebGrayImage}></Image>
          <Image style={styles['card-value']} source={getImage(image)}></Image>
        </View>
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
