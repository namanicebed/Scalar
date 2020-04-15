import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import SearchBar from '../../../Components/SearchBar';
import ChatBar from '../../../Components/ChatBar';

class ChatScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{marginTop: 10}}>
          <View style={{marginHorizontal: 20}}>
            <Text
              style={{
                fontFamily: 'Raleway-SemiBold',
                fontSize: 30,
                color: this.props.colorScheme.primary,
              }}>
              Messages
            </Text>
            <SearchBar colorScheme={this.props.colorScheme} />
          </View>
          <View style={{marginTop: 20}} />
          <ChatBar colorScheme={this.props.colorScheme} />
          <ChatBar colorScheme={this.props.colorScheme} />
        </View>
      </SafeAreaView>
    );
  }
}

export default function ChatTab() {
  const {colors} = useTheme();
  return <ChatScreen colorScheme={colors} />;
}
