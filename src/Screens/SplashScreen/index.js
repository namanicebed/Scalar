import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class SplashScreen extends Component {
  async componentDidMount() {
    // console.log(this.props);
    setTimeout(this._navigateForward, 500);
  }


  _getAsyncToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const userAuthenticated = await AsyncStorage.getItem('@userLoggedIn');
        if (userAuthenticated) {
          resolve('authenticated');
        } else {
          resolve('not authenticated');
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  _navigateForward = async () => {
    try {
      const authStatus = await this._getAsyncToken();
      console.log(authStatus);
      if (authStatus == 'authenticated') {
        this.props.navigation.navigate('Tabs');
      } else if (authStatus == 'not authenticated') {
        this.props.navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}
export default SplashScreen;
