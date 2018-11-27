import React from 'react';
import { Header } from 'react-native-elements';
import styles from './styles';

const MainMenuHeader = () => (
  <Header
    backgroundColor={styles.header.backgroundColor}
    leftComponent={{ icon: 'keyboard-arrow-left', color: 'white', margin: -3 }}
    centerComponent={{ text: 'Main Menu', style: { color: 'white' } }}
    rightComponent={{ icon: 'notifications', color: 'white', margin: -3 }}
  />
);

export default MainMenuHeader;
