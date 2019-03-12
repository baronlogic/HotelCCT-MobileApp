import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$orange',
    width: '75%',
    height: INPUT_HEIGHT,
    alignItems: 'center',
    marginVertical: 11,
  },
  input: {
    width: '70%',
    marginHorizontal: '15%',
    alignItems: 'stretch',
  },
});
