import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import SearchBar from '../../../Components/SearchBar';
import ChatBar from '../../../Components/ChatBar';
import Entypo from 'react-native-vector-icons/Entypo';

class ChatScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={this.props.colorScheme.background}  />
        <View style={{marginTop: 10}}>
          <View style={{marginHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
              <Text
                style={{
                  fontFamily: 'Raleway-SemiBold',
                  fontSize: 30,
                  color: this.props.colorScheme.primary,
                }}>
                Messages
              </Text>
              <Entypo
                name="new-message"
                size={24}
                onPress={() => this.props.navigation.navigate("NewChat")}
                color={this.props.colorScheme.primary}
              />
            </View>
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

export default function ChatTab(props) {
  const {colors} = useTheme();
  const {navigation} = props
  return <ChatScreen colorScheme={colors} navigation={navigation}/>;
}
