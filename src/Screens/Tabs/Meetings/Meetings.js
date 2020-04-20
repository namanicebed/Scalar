import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import MeetingAvatar from '../../../Components/MeetingAvatar';

class MeetingsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{marginTop: 10}}>
          <View style={{marginHorizontal: 20}}>
            <Text
              style={{
                fontFamily: 'Raleway-SemiBold',
                fontSize: 27,
                color: this.props.colorScheme.primary,
              }}>
              Meetings
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <MeetingAvatar
            type="create"
            title="Create"
            colors={['#56CCF2','#2F80ED']}
            colorScheme={this.props.colorScheme}
          />
          <MeetingAvatar
            type="join"
            title="Join"
            colors={['#11998e', '#38ef7d']}
            colorScheme={this.props.colorScheme}
          />
          <MeetingAvatar
            type="schedule"
            title="Schedule"
            colors={['#f12711', '#f5af19']}
            colorScheme={this.props.colorScheme}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default function MeetingsTab() {
  const {colors} = useTheme();
  return <MeetingsScreen colorScheme={colors} />;
}
