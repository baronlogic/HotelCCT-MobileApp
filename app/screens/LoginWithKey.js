import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { KeyInput } from '../components/TextInput';
import LoginText from '../components/Text/LoginText';
import KeyButton from '../components/Button/KeyButton';

const INPUT_PLACEHODER = 'Enter your key';
const BUTTON_TEXT = 'Enter';

class LoginWithKey extends Component {
  handleKeyButton = () => {
    console.log('PRESSING KEY BUTTON');
  };

  handleKeyInput = () => {
    console.log('WRITING KEY');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <Logo />
        <LoginText />
        <KeyInput
          placeholder={INPUT_PLACEHODER}
          placeholderTextColor="white"
          keyboardType="numeric"
          onChangeText={this.handleKeyInput}
        />
        <KeyButton title={BUTTON_TEXT} onPress={this.handleKeyButton} />
      </Container>
    );
  }
}
export default LoginWithKey;
