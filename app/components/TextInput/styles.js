import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$lightOrange',
    width: '75%',
    height: INPUT_HEIGHT,
    alignItems: 'center',
    marginVertical: 11,
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    paddingHorizontal: 20,
    color: '$white',
    alignItems: 'center',
    fontSize: 18,
  },
});
