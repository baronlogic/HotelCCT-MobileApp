import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { List, FAB, Portal } from 'react-native-paper';
import { Container } from '../components/Container';
import { MainMenuHeader } from '../components/Header';
import { ContainedButton, styles } from '../components/Button';

const SCREEN_NAME = 'MAIN MENU';
const HOTEL_OFFER = 'Hotel offer';
const ACTIVITIES_IN_AREA = 'Activities in area';
const SPECIAL_OFFER = 'Special offer';
const ABOUT_HOTEL = 'About Hotel';

class MainMenu extends Component {
  state = {
    expanded: true,
    open: false,
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  listExpanded = () => this.setState({
    expanded: !this.state.expanded,
  });

  goBack = () => {
    console.log('PRESSING GO BACK BUTTON');
    this.props.navigation.goBack();
  };

  showDialog = () => this.setState({ visible: true });

  hideDialog = () => this.setState({ visible: false });

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
        <MainMenuHeader goBack={this.goBack} title={SCREEN_NAME} />
        <List.Section>
          <List.Accordion title="Nearest Attractions">
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
        <ContainedButton
          icon="location-city"
          title={HOTEL_OFFER}
          onPress={this.handleHotelOfferButton}
        />
        <ContainedButton
          icon="image"
          title={ACTIVITIES_IN_AREA}
          onPress={this.handleActivitiesButton}
        />
        <ContainedButton
          icon="new-releases"
          title={SPECIAL_OFFER}
          onPress={this.handleSpecialOfferButton}
        />
        <ContainedButton
          icon="format-align-right"
          title={ABOUT_HOTEL}
          onPress={this.handleAboutButton}
        />
        <Portal>
          <FAB.Group
            style={styles.fab}
            open={this.state.open}
            icon={this.state.open ? 'close' : 'room-service'}
            actions={[
              { icon: 'local-taxi', label: 'Taxi', onPress: () => console.log('Pressed email') },
              {
                icon: 'chat',
                label: 'Live chat',
                onPress: () => console.log('Pressed notifications'),
              },
              {
                icon: 'settings',
                label: 'Hotel Service',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'alarm',
                label: 'Set your alarm',
                onPress: () => console.log('Pressed notifications'),
              },
              {
                icon: 'local-laundry-service',
                label: 'Cleaning Service',
                onPress: () => console.log('Pressed notifications'),
              },
            ]}
            onStateChange={({ open }) => this.setState({ open })}
            onPress={() => {
              if (this.state.open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </View>
    );
  }
}
export default MainMenu;
