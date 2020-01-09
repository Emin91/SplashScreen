import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, } from 'react-native'
import { NetworkInfo } from 'react-native-network-info';
import styles from '../styles/InputStyle'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
const URL = 'ws://web-chat.eu-4.evennode.com/'


export class ChatInput extends Component {
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
  ws = new WebSocket(URL)

  
  componentWillUnmount() {
  }

   
  componentDidMount(){
  
    NetworkInfo.getIPAddress().then(ipAddress => {
      this.setState({ IP: ipAddress })
    })
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...this.state.messages] }))

  submitMessage() {
    if (this.state.inputText !== "" && this.state.inputText.trim().length !== 0) {
      this.ws.send(JSON.stringify({
        text: this.state.inputText,
        ip: this.state.IP,
        name: this.props.username
      }))
      this.setState({ inputText: '' })
      

      fetch("http://web-chat.eu-4.evennode.com/putmessage", {
        method: "put",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          text: this.state.inputText,
          ip: this.state.IP,       
          name: this.props.username

        })
      })
        .then((response) => {
          console.log(response)
        })
    } else {
      this.setState({ inputText: '' })

    }
  }

  render() {

    return (
      <View style={styles.mainView}>
        <View >
          <TextInput
            style={styles.textInput}
            multiline={false}
            numberOfLines={1}
            placeholder='Type something...'
            selectionColor={'#FC441B'}
            onChangeText={inputText => this.setState({ inputText })}
            value={this.state.inputText}
            maxLength={400}
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
function mapStateToProps(state) {
    return {
        result: state.result,
        back: state.back,
        username: state.username
    }
}

function mapDispatchToProps(dispatch) {
    return {
        number: (id) => dispatch(chacgebg(id)),
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatInput)


