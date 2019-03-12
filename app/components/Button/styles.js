import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  button: {
    backgroundColor: '$brown',
    width: 300,
    height: 45,
  },
  container: {
    marginVertical: 20,
  },
  textButton: {
    width: '70%',
    marginHorizontal: '15%',
    alignItems: 'stretch',
    marginVertical: '5%',
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
  fab: {
    paddingVertical: 45,
  },
});
