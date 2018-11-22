import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image resizeMode="contain" style={styles.logo} source={require('./image/logo.png')} />
    <Text style={styles.textPrimary}>Welcome to the Hotel CCT!</Text>
    <Text style={styles.textSecondary}>
      Please enter the key that was delivered to you at reception
    </Text>
  </View>
);

export default Logo;
