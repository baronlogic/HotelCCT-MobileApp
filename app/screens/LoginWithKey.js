import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { KeyInput } from '../components/TextInput';
import LoginText from '../components/Text/LoginText';
import ContainedButton from '../components/Button/ContainedButton';

import styles from '../components/Container/styles';

const INPUT_PLACEHODER = 'Enter your key';
const BUTTON_TEXT = 'Enter';

class LoginWithKey extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleKeyButton = () => {
    console.log('PRESSING KEY BUTTON');
    // Here goes the logic to validate the key.
    this.props.navigation.navigate('Welcome');
  };

  handleKeyInput = () => {
    console.log('WRITING KEY');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerAround} behavior="padding" enabled>
        <Logo />
        <LoginText />
        <KeyInput
          placeholder={INPUT_PLACEHODER}
          placeholderTextColor="white"
          keyboardType="numeric"
          onChangeText={this.handleKeyInput}
        />
        <ContainedButton title={BUTTON_TEXT} onPress={this.handleKeyButton} />
      </KeyboardAvoidingView>
    );
  }
}
export default LoginWithKey;
