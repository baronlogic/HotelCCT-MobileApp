import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { ContainedButton } from '../components/Button';

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
        <ContainedButton title={SPA_WELNESS} />
        <ContainedButton title={GASTRONOMY} />
        <ContainedButton title={OTHER_SERVICES} />
        <ContainedButton title={EVENTS} />
      </View>
    );
  }
}
export default HotelOfferMenu;
