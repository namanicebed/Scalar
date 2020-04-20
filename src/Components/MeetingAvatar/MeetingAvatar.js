import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

function MeetingAvatar(props) {
  var Icon;
  var name;
  if (props.type == 'create') {
    Icon = Ionicons;
    name = 'ios-videocam';
  } else if (props.type == 'join') {
    Icon = MaterialIcons;
    name = 'add';
  } else if (props.type == 'schedule') {
    Icon = MaterialIcons;
    name = 'schedule';
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <LinearGradient
        colors={props.colors}
        style={{
          height: 58,
          width: 58,
          borderRadius: 58/2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={name} size={30} color="#fff" />
      </LinearGradient>
      <Text
        style={{
          fontSize: 12,
          color: props.colorScheme.primary,
          marginTop: 10,
          fontWeight:'bold'
        }}>
        {props.title}
      </Text>
    </View>
  );
}
export default MeetingAvatar;
