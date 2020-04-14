import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import SearchBar from '../../../Components/SearchBar';

class ChatScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 20, marginTop: 10}}>
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
      </SafeAreaView>
    );
  }
}

export default function ChatTab() {
  const {colors} = useTheme();
  return <ChatScreen colorScheme={colors} />;
}
