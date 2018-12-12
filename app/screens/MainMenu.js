import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { MainMenuHeader } from '../components/Header';
import { MainMenuCollapsible } from '../components/Collapsible';
import { KeyButton } from '../components/Button';

const HEADER_TITLE = 'MAIN MENU';

const HOTEL_OFFER = 'Hotel offer';
const ACTIVITIES_IN_AREA = 'Activites in area';
const SPECIAL_OFFER = 'Special offer';
const ABOUT_HOTEL = 'About Hotel';

class MainMenu extends Component {
  state = {
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
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
        <MainMenuHeader title={HEADER_TITLE} />
        <MainMenuCollapsible onPress={this.toggleExpanded} collapsed={this.state.collapsed} />
        <KeyButton icon="location-city" title={HOTEL_OFFER} />
        <KeyButton icon="image" title={ACTIVITIES_IN_AREA} />
        <KeyButton icon="new-releases" title={SPECIAL_OFFER} />
        <KeyButton icon="format-align-right" title={ABOUT_HOTEL} />
      </View>
    );
  }
}
export default MainMenu;
