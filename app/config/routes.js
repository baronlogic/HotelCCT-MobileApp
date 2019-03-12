import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import LoginWithKey from '../screens/LoginWithKey';
import Welcome from '../screens/Welcome';
import MainMenu from '../screens/MainMenu';
import HotelOfferMenu from '../screens/HotelOfferMenu';
import ActivitiesInAreaMenu from '../screens/ActivitiesInAreaMenu';
import SpecialOfferMenu from '../screens/SpecialOfferMenu';
import AboutHotelMenu from '../screens/AboutHotelMenu';

import Contact from '../screens/Contact';
import Map from '../screens/Map';
import Chat from '../screens/Chat';
import Rating from '../screens/Rating';
import Social from '../screens/Social';

const Tabs = createMaterialBottomTabNavigator({
  MainMenu: {
    screen: MainMenu,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <Icon name="home" size={25} color="#fff" />,
    },
    /* navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerRight: <IconOnButton icon="room-service" onPress={() => console.log('Pressed')} />,
    }), */
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: () => <Icon name="contact-mail" size={25} color="#fff" />,
    },
  },
  Map: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: () => <Icon name="place" size={25} color="#fff" />,
    },
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: () => <Icon name="chat" size={25} color="#fff" />,
    },
  },
  Rating: {
    screen: Rating,
    navigationOptions: {
      tabBarLabel: 'Rating',
      tabBarIcon: () => <Icon name="star" size={25} color="#fff" />,
    },
  },
  Social: {
    screen: Social,
    navigationOptions: {
      tabBarLabel: 'Social',
      tabBarIcon: () => <Icon name="person" size={25} color="#fff" />,
    },
  },
});

const RootStack = createStackNavigator({
  LoginWithKey: {
    screen: LoginWithKey,
    navigationOptions: {
      header: () => null,
    },
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: () => null,
    },
  },
  MainMenu: {
    screen: Tabs,
    navigationOptions: {
      header: () => null,
    },
    /* navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerRight: <IconOnButton icon="room-service" onPress={() => console.log('Pressed')} />,
    }), */
  },
  HotelOfferMenu: {
    screen: HotelOfferMenu,
    navigationOptions: {
      header: () => null,
    },
  },
  ActivitiesInAreaMenu: {
    screen: ActivitiesInAreaMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
  SpecialOfferMenu: {
    screen: SpecialOfferMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
  AboutHotelMenu: {
    screen: AboutHotelMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

const App = createAppContainer(RootStack);

export default App;
