import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginWithKey from '../screens/LoginWithKey';
import Welcome from '../screens/Welcome';
import MainMenu from '../screens/MainMenu';
import HotelOfferMenu from '../screens/HotelOfferMenu';

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
    }),
  },
});

const App = createAppContainer(RootStack);

export default App;
