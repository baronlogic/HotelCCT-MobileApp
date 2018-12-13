import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import styles from '../components/Text/styles';
import WelcomeButton from '../components/Button/WelcomeButton';
import SwitchLanguage from '../components/Button/SwitchLanguage';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleWelcomeButton = () => {
    console.log('PRESSING WELCOME BUTTON');
    this.props.navigation.navigate('MainMenu', { title: 'MAIN MENU' });
  };

  handleSwitchLanguage = () => {
    console.log('CHANGING LANGUAGE');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <Logo />
        <Text style={styles.title}>Welcome John Martinez</Text>
        <WelcomeButton onPress={this.handleWelcomeButton} />
        <SwitchLanguage onPress={this.handleSwitchLanguage} text="Switch language" />
      </Container>
    );
  }
}
export default Welcome;
