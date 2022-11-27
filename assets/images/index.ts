import {ImageSourcePropType} from 'react-native';

interface IImages {
  [key: string]: ImageSourcePropType;
}

const images: IImages = {
  bat: require('./Bat.png'),
  bones: require('./Bones.png'),
  cardBack: require('./CardBack.png'),
  cauldron: require('./Cauldron.png'),
  cobweb: require('./Cobweb.png'),
  cobwebGray: require('./CobwebGray.png'),
  dracula: require('./Dracula.png'),
  eye: require('./Eye.png'),
  ghost: require('./Ghost.png'),
  pumpkin: require('./Pumpkin.png'),
  skull: require('./Skull.png'),
  spider: require('./Spider.png'),
};

export default images;
