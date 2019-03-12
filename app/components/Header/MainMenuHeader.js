import PropTypes from 'prop-types';
import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles';

const MainMenuHeader = ({ title, subtitle }) => (
  <Appbar.Header style={styles.Header}>
    <Appbar.Content title={title} subtitle={subtitle} />
  </Appbar.Header>
);

MainMenuHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default MainMenuHeader;
