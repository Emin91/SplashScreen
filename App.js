import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import DrawerNav from './navigation/DrawerNavigation'


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FC441B'}}>
        <DrawerNav />
      </SafeAreaView>
    )
  }
}
