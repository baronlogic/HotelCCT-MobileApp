import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import {
  Button, Paragraph, Dialog, Portal, IconButton,
} from 'react-native-paper';
import styles from './styles';

const IconOnButton = ({
  icon, visible, showDialog, hideDialog,
}) => (
  <View>
    <IconButton icon={icon} onPress={showDialog} />
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>This is simple dialog</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  </View>
);

IconOnButton.propTypes = {
  icon: PropTypes.string,
  showDialog: PropTypes.func,
  hideDialog: PropTypes.func,
  visible: PropTypes.any,
};

export default IconOnButton;
