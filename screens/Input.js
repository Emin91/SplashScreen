import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, ToastAndroid, } from 'react-native'
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import { NetworkInfo } from 'react-native-network-info';
import styles from '../styles/InputStyle'

const URL = 'ws://one-chat.eu-4.evennode.com/'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      messages: [],
      inputText: '',
      date: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
      ws: '',
      IP: '',
    }
  }
  ws = new ReconnectingWebSocket(URL)

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...this.state.messages] }))

  submitMessage() {
    if (this.state.inputText !== "") {
      this.ws.send(JSON.stringify({
        text: this.state.inputText,
        time: this.state.data,
        ip: this.state.IP,
        name: this.state.IP
      }))
      this.setState({ inputText: '' })

      fetch("http://one-chat.eu-4.evennode.com/putmessage", {
        method: "put",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },

        body: JSON.stringify({
          text: this.state.inputText,
          time: this.state.date,
          ip: this.state.IP,
          name: this.state.IP
        })
      })
        .then((response) => {
          console.log(response)
        })
    } else {
      ToastAndroid.show('Need type some message!', ToastAndroid.SHORT);
    }
  }


  render() {

    return (
      <View style={styles.mainView}>
        <View >
          <TextInput
            style={styles.textInput}
            numberOfLines={2}
            placeholder='Type something...'
            selectionColor={'#FC441B'}
            onChangeText={inputText => this.setState({ inputText })}
            value={this.state.inputText}
            maxLength={200}
          />
        </View>
        <View style={styles.btnSendView}>
          <TouchableOpacity onPress={this.submitMessage.bind(this)}>
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