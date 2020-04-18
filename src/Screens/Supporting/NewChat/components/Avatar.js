import React from 'react';
import {Text, View} from 'react-native';
import stringToHslColor from '../../../../Utils/StringToHslColor';

export default function Avatar({name, topBar}) {
  var nameArr = name.split(' ');
  var height;
  var width;
  width = height = topBar ? 40 : 50;
  fontSize = topBar ? 16 : 18;
  marginHorizontal = topBar ? 10 : 20;
  if (nameArr.length > 1)
    return (
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: stringToHslColor(name, 60, 70),
          borderRadius: 50 / 2,
          marginHorizontal: marginHorizontal,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize,
            fontFamily: 'OpenSans-Regular',
            color: '#000',
          }}>
          {nameArr[0][0].toUpperCase()}
          {nameArr[1][0].toUpperCase()}
        </Text>
      </View>
    );
  else
    return (
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: stringToHslColor(name, 90, 70),
          borderRadius: 50 / 2,
          marginHorizontal: marginHorizontal,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize,
            fontFamily: 'OpenSans-Regular',
            color: '#000',
          }}>
          {name[0].toUpperCase()}
        </Text>
      </View>
    );
}
