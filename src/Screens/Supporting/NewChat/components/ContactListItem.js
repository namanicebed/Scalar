import React from 'react';
import Avatar from './Avatar';
import {Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';

export default function Item({title, phone, colorScheme}) {
  return (
    <Ripple rippleColor={colorScheme.primary} activeOpacity={0.8}>
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
    </Ripple>
  );
}
