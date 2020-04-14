/**
 * Using React @v16.11.0
 * Using ReactNative @v0.62.2
 * Using React-Navigation@v5.0
 * For further details refer to package.json
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Pallete} from './Common/Pallete';
import {Provider as PaperProvider} from 'react-native-paper';

import MainStack from './Navigation/AppNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      colorScheme: Appearance.getColorScheme(),
    };
  }

  componentDidMount() {
    Appearance.addChangeListener(this._handleAppearanceChange);
  }

  componentWillUnmount() {
    Appearance.removeChangeListener(this._handleAppearanceChange);
  }

  _handleAppearanceChange = (preferences) => {
    const {colorScheme} = preferences;
    this.setState({colorScheme});
  };

  render() {
    console.log(this.state.colorScheme);
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer
            theme={
              this.state.colorScheme == 'light'
                ? Pallete.lightMode
                : Pallete.darkMode
            }>
            <MainStack />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
export default App;
