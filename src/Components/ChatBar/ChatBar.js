import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ProfileImageContainer from './ProfileImageContainer';
import Ripple from 'react-native-material-ripple';
class ChatBar extends Component {
  render() {
    return (
      <Ripple rippleColor={this.props.colorScheme.primary} activeOpacity={0.8}>
        <View
          style={{
            marginVertical: 10,
            width: '100%',
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',

              flex: 0.85,
            }}>
            <ProfileImageContainer />
            <View style={{justifyContent: 'space-evenly', marginLeft: 20}}>
              <Text
                style={{
                  fontFamily: 'OpenSans-Regular',
                  fontSize: 16,
                  color: this.props.colorScheme.primaryText,
                }}>
                Naman Singh
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSans-Light',
                  fontSize: 15,
                  color: this.props.colorScheme.secondaryText,
                  width: '100%',
                }}
                numberOfLines={1}>
                this is meee brow ....
              </Text>
            </View>
          </View>
          <View
            style={{justifyContent: 'space-between', flex: 0.1, height: 45}}>
            <Text
              style={{
                fontFamily: 'OpenSans-Light',
                fontSize: 14,
                color: this.props.colorScheme.secondaryText,
              }}>
              now
            </Text>
            <View />
          </View>
          <View style={{width: 20}} />
        </View>
      </Ripple>
    );
  }
}
export default ChatBar;
