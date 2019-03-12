import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';;
import { TextInput } from 'react-native-paper';
import styles from './styles';

const KeyInput = () => <TextInput style={styles.input} mode="outlined" label="INSERT KEY" />;

export default KeyInput;
