import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const KeyInput = ({ ...props }) => {
  const containerStyles = [styles.container];

  return (
    <View style={containerStyles}>
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};
KeyInput.propTypes = {
  placeholderTextColor: PropTypes.string,
};
export default KeyInput;
