import React, {Component} from 'react';
import {View, Text} from 'react-native-paper';
import {Searchbar} from 'react-native-paper';

export default class SearchBar extends Component {
  render() {
    return (
      <Searchbar
        style={{
          marginTop: 20,
          alignSelf: 'center',
          width: '100%',
          borderRadius: 5,
          height: 45,
          backgroundColor: '#e3e3e3',
          elevation: 3,
          shadowRadius: 0,
          shadowOffset: {height: 0, width: 0},
        }}
        placeholder="Search..."
        inputStyle={{
          fontFamily: 'OpenSans-Regular',
          fontSize: 17,
        }}
        selectionColor='grey'
      />
    );
  }
}
