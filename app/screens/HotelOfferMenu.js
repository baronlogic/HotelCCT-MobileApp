import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { KeyButton } from '../components/Button';

const SPA_WELNESS = 'SPA & Wellness';
const GASTRONOMY = 'Gastronomy';
const OTHER_SERVICES = 'Other Services';
const EVENTS = 'Events';

class HotelOfferMenu extends Component {
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
        <KeyButton title={SPA_WELNESS} />
        <KeyButton title={GASTRONOMY} />
        <KeyButton title={OTHER_SERVICES} />
        <KeyButton title={EVENTS} />
      </View>
    );
  }
}
export default HotelOfferMenu;
