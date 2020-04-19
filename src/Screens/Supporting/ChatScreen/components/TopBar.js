import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from '../../NewChat/components/Avatar';
import {Menu, Button} from 'react-native-paper';
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
    };
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 56,
          backgroundColor: this.props.colorScheme.secondary,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          elevation:3,
          shadowOffset: {height: 1, width: 0},
          shadowOpacity: 0.1,
          shadowRadius: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <MaterialIcon
            name="arrow-back"
            color={this.props.colorScheme.primary}
            size={26}
            onPress={() => this.props.navigation.pop()}
          />
          <Avatar name={'Naman Singh'} topBar />
          <View style={{justifyContent: 'space-evenly'}}>
            <Text
              style={{
                color: this.props.colorScheme.primaryText,
                fontFamily: 'OpenSans-Regular',
                fontSize: 15,
              }}>
              Naman Singh
            </Text>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'OpenSans-regular',
                fontSize: 13.5,
              }}>
              online 2 hours ago
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="ios-videocam"
            size={24.5}
            color={this.props.colorScheme.primary}
          />
          <MaterialIcon
            name="local-phone"
            size={22}
            color={this.props.colorScheme.primary}
            style={{marginHorizontal: 23}}
          />
          <Menu
            visible={this.state.menuVisible}
            onDismiss={() => this.setState({menuVisible: false})}
            contentStyle={{
              backgroundColor:
                this.props.colorScheme.background == '#fafafa'
                  ? '#fafafa'
                  : '#2B2B2B',
              width: 150,
            }}
            anchor={
              <MaterialCommIcons
                name="dots-vertical"
                size={25}
                onPress={() => this.setState({menuVisible: true})}
                color={this.props.colorScheme.primary}
                style={{marginRight: 10}}
              />
            }>
            <Menu.Item
              onPress={() => {}}
              title="View Info"
              titleStyle={{
                color: this.props.colorScheme.primary,
                fontFamily: 'OpenSans-Regular',
                fontSize: 16,
              }}
            />
            <Menu.Item
              onPress={() => {}}
              title="Block Person"
              titleStyle={{
                color: this.props.colorScheme.primary,
                fontFamily: 'OpenSans-Regular',
                fontSize: 16,
              }}
            />
            <Menu.Item
              onPress={() => {}}
              title="Delete Chat"
              titleStyle={{
                color: '#d20000',
                fontFamily: 'OpenSans-Regular',
                fontSize: 16,
              }}
            />
          </Menu>
        </View>
      </View>
    );
  }
}
export default TopBar;
