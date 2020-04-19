import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopSearchBar from '../../../../Components/TopSearchBar';
class TopBar extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 56,
          elevation:3,
          backgroundColor: this.props.colorScheme.secondary,
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {height: 1, width: 0},
          shadowOpacity: 0.1,
          shadowRadius: 1,
        }}>
        <MaterialIcon
          name="arrow-back"
          color={this.props.colorScheme.primary}
          size={26}
          onPress={() => this.props.navigation.pop()}
        />
        <TopSearchBar colorScheme={this.props.colorScheme} />
        <Ionicons
          name="md-person-add"
          color={this.props.colorScheme.primary}
          size={22}
        />
      </View>
    );
  }
}
export default TopBar;
