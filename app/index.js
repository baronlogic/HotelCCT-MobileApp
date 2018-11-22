import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import LoginWithKey from './screens/LoginWithKey';

EStyleSheet.build({
  $white: '#FFFFFF',
  $black: '#000000',
  $lightOrange: '#FF8747',
  $darkOrange: '#F15A3B',
});

export default () => <LoginWithKey />;
