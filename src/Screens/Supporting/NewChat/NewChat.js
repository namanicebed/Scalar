import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  PermissionsAndroid,
  Platform,
  SectionList,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useTheme} from '@react-navigation/native';
import Contacts from 'react-native-contacts';
import _ from 'lodash';
import {contactsArrayFilter} from '../../../Utils/ContactArrayFilter';
import Item from './components/ContactListItem';

import TopBar from './components/TopBar';

var contactArr = [];

class NewChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactArray: [],
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => {
      // this.props.getMyReservations();
    });
    Platform.OS == 'android'
      ? this.requestContactPermission()
      : this._getContacts();
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
        this._getContacts();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  _getContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.log(denied);
      } else {
        // contacts returned in Array
        console.log(contacts);
        contacts.forEach((contact) => {
          const contactObj = {
            name:
              Platform.OS == 'android'
                ? contact.displayName
                : `${contact.givenName} ${contact.familyName}`,
            number: _.isEmpty(contact.phoneNumbers)
              ? null
              : contact.phoneNumbers[0].number,
          };
          contactArr.push(contactObj);
        });
        let arr = contactsArrayFilter(contactArr);
        this.setState({
          contactArray: arr,
        });
      }
    });
  };

  componentWillUnmount() {
    contactArr = [];
  }

  render() {
    // console.log(this.state.contactArray);
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
        <SectionList
          sections={this.state.contactArray}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => {
            return (
              <Item
                title={item.name}
                phone={item.number}
                colorScheme={this.props.colorScheme}
              />
            );
          }}
          renderSectionHeader={({section: {title}}) => (
            <View
              style={{
                backgroundColor: this.props.colorScheme.secondary,
                justifyContent: 'center',
                height: 30,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 40,
                  color: 'grey',
                }}>
                {title}
              </Text>
            </View>
          )}
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
