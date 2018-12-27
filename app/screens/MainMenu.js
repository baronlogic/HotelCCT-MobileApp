import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { MainMenuCollapsible } from '../components/Collapsible';
import { KeyButton } from '../components/Button';

const HOTEL_OFFER = 'Hotel offer';
const ACTIVITIES_IN_AREA = 'Activities in area';
const SPECIAL_OFFER = 'Special offer';
const ABOUT_HOTEL = 'About Hotel';

class MainMenu extends Component {
  state = {
    collapsed: true,
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  handleHotelOfferButton = () => {
    console.log('PRESSING HOTEL OFFER BUTTON');
    this.props.navigation.navigate('HotelOfferMenu', { title: 'HOTEL OFFER' });
  };

  handleActivitiesButton = () => {
    console.log('PRESSING ACTIVITIES IN AREA BUTTON');
    this.props.navigation.navigate('ActivitiesInAreaMenu', { title: 'ACTIVITIES IN AREA' });
  };

  handleSpecialOfferButton = () => {
    console.log('PRESSING KEY BUTTON');
    this.props.navigation.navigate('SpecialOfferMenu', { title: 'SPECIAL OFFER' });
  };

  handleAboutButton = () => {
    console.log('PRESSING KEY BUTTON');
    this.props.navigation.navigate('AboutHotelMenu', { title: 'ABOUT HOTEL' });
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <MainMenuCollapsible onPress={this.toggleExpanded} collapsed={this.state.collapsed} />
        <KeyButton icon="location-city" title={HOTEL_OFFER} onPress={this.handleHotelOfferButton} />
        <KeyButton icon="image" title={ACTIVITIES_IN_AREA} onPress={this.handleActivitiesButton} />
        <KeyButton
          icon="new-releases"
          title={SPECIAL_OFFER}
          onPress={this.handleSpecialOfferButton}
        />
        <KeyButton icon="format-align-right" title={ABOUT_HOTEL} onPress={this.handleAboutButton} />
      </View>
    );
  }
}
export default MainMenu;
