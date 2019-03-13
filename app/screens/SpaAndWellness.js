import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import {
  Avatar, Button, Card, Title, Paragraph,
} from 'react-native-paper';
import { OthersMenuHeader } from '../components/Header';

const SCREEN_NAME = 'SPA & WELLNESS';

class SpaAndWellness extends Component {
  goBack = () => {
    console.log('PRESSING GO BACK BUTTON');
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <OthersMenuHeader goBack={this.goBack} title={SCREEN_NAME} />
        <Card>
          <Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
export default SpaAndWellness;
