import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput } from 'react-native';
// import color from 'color';
import styles from './styles';

const KeyInput = ({
  editable, onPress, buttonText, ...props
}) => {
  /* const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  ); */
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};
KeyInput.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};
export default KeyInput;
