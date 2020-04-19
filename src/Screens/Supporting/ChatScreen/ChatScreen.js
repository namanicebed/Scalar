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

class ChatScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      menuVisible: false,
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
          text:
            'Hello developer this i akdjfkl jalksdjf lkja djfkj ajklsdf jalksdj f',
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
        <TopBar
          colorScheme={this.props.colorScheme}
          navigation={this.props.navigation}
        />
        <View style={{marginBottom: 15, flex: 1}}>
          <GiftedChat
            messages={this.state.messages}
            renderComposer={() => <View style={{minHeight: 56}}></View>}
            renderAvatar={() => <Avatar name="Naman Singh" topBar />}
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
                colorScheme={this.props.colorScheme}
                setChatState={(newMessageBody) => {
                  this.setState({newMessageBody});
                }}
                onSend={this.onSend}
              />
            )}
            user={{
              _id: 1,
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default function ChatScreen(props) {
  const {colors} = useTheme();
  return (
    <ChatScreenComponent colorScheme={colors} navigation={props.navigation} />
  );
}
