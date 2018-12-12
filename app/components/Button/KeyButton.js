import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

const KeyButton = ({ icon, title, onPress }) => (
  <Button
    large
    icon={{ name: icon }}
    containerViewStyle={styles.container}
    buttonStyle={styles.button}
    textStyle={styles.textButton}
    title={title}
    onPress={onPress}
  />
);

KeyButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default KeyButton;
