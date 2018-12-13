import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    marginLeft: 15,
    width: '93%',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#41311E',
    padding: 20,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
  content: {
    padding: 20,
    backgroundColor: '#EF7C2C',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
});
