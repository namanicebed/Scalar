import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
class ProfileScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.props.colorScheme.background,
        }}>
        <Text>Tab</Text>
      </View>
    );
  }
}

export default function ProfileTab() {
  const {colors} = useTheme();
  return <ProfileScreen colorScheme={colors} />;
}
