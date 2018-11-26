import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { KeyInput } from '../components/TextInput';
import LoginText from '../components/Text/LoginText';
import KeyButton from '../components/Button/KeyButton';

const INPUT_PLACEHODER = 'Enter your key';

/* const DismissKeyboard = ({ children } =
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
); */

class LoginWithKey extends Component {
  handleChangeText = () => {
    console.log('change text');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <LoginText />
          <KeyInput
            placeholder={INPUT_PLACEHODER}
            placeholderTextColor="white"
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <KeyButton />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
export default LoginWithKey;
