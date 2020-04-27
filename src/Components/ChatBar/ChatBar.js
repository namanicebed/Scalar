import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ProfileImageContainer from './ProfileImageContainer';
import {TouchableRipple} from 'react-native-paper';


class ChatBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  
  render() {
    return (
      <TouchableRipple
        // rippleColor={this.props.colorScheme.primary}
        rippleColor={
          this.props.colorScheme.primary == '#fafafa'
            ? 'rgba(255, 255, 255, .2)'
            : 'rgba(0, 0, 0, .2)'
        }
        // activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('ChatScreen', {
            _id: this.props._id,
          })
        }>
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
            style={{justifyContent: 'space-between', flex: 0.1, height: 43}}>
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
      </TouchableRipple>
    );
  }
}
export default ChatBar;
