import React, {Component} from 'react';
import {Text, View, StatusBar, BackHandler} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import SearchBar from '../../../Components/SearchBar';
import ChatBar from '../../../Components/ChatBar';
import Feather from 'react-native-vector-icons/Feather';
import {socket} from '../../../Utils/SocketConfig';

class ChatScreen extends Component {
  componentDidMount() {
    // socket.on('')
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor={this.props.colorScheme.background}
          barStyle={
            this.props.colorScheme.background == '#151414'
              ? 'light-content'
              : 'dark-content'
          }
        />
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
                  fontSize: 27,
                  color: this.props.colorScheme.primary,
                }}>
                Chats
              </Text>
              <Feather
                name="edit"
                size={23}
                onPress={() => this.props.navigation.navigate('NewChat')}
                color={this.props.colorScheme.primary}
              />
            </View>
            <SearchBar colorScheme={this.props.colorScheme} />
          </View>
          <View style={{marginTop: 20}} />
          <ChatBar
            colorScheme={this.props.colorScheme}
            navigation={this.props.navigation}
            _id={'1234500adfafdf'}
          />
          <ChatBar
            colorScheme={this.props.colorScheme}
            navigation={this.props.navigation}
            _id={'445dddggggdadcee'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default function ChatTab(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return <ChatScreen colorScheme={colors} navigation={navigation} />;
}
