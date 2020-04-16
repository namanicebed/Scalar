import React, {Component} from 'react';
import {Text, View, TextInput, PermissionsAndroid} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useTheme} from '@react-navigation/native';
import Contacts from 'react-native-contacts';

import TopBar from './components/TopBar';

class NewChat extends Component {
  componentDidMount() {
    this.requestContactPermission()
  }
  requestContactPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        'android.permission.READ_CONTACTS',
        {
          title: 'Scaler Contact Permission',
          message:
            'Scaler needs to access your contacts for best messaging experience',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Contacts.getAll((err, contacts) => {
          if (err === 'denied') {
            console.log(denied);
          } else {
            // contacts returned in Array
            console.log(contacts);
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: this.props.colorScheme.newChatBKColor,
        }}>
        <TopBar
          colorScheme={this.props.colorScheme}
          navigation={this.props.navigation}
        />
      </SafeAreaView>
    );
  }
}

export default function NewChatScreen(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return <NewChat colorScheme={colors} navigation={navigation} />;
}
