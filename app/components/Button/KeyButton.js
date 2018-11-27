import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

const KeyButton = ({ onPress }) => (
  <Button buttonStyle={styles.button} title="Enter" onPress={onPress} />
);

KeyButton.propTypes = {
  onPress: PropTypes.func,
};

export default KeyButton;
