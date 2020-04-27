import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import MeetingAvatar from '../../../Components/MeetingAvatar';
import Dimensions from '../../../Common/Dimensions';
import {TouchableRipple} from 'react-native-paper';

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
            colors={['#56CCF2', '#2F80ED']}
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
        <View
          style={{
            height: 15,
            backgroundColor:
              this.props.colorScheme.secondary == '#1F1F1F'
                ? '#1f1f1f'
                : '#e1e1e1',
            marginTop: 20,
          }}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: this.props.colorScheme.primaryText,
              fontSize: 16,
              fontFamily: 'OpenSans-Regular',
            }}>
            No previous meeting history found
          </Text>
          <TouchableRipple
            rippleColor={
              this.props.colorScheme.primary == '#fafafa'
                ? 'rgba(255, 255, 255, .2)'
                : 'rgba(0, 0, 0, .2)'
            }
            onPress={() => null}
            style={{
              width: Dimensions.width * 0.4,
              height: 45,
              borderColor: this.props.colorScheme.primary,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: this.props.colorScheme.primaryText,
                fontFamily: 'OpenSans-Regular',
              }}>
              Create Meeting
            </Text>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    );
  }
}

export default function MeetingsTab() {
  const {colors} = useTheme();
  return <MeetingsScreen colorScheme={colors} />;
}
