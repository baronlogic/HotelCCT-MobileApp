import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { OthersMenuHeader } from '../components/Header';

const SCREEN_NAME = 'SPECIAL OFFER';
const SPA_WELNESS = 'SPA & Wellness';
const GASTRONOMY = 'Gastronomy';
const OTHER_SERVICES = 'Other Services';
const EVENTS = 'Events';

class SpecialOfferMenu extends Component {
  goBack = () => {
    console.log('PRESSING GO BACK BUTTON');
    this.props.navigation.goBack();
  };

  handleHotelOfferButton = () => {
    console.log('PRESSING WELCOME BUTTON');
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
      </View>
    );
  }
}
export default SpecialOfferMenu;
