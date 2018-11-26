import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  button: {
    backgroundColor: '$darkOrange',
  },
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '$black',
    fontSize: 18,
    paddingVertical: 20,
    fontWeight: '400',
  },
});
