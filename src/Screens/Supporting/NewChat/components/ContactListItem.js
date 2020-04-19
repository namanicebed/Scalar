import React from 'react';
import Avatar from './Avatar';
import {Text, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

export default function Item({title, phone, colorScheme}) {
  return (
    <TouchableRipple
      rippleColor={
        colorScheme.primary == '#fafafa'
          ? 'rgba(255, 255, 255, .22)'
          : 'rgba(0, 0, 0, .2)'
      }
      onPress={() => null}>
      <View
        style={{
          // backgroundColor: '#f9c2ff',
          marginVertical: 15,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Avatar name={title} />
        <View style={{justifyContent: 'space-between'}}>
          <Text
            style={{
              color: colorScheme.primaryText,
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
    </TouchableRipple>
  );
}
