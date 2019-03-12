import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { TextInput } from 'react-native-paper';

class Rating extends Component {
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
        <TextInput />
      </View>
    );
  }
}
export default Rating;
