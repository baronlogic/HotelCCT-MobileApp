import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { KeyInput } from '../components/TextInput';

const INPUT_PLACEHODER = 'Enter your key';

class LoginWithKey extends Component {
  handleChangeText = () => {
    console.log('change text');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="default" />
        <Logo />
        <KeyInput
          placeholder={INPUT_PLACEHODER}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
      </Container>
    );
  }
}
export default LoginWithKey;
