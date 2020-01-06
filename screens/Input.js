import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, } from 'react-native'
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
      IP: ''
    }
  }
  ws = new ReconnectingWebSocket(URL)
  componentWillUnmount() {
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...this.state.messages] }))

  submitMessage() {
    if (this.state.inputText !== "") {
      this.ws.send(JSON.stringify({
        msg: this.state.inputText,
        date: this.state.data,
        IP: this.state.IP,
        nickName: this.state.IP
      }))
      this.setState({ inputText: '' })

      fetch("http://smart-chat.eu-4.evennode.com/sendMsg", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          msg: this.state.inputText,
          date: this.state.date,
          IP: this.state.IP,
          nickName: this.state.IP
        })
      })
        .then((response) => {
          console.log(response)
        })
    }
  }

  render() {

    return (
      <View style={styles.mainView}>
        <View >
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={2}
            placeholder='Type something...'
            selectionColor={'#FC441B'}
            onChangeText={inputText => this.setState({ inputText })}
            value={this.state.inputText}
            maxLength={400}
            tex
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