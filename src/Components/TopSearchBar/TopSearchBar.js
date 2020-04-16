import React, {Component} from 'react';
import {Text, View,TextInput} from 'react-native';
class TopSearchBar extends Component {
  render() {
    return (
      <View
        style={{
          width: '75%',
          height: '100%',
        }}>
        <TextInput
          style={{
            width: '100%',
            height: '100%',
            fontSize: 18,
            fontFamily: 'OpenSans-Regular',
            color: this.props.colorScheme.primary,
          }}
          placeholder="Search"
          placeholderTextColor="grey"
          selectionColor={this.props.colorScheme.primary}
        />
      </View>
    );
  }
}
export default TopSearchBar;
