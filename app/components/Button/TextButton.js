import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-paper';
import styles from './styles';

const TextButton = ({ title, onPress }) => (
  <Button style={styles.textButton} mode="text" onPress={onPress}>
    {title}
  </Button>
);

TextButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};

export default TextButton;
