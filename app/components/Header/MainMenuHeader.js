import PropTypes from 'prop-types';
import React from 'react';
import { Header } from 'react-native-elements';
import styles from './styles';

const MainMenuHeader = ({ title }) => (
  <Header
    backgroundColor={styles.header.backgroundColor}
    leftComponent={{ icon: 'keyboard-arrow-left', color: 'white', margin: -3 }}
    centerComponent={{ text: title, style: { color: 'white' } }}
    rightComponent={{ icon: 'room-service', color: 'white', margin: -3 }}
  />
);

MainMenuHeader.propTypes = {
  title: PropTypes.string,
};

export default MainMenuHeader;
