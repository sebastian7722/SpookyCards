import React, {useEffect, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-redux';
import {primaryFontColor} from '../../../styles';
import {resetCards} from '../cards/cards.slice';
import {selectOverlay, setVisibility} from './overlay.slice';

const Overlay = () => {
  const {isVisible, title, subtitle} = useAppSelector(selectOverlay);
  const dispatch = useAppDispatch();

  const containerAnimationValue = useRef(new Animated.Value(1)).current;

  const animateOverlay = () => {
    Animated.timing(containerAnimationValue, {
      toValue: isVisible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      dispatch(setVisibility(false));
    });
  };

  useEffect(() => {
    if (isVisible) {
      dispatch(resetCards());
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <TouchableWithoutFeedback onPress={animateOverlay}>
          <Animated.View
            style={[
              styles['game-overlay'],
              {
                opacity: containerAnimationValue,
              },
            ]}>
            <Text style={[styles['main-text']]}>{title}</Text>
            {subtitle && (
              <Text style={styles['subtitle-text']}>{subtitle}</Text>
            )}
          </Animated.View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  'game-overlay': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  'main-text': {
    fontSize: 65,
    fontFamily: 'Creepy',
    color: primaryFontColor,
  },
  'subtitle-text': {
    fontSize: 26,
    fontFamily: 'Creepy',
    color: primaryFontColor,
  },
});

export default Overlay;
