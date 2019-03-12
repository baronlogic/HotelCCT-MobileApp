import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigator from './config/routes';

EStyleSheet.build({
  $white: '#FFFFFF',
  $black: '#000000',
  $orange: '#EF7C2C',
  $brown: '#41311E',
  $lightOrange: '#FF8747',
  $darkOrange: '#F15A3B',
});

export default () => (
  <PaperProvider>
    <Navigator />
  </PaperProvider>
);
