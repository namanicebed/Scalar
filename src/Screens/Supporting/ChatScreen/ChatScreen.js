import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SafeAreaView from 'react-native-safe-area-view';
import {useTheme} from '@react-navigation/native';
import Avatar from '../NewChat/components/Avatar';
import {Menu} from 'react-native-paper';

class ChatScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessageBody: {
        _id: 1,
        text: '',
        user: {
          _id: 1,
        },
        createdAt: new Date(),
      },
    };
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
  onSend() {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(
          previousState.messages,
          this.state.newMessageBody,
        ),
      };
    });
    this.setState({
      newMessageBody: {
        _id: 1,
        text: '',
        createdAt: new Date(),
        user: {
          _id: 1,
        },
      },
    });
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 56,
            backgroundColor: this.props.colorScheme.secondary,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {height: 1, width: 0},
            shadowOpacity: 0.1,
            shadowRadius: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <MaterialIcon
              name="arrow-back"
              color={this.props.colorScheme.primary}
              size={26}
              onPress={() => this.props.navigation.pop()}
            />
            <Avatar name={'Naman Singh'} topBar />
            <View style={{justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  color: this.props.colorScheme.primaryText,
                  fontFamily: 'OpenSans-Regular',
                  fontSize: 15,
                }}>
                Naman Singh
              </Text>
              <Text
                style={{
                  color: 'grey',
                  fontFamily: 'OpenSans-regular',
                  fontSize: 13.5,
                }}>
                online 2 hours ago
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="ios-videocam"
              size={24.5}
              color={this.props.colorScheme.primary}
            />
            <MaterialIcon
              name="local-phone"
              size={22}
              color={this.props.colorScheme.primary}
              style={{marginHorizontal: 23}}
            />
            <MaterialCommIcons
              name="dots-vertical"
              size={25}
              color={this.props.colorScheme.primary}
              style={{marginRight: 10}}
            />
          </View>
        </View>
        <GiftedChat
          messages={this.state.messages}
          renderComposer={() => <View style={{minHeight: 56}}></View>}
          renderInputToolbar={this._renderInputToolbar}
          // onSend={this.onSend}
          bottomOffset={25}
          user={{
            _id: 1,
          }}
        />
      </SafeAreaView>
    );
  }

  _renderInputToolbar = () => {
    return (
      <View
        style={{
          minHeight: 50,
          width: '90%',
          //   backgroundColor: '#2B2B2B',
          backgroundColor:
            this.props.colorScheme.background == '#fafafa'
              ? '#fafafa'
              : '#2B2B2B',
          alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {height: 0, width: 0},
          shadowRadius: 3,
          shadowOpacity: 0.1,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 50 / 2,
          flexDirection: 'row',
        }}>
        <Entypo
          name="emoji-happy"
          color="#CCCCCC"
          style={{marginLeft: 10}}
          size={22}
        />
        <TextInput
          style={{height: '100%', width: '60%', marginLeft: 5, fontSize: 17}}
          placeholder="Type your message.."
          value={this.state.newMessageBody.text}
          onChangeText={(text) =>
            this.setState({
              newMessageBody: {
                _id: 2,
                text: text,
                user: {
                  _id: 1,
                },
                createdAt: new Date(),
              },
            })
          }
        />
        {this.state.newMessageBody.text == '' ? (
          <View style={{flexDirection: 'row'}}>
            <LinearGradient
              colors={['#007EF4', '#2A75BC']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#007EF4',
                height: 40,
                width: 40,
                marginRight: 6,
                borderRadius: 40 / 2,
              }}>
              <Ripple
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#007EF4',
                  height: 40,
                  width: 40,
                  borderRadius: 40 / 2,
                }}>
                <Feather name="camera" color={'#fff'} size={22} />
              </Ripple>
            </LinearGradient>
            <LinearGradient
              colors={['#007EF4', '#2A75BC']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#007EF4',
                height: 40,
                width: 40,
                marginRight: 5,
                borderRadius: 40 / 2,
              }}>
              <Ripple
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#007EF4',
                  height: 40,
                  width: 40,
                  borderRadius: 40 / 2,
                }}>
                <Feather name="image" color={'#fff'} size={22} />
              </Ripple>
            </LinearGradient>
          </View>
        ) : (
          <LinearGradient
            colors={['#007EF4', '#2A75BC']}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#007EF4',
              height: 40,
              width: 40,
              marginRight: 5,
              borderRadius: 40 / 2,
            }}>
            <Ripple
              onPress={this.onSend}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#007EF4',
                height: 40,
                width: 40,
                marginRight: 5,
                borderRadius: 40 / 2,
              }}>
              <MaterialCommIcons
                name="send"
                color="#fff"
                size={20}
                style={{marginLeft: 10}}
              />
            </Ripple>
          </LinearGradient>
        )}
      </View>
    );
  };
}

export default function ChatScreen(props) {
  const {colors} = useTheme();
  return (
    <ChatScreenComponent colorScheme={colors} navigation={props.navigation} />
  );
}
