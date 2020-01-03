import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, } from 'react-native'

import styles from '../styles/InputStyle'

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.textInput}
          placeholder='Type something...'
        />
        <View style={styles.btnSendView}>
          <TouchableOpacity>
            <Image
              style={{ width: 40, height: 34 }}
              source={require('../src/assets/img/Send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

