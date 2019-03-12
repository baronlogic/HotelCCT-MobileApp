import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-paper';
import styles from './styles';

const ContainedButton = ({ icon, title, onPress }) => (
  <Button style={styles.textButton} mode="contained" onPress={onPress}>
    {title}
  </Button>
);

ContainedButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default ContainedButton;
