import React from 'react';
import { Header } from 'react-native-elements';
import styles from './styles';

const MainMenuHeader = () => (
  <Header
    backgroundColor={styles.header.backgroundColor}
    leftComponent={{ icon: 'menu', color: 'white' }}
    centerComponent={{ text: 'Main Menu', style: { color: 'white' } }}
    rightComponent={{ icon: 'home', color: 'white' }}
  />
);

export default MainMenuHeader;
