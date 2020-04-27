import React from 'react';
import {
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import SafeAreaView from 'react-native-safe-area-view';
import {useTheme} from '@react-navigation/native';
import TopBar from './components/TopBar';
import InputToolbar from './components/InputToolBar';
import {color} from 'react-native-reanimated';
import Avatar from '../NewChat/components/Avatar';
import {socket} from '../../../Utils/SocketConfig';

class ChatScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      menuVisible: false,
      newMessageBody: {text: ''},
      isTyping:true
    };
    this.onSend = this.onSend.bind(this);
  }
  componentDidMount() {
    socket.on('new message', (data) => {
      if (data.user._id == this.props.route.params._id) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, data),
          };
        });
      }
     
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
    socket.emit('new message', this.state.newMessageBody);
    this.setState({newMessageBody: {text: ''}});
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TopBar
          colorScheme={this.props.colorScheme}
          navigation={this.props.navigation}
        />
        <View style={{marginBottom: 15, flex: 1}}>
          <GiftedChat
            messages={this.state.messages}
            renderComposer={() => <View style={{minHeight: 56}}></View>}
            // renderAvatar={() => <Avatar name="Naman Singh" topBar />}
            renderBubble={(props) => (
              <Bubble
                {...props}
                wrapperStyle={{
                  left: {
                    backgroundColor: this.props.colorScheme.bubbleBackground,
                  },
                  right: {
                    backgroundColor: this.props.colorScheme.tabTintColor,
                  },
                }}
                textStyle={{
                  left: {
                    color: this.props.colorScheme.primary,
                  },
                }}
              />
            )}
            renderInputToolbar={() => (
              <InputToolbar
                newMessageBody={this.state.newMessageBody}
                _id={'445dddggggdadcee'}
                sendTo={this.props.route.params._id}
                colorScheme={this.props.colorScheme}
                setChatState={(newMessageBody) => {
                  this.setState({newMessageBody});
                }}
                onSend={this.onSend}
              />
            )}
            user={{
              _id: '445dddggggdadcee',
            }}
            scrollToBottom
            isTyping={this.state.isTyping}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default function ChatScreen(props) {
  const {colors} = useTheme();
  return (
    <ChatScreenComponent
      colorScheme={colors}
      navigation={props.navigation}
      route={props.route}
    />
  );
}
