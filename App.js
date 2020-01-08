import React, { Component } from 'react'
import { View } from 'react-native'
import DrawerNav from './navigation/DrawerNavigation'

export default class App extends Component {
 
  render() {
    return (
      <View style={{flex: 1}}>
        <DrawerNav />
      </View>
    )
  }
}
