import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends Component {
  _setAsyncToken = async () => {
    await AsyncStorage.setItem('@userLoggedIn', 'true');
    this.props.navigation.navigate('Tabs');
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text onPress={this._setAsyncToken}>Login Screen</Text>
      </View>
    );
  }
}
export default LoginScreen;
