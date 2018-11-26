import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import styles from '../components/Text/styles';
import WelcomeButton from '../components/Button/WelcomeButton';
import SwitchLanguage from '../components/Button/SwitchLanguage';

class Welcome extends Component {
  handleChangeText = () => {
    console.log('change text');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <Logo />
        <Text style={styles.title}>Welcome John Martinez</Text>
        <WelcomeButton />
        <SwitchLanguage onPress={this.handleChangeText} text="Switch language" />
      </Container>
    );
  }
}
export default Welcome;
