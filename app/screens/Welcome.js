import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import styles from '../components/Text/styles';
import TextButton from '../components/Button/TextButton';
import ContainedButton from '../components/Button/ContainedButton';

const BUTTON_WELCOME = 'Enter';
const BUTTON_LANGUAGE = 'Switch language';

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
        <Logo />
        <Text style={styles.title}>Welcome John Martinez</Text>
        <ContainedButton title={BUTTON_WELCOME} onPress={this.handleWelcomeButton} />
        <TextButton title={BUTTON_LANGUAGE} onPress={this.handleSwitchLanguage} />
      </Container>
    );
  }
}
export default Welcome;
