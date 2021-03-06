import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from './component/AppHeader';
import CallAmbulance from './screens/CallAmbulance';
import CallPolice from './screens/CallPolice';
import PersonalCall from './screens/PersonalCall';
import loginScreen from './screens/loginSceen';
import WomanSafetyScreen from './screens/WomanSafetyScreen';

export default class App extends React.Component{
  render(){
    return(
      <View> 
      <AppContainer/>
      <AppHeader/>
      </View>
    )
  }
}
const TabNavigator = createSwitchNavigator({
  CallPolice : CallPolice,
  CallAmbulance :CallAmbulance,
  PersonalCall :PersonalCall,
  loginScreen:loginScreen,
  WomanSafetyScreen:WomanSafetyScreen
  
})



const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
