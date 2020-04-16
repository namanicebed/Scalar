import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
class ProfileImageContainer extends Component {
  render() {
    return (
      <View
        style={{
          height: 58,
          width: 58,
          borderRadius: 58 / 2,
          backgroundColor: '#000',
        }}>
        <Image
          source={{
            uri:
              'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
          }}
          style={{height: '100%', width: '100%', borderRadius: 58 / 2}}
          resizeMode="cover"
        />
      </View>
    );
  }
}
export default ProfileImageContainer;
