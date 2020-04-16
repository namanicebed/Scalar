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

import TopBar from './components/TopBar';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

var contactArr = [];

const CONTACT_DATA = [];

class NewChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactArray: [],
    };
  }

  componentDidMount() {
    Platform.OS == 'android' ? this.requestContactPermission() : null;
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
        // console.log(contacts);
        contacts.forEach((contact) => {
          const contactObj = {
            name: contact.displayName,
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
    console.log(this.state.contactArray);
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
            console.log(item);
            return <Item title={item.name} phone={item.number} />;
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

function Avatar({name}) {
  var nameArr = name.split(' ');
  if (nameArr.length > 1)
    return (
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: stringToHslColor(name, 60, 70),
          borderRadius: 50 / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 18, fontFamily: 'OpenSans-Regular', color: '#000'}}>
          {nameArr[0][0].toUpperCase()}
          {nameArr[1][0].toUpperCase()}
        </Text>
      </View>
    );
  else
    return (
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: stringToHslColor(name, 90, 70),
          borderRadius: 50 / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 18, fontFamily: 'OpenSans-Regular', color: '#000'}}>
          {name[0].toUpperCase()}
        </Text>
      </View>
    );
}

function stringToHslColor(str, s, l) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 360;
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}

function Item({title, phone}) {
  return (
    <View
      style={{
        // backgroundColor: '#f9c2ff',
        marginHorizontal: 20,
        marginVertical: 15,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Avatar name={title} />
      <View style={{justifyContent: 'space-between', marginLeft: 20}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontFamily: 'OpenSans-Regular',
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 14,
            fontFamily: 'OpenSans-Regular',
          }}>
          {phone}
        </Text>
      </View>
    </View>
  );
}

export default function NewChatScreen(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return <NewChat colorScheme={colors} navigation={navigation} />;
}
