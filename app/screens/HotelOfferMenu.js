import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { OthersMenuHeader } from '../components/Header';
import { ContainedButton } from '../components/Button';

const SCREEN_NAME = 'HOTEL OFFER';
const SPA_WELNESS = 'SPA & Wellness';
const GASTRONOMY = 'Gastronomy';
const OTHER_SERVICES = 'Other Services';
const EVENTS = 'Events';

class HotelOfferMenu extends Component {
  goBack = () => {
    console.log('PRESSING GO BACK BUTTON');
    this.props.navigation.goBack();
  };

  handleSpaAndWellnessButton = () => {
    console.log('PRESSING SPA AND WELLNESS BUTTON');
    this.props.navigation.navigate('SpaAndWellness');
  };

  handleActivitiesButton = () => {
    console.log('PRESSING KEY BUTTON');
  };

  handleSpecialOfferButton = () => {
    console.log('PRESSING KEY BUTTON');
  };

  handleAboutButton = () => {
    console.log('PRESSING KEY BUTTON');
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <OthersMenuHeader goBack={this.goBack} title={SCREEN_NAME} />
        <ContainedButton title={SPA_WELNESS} onPress={this.handleSpaAndWellnessButton} />
        <ContainedButton title={GASTRONOMY} />
        <ContainedButton title={OTHER_SERVICES} />
        <ContainedButton title={EVENTS} />
      </View>
    );
  }
}
export default HotelOfferMenu;
