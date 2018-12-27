import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginWithKey from '../screens/LoginWithKey';
import Welcome from '../screens/Welcome';
import MainMenu from '../screens/MainMenu';
import HotelOfferMenu from '../screens/HotelOfferMenu';
import ActivitiesInAreaMenu from '../screens/ActivitiesInAreaMenu';
import SpecialOfferMenu from '../screens/SpecialOfferMenu';
import AboutHotelMenu from '../screens/AboutHotelMenu';

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
    screen: MainMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerStyle: {
        backgroundColor: '#41311E',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }),
  },
  HotelOfferMenu: {
    screen: HotelOfferMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerStyle: {
        backgroundColor: '#41311E',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }),
  },
  ActivitiesInAreaMenu: {
    screen: ActivitiesInAreaMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerStyle: {
        backgroundColor: '#41311E',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }),
  },
  SpecialOfferMenu: {
    screen: SpecialOfferMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerStyle: {
        backgroundColor: '#41311E',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }),
  },
  AboutHotelMenu: {
    screen: AboutHotelMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerStyle: {
        backgroundColor: '#41311E',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }),
  },
});

const App = createAppContainer(RootStack);

export default App;
