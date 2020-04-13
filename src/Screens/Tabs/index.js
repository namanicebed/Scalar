import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
class TabsComponent extends Component {
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

export default function Tabs() {
  const {colors} = useTheme();
  return <TabsComponent colorScheme={colors} />;
}
