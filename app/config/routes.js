import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import LoginWithKey from '../screens/LoginWithKey';
import Welcome from '../screens/Welcome';
import MainMenu from '../screens/MainMenu';

import HotelOfferMenu from '../screens/HotelOfferMenu';
import ActivitiesInAreaMenu from '../screens/ActivitiesInAreaMenu';
import SpecialOfferMenu from '../screens/SpecialOfferMenu';
import AboutHotelMenu from '../screens/AboutHotelMenu';

import SpaAndWellness from '../screens/SpaAndWellness';
import Gastronomy from '../screens/Gastronomy';

import Contact from '../screens/Contact';
import Map from '../screens/Map';
import Chat from '../screens/Chat';
import Rating from '../screens/Rating';
import Social from '../screens/Social';

const HomeStack = createStackNavigator({
  MainMenu: {
    screen: MainMenu,
    navigationOptions: {
      header: () => null,
    },
  },
  HotelOfferMenu: {
    screen: HotelOfferMenu,
    navigationOptions: {
      header: () => null,
    },
  },
  SpaAndWellness: {
    screen: SpaAndWellness,
    navigationOptions: {
      header: () => null,
    },
  },
  Gastronomy: {
    screen: Gastronomy,
    navigationOptions: {
      header: () => null,
    },
  },
  ActivitiesInAreaMenu: {
    screen: ActivitiesInAreaMenu,
    navigationOptions: {
      header: () => null,
    },
  },
  SpecialOfferMenu: {
    screen: SpecialOfferMenu,
    navigationOptions: {
      header: () => null,
    },
  },
  AboutHotelMenu: {
    screen: AboutHotelMenu,
    navigationOptions: {
      header: () => null,
    },
  },
});

const Tabs = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <Icon name="home" size={25} color="#fff" />,
    },
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
  },
});

const App = createAppContainer(RootStack);

export default App;
