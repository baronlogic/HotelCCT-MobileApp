import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  List, Button, Paragraph, Dialog, Portal, IconButton,
} from 'react-native-paper';
import { Container } from '../components/Container';
import { ContainedButton } from '../components/Button';

const HOTEL_OFFER = 'Hotel offer';
const ACTIVITIES_IN_AREA = 'Activities in area';
const SPECIAL_OFFER = 'Special offer';
const ABOUT_HOTEL = 'About Hotel';

class ModalMenu extends Component {
  state = {
    expanded: true,
    visible: false,
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  listExpanded = () => this.setState({
    expanded: !this.state.expanded,
  });

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
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <List.Section>
          <List.Accordion title="Uncontrolled Accordion">
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
        <IconButton icon="room-service" onPress={this.showDialog} />
        <Portal>
          <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this.hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Container>
    );
  }
}
export default ModalMenu;
