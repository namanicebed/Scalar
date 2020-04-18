import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';

class Example extends React.Component {
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
        user:{
            _id:1
        }
      },
    });
  }
  render() {
    return (
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
    );
  }

  _renderInputToolbar = () => {
    return (
      <View
        style={{
          minHeight: 50,
          width: '90%',
          backgroundColor: '#2B2B2B',
          alignSelf: 'center',
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

export default Example;

// import {GiftedChat} from 'react-native-gifted-chat';
// import React from 'react';
// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {messages: []};
//     this.onSend = this.onSend.bind(this);
//   }
//   componentWillMount() {
//     this.setState({
//       messages: [
//         {
//           _id: 1,
//           text: 'Hello developer',
//           createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
//           user: {
//             _id: 2,
//             name: 'React Native',
//             avatar: 'https://facebook.github.io/react/img/logo_og.png',
//           },
//         },
//       ],
//     });
//   }
//   onSend(messages = []) {
//       console.log(messages);
//     this.setState((previousState) => {
//       return {
//         messages: GiftedChat.append(previousState.messages, messages),
//       };
//     });
//   }
//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={this.onSend}
//         user={{
//           _id: 1,
//         }}
//       />
//     );
//   }
// }
