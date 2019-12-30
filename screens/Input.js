import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'

export default class App extends Component {
    render() {
      return (
        <View style={{ backgroundColor: '#fff', justifyContent: 'center', padding: 4 , }}>
        <View style={{backgroundColor: 'red'}}/>
        <TextInput
          style={{paddingLeft: '8%', backgroundColor: 'white', borderColor: '#FC441B', borderWidth: 1.8, fontSize: 18, borderRadius: 66, fontFamily: 'CircularStd-Book' }}
          placeholder='Type something...'
        />
        <TouchableOpacity style={{position: 'absolute', marginLeft: '87%'}}>
          <Image 
            style={{width: 40, height: 35}}
            source={require('../src/assets/img/Send.png')}
          />
        </TouchableOpacity>
      </View>
      )
    }
  }