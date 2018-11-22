import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: imageWidth,
  },
  textPrimary: {
    color: '$black',
    fontSize: 28,
    letterSpacing: -0.5,
    fontWeight: '600',
  },
  textSecondary: {
    color: '$black',
    fontSize: 16,
    letterSpacing: -0.5,
    fontWeight: '400',
  },
});
