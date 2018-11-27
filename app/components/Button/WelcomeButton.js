import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

const WelcomeButton = ({ onPress }) => (
  <Button buttonStyle={styles.button} title="Enter" onPress={onPress} />
);

WelcomeButton.propTypes = {
  onPress: PropTypes.func,
};

export default WelcomeButton;
