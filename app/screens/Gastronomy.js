import React, { Component } from 'react';
import { StatusBar, View, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { OthersMenuHeader } from '../components/Header';

const SCREEN_NAME = 'GASTRONOMY';

class Gastronomy extends Component {
  goBack = () => {
    console.log('PRESSING GO BACK BUTTON');
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <OthersMenuHeader goBack={this.goBack} title={SCREEN_NAME} />
        <Card>
          <Card.Content>
            <Card.Cover
              source={{
                uri:
                  'https://uc7e2487a727581708fea3d0c730.previews.dropboxusercontent.com/p/thumb/AAV-7JvaZKgD7BJzl-faZ3r-7eTzdELhrMKGWEVBpe-Jj6f2Bi0uBHsO1RjHInt3lyR7dCBhnR1fnWpGL4k3zkoZ02DEum7gDvftf4luZCp9cL1JXGkXTZXVm6o8-VnedrwDWLsZABzyafM0TPwe32W7L88deCsd0LCTzDl_GD-CbtsjaAlGbdXMbBtQ2CuRIDlMUKV01lanchx8rN8wnnF7PLkxuj4J-Jm0acRRTRxCYPPjF-vlc7oaDHkslbvLmW9dBlMP22saPOIovpk3C9RTHFnZjGCXk9dtfccreiJ12pN1c9uy_djFiWifaikqGBxChu7xirCA2-0KbejEJgrKUJb-PzcH3pA6YOLYBX7dj_KupnccWu5-rHfchI-IUVz_ezjM79Ee6VBMIL7pTB3-AuQoyZs5IaT3-0PCRlzIZuxyLBPuTWQ-9VyX9gaNwCOyItsYY5S3U2tvjErJpR_i/p.jpeg?size=1280x960&size_mode=3',
              }}
            />
            <Title>Lobby Bar Cafe</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue ipsum nec viverra
              pretium. Mauris ultricies quis libero consectetur dictum. Ut lacinia diam in sem
              pretium, in dignissim libero semper.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Cover
              source={{
                uri:
                  'https://ucc6348ae545fdfbb78bf21dd7a4.previews.dropboxusercontent.com/p/thumb/AAWuXV8MeadYsQAGZh1WBnQRhl3fKzdSAGHfLyduN7LEII-0dHvlsKEWDYTXZFwOnlEBvRRhFuG-_DUusZjxrfqwjTB3UXmwdJM29jT1tAhrDA4_1DFy8VZJsdDmV43wD337sga1nFPZdqG3SxHyq89hft4H1ZfvmRyc-IRcXXUAzkb9NsZscAamSxjAMrRDQ3YL3yVz6JMRpLZ8xFaJnhdWH5_aCBNQFg1UwX-JS-uiMDX1w5ays69wDvoMBwegytWlv1OjfPg1aQu0yN2ZIvT_3-3S9dLwJqj89wX6WE-ExttjdHUJCXW6UM2PA6Y_G4DZfNTa4GwGwZoF9G9e4l5ZqfPHfl0qPIMn_YFEmFOWpbgrkFmtqQfnwGtvHsoYuwHEh14nAU3I4hkhZDEA7pexlzJiLhe99old6TfkLvrR-nmjgbR3bBtrwxhLX-VeyQAp1ehkyj3uHjCAJj3lNk6O/p.jpeg?size=1280x960&size_mode=3',
              }}
            />
            <Title>Restaurante Vitalis</Title>
            <Paragraph>
              Praesent ipsum turpis, hendrerit quis varius in, sagittis id erat. Nam porta tortor
              justo, at elementum diam tempus in. Vestibulum bibendum porttitor lacus, ac imperdiet
              ante condimentum vel.
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    );
  }
}
export default Gastronomy;
