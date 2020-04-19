import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

class ToolBar extends Component {
  render() {
    return (
      <View
        style={{
          minHeight: 50,
          width: '93%',
            elevation:3,
          backgroundColor:
            this.props.colorScheme.background == '#fafafa'
              ? '#fafafa'
              : '#2B2B2B',
          alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {height: 0, width: 0},
          shadowRadius: 3,
          shadowOpacity: 0.1,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 50 / 2,
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo
            name="emoji-happy"
            color={this.props.colorScheme.primary}
            style={{marginLeft: 10}}
            size={22}
          />
          <TextInput
            style={{
              height: '100%',
              width: '65%',
              marginLeft: 10,
              fontSize: 17,
              color: this.props.colorScheme.primary,
            }}
            placeholder="Type your message.."
            value={this.props.newMessageBody.text}
            placeholderTextColor={'grey'}
            onChangeText={(text) => {
              var newMessageBody = {
                _id: 2,
                text: text,
                user: {
                  _id: 1,
                },
                createdAt: new Date(),
              };
              this.props.setChatState(newMessageBody);
            }}
          />
        </View>
        {this.props.newMessageBody.text == '' ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                width: 40,
                borderRadius: 40 / 2,
              }}>
              <Feather
                name="camera"
                color={this.props.colorScheme.primary}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                width: 40,
                marginRight: 10,
                borderRadius: 40 / 2,
              }}>
              <Feather
                name="image"
                color={this.props.colorScheme.primary}
                size={25}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={this.props.onSend}
            activeOpacity={0.4}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              width: 40,
              marginRight: 10,
              borderRadius: 45 / 2,
            }}>
            <MaterialCommIcons
              name="send"
              color={this.props.colorScheme.primary}
              size={26}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
export default ToolBar;
