import React, {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {primaryBgColor, secondaryBgColor} from '../../../styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Background = ({children}: Props) => {
  const [{width: deviceWidth, height: deviceHeight}, setCurrentDimensions] =
    useState<ScaledSize>(Dimensions.get('window'));

  useEffect(() => {
    const listener = Dimensions.addEventListener('change', () => {
      setCurrentDimensions(Dimensions.get('window'));
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <RadialGradient
      style={{
        width: deviceWidth,
        height: deviceHeight,
      }}
      colors={[primaryBgColor, secondaryBgColor]}
      center={[deviceWidth / 2, deviceHeight / 2]}
      radius={Math.max(deviceWidth, deviceHeight)}
      stops={[0.08, 0.75]}>
      {children}
    </RadialGradient>
  );
};

export default Background;
