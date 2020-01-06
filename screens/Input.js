import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, } from 'react-native'


import styles from '../styles/InputStyle'

export default class App extends Component {


  render() {

    return (
      <View style={styles.mainView}>
        
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={2}
            placeholder='Type something...'
            selectionColor={'#FC441B'}
          />
        <View style={styles.btnSendView}>
          <TouchableOpacity onPress={this.getNotification}>
            <Image
              style={{ width: 38, height: 32 }}
              source={require('../src/assets/img/Send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

