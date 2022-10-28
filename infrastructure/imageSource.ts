import {ImageSourcePropType} from 'react-native';

type ImageDeprecated = {
  name: string;
  image: ImageSourcePropType;
};

const imagesDeprecated: ImageDeprecated[] = [
  {name: 'bat', image: require('../assets/images/Bat.png')},
  {name: 'bones', image: require('../assets/images/Bones.png')},
  {name: 'cardBack', image: require('../assets/images/CardBack.png')},
  {name: 'cauldron', image: require('../assets/images/Cauldron.png')},
  {name: 'cobweb', image: require('../assets/images/Cobweb.png')},
  {name: 'cobwebGray', image: require('../assets/images/CobwebGray.png')},
  {name: 'dracula', image: require('../assets/images/Dracula.png')},
  {name: 'eye', image: require('../assets/images/Eye.png')},
  {name: 'ghost', image: require('../assets/images/Ghost.png')},
  {name: 'pumpkin', image: require('../assets/images/Pumpkin.png')},
  {name: 'skull', image: require('../assets/images/Skull.png')},
  {name: 'spider', image: require('../assets/images/Spider.png')},
];

export type ImageDictionaryKeys =
  | 'bat'
  | 'bones'
  | 'cardBack'
  | 'cauldron'
  | 'cobweb'
  | 'cobwebGray'
  | 'dracula'
  | 'eye'
  | 'ghost'
  | 'pumpkin'
  | 'skull'
  | 'spider';
type ImageDictionaryItem = Record<ImageDictionaryKeys, ImageSourcePropType>;

export const images: ImageDictionaryItem = {
  bat: require('../assets/images/Bat.png'),
  bones: require('../assets/images/Bones.png'),
  cardBack: require('../assets/images/CardBack.png'),
  cauldron: require('../assets/images/Cauldron.png'),
  cobweb: require('../assets/images/Cobweb.png'),
  cobwebGray: require('../assets/images/CobwebGray.png'),
  dracula: require('../assets/images/Dracula.png'),
  eye: require('../assets/images/Eye.png'),
  ghost: require('../assets/images/Ghost.png'),
  pumpkin: require('../assets/images/Pumpkin.png'),
  skull: require('../assets/images/Skull.png'),
  spider: require('../assets/images/Spider.png'),
};

export const getImage = (imageName: string) =>
  imagesDeprecated.find(image => image.name === imageName)?.image;

export default images;
