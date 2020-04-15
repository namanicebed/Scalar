import React, {Component} from 'react';
import {Text, View} from 'react-native';
class NewChat extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text onPress={()=>this.props.navigation.pop()}>Hello World</Text>
      </View>
    );
  }
}
export default NewChat;
