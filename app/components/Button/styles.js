import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  button: {
    backgroundColor: '$darkOrange',
  },
  container: {
    marginVertical: 20,

  },
  textButton: {
    width: '75%',
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
