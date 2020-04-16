import React from 'react';
import {Text, View} from 'react-native';
import stringToHslColor from '../../../../Utils/StringToHslColor';

export default function Avatar({name}) {
  var nameArr = name.split(' ');
  if (nameArr.length > 1)
    return (
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: stringToHslColor(name, 60, 70),
          borderRadius: 50 / 2,
          marginHorizontal: 20,
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
          marginHorizontal: 20,
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
