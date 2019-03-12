import PropTypes from 'prop-types';
import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles';

const OthersMenuHeader = ({ goBack, title, subtitle }) => (
  <Appbar.Header style={styles.Header}>
    <Appbar.BackAction onPress={goBack} />
    <Appbar.Content title={title} subtitle={subtitle} />
  </Appbar.Header>
);

OthersMenuHeader.propTypes = {
  goBack: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default OthersMenuHeader;
