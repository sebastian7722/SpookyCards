import {ImageSourcePropType} from 'react-native';

type Image = {
  name: string;
  image: ImageSourcePropType;
};

const images: Image[] = [
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

export const getImage = (imageName: string) =>
  images.find(image => image.name === imageName)?.image;

export default images;
