import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import styles from '../components/Text/styles';
import WelcomeButton from '../components/Button/WelcomeButton';

class MainMenu extends Component {
  handleWelcomeButton = () => {
    console.log('PRESSING WELCOME BUTTON');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <Header
          backgroundColor="blue"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Logo />
        <Text style={styles.title}>Welcome John Martinez</Text>
        <WelcomeButton onPress={this.handleWelcomeButton} />
      </Container>
    );
  }
}
export default MainMenu;
