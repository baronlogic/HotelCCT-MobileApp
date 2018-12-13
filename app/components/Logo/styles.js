import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: imageWidth,
  },
});
