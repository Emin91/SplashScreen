import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

import Scrollist from './src/screens/List'
import Input from './src/screens/Input'
import Header from './src/screens/Header'


class App extends Component {
  render() {
    return (
      <ImageBackground source={require('./src/assets/img/bg1.png')} style={styles.container}>
      <View style={styles.container}>
        <Header />
        <Scrollist />
        <Input />
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
})

export default App
