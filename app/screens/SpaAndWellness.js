import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { OthersMenuHeader } from '../components/Header';

const SCREEN_NAME = 'SPA & WELLNESS';

class SpaAndWellness extends Component {
  goBack = () => {
    console.log('PRESSING GO BACK BUTTON');
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <OthersMenuHeader goBack={this.goBack} title={SCREEN_NAME} />
      </View>
    );
  }
}
export default SpaAndWellness;
