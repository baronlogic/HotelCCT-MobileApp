import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { MainMenuHeader } from '../components/Header';

class MainMenu extends Component {
  handleWelcomeButton = () => {
    console.log('PRESSING WELCOME BUTTON');
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <MainMenuHeader />
      </View>
    );
  }
}
export default MainMenu;
