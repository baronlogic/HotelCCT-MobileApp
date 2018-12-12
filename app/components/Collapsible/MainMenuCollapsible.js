import PropTypes from 'prop-types';
import React from 'react';
import {
  ScrollView, Text, View, TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import styles from './styles';

const MainMenuCollapsible = ({ onPress, collapsed }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Nearest Atractions</Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} align="center">
        <View style={styles.content}>
          <Text style={styles.headerText}>
            Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs
          </Text>
        </View>
      </Collapsible>
    </ScrollView>
  </View>
);

MainMenuCollapsible.propTypes = {
  onPress: PropTypes.func,
  collapsed: PropTypes.any,
};

export default MainMenuCollapsible;
