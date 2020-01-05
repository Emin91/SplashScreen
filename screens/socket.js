import React, { Component } from 'react';
import {  SafeAreaView,  View,  Image,  Text,  TouchableOpacity,  TextInput,  FlatList,} from 'react-native';
import { NetworkInfo } from 'react-native-network-info';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
//Flatlist item
const URL = 'ws://smart-chat.eu-4.evennode.com/'
Item = ({ msg, date, IP }) => {
  return (
    <View style={{ flexDirection: 'row-reverse', paddingTop: 5, paddingBottom: 4 }} >
      <Text style={{
        paddingLeft: 10, paddingRight: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: '#FFFFFF', fontFamily: 'CircularStd-Book', backgroundColor: this.props.back
      }} >{date}</Text>
      <View style={{ flexDirection: 'row-reverse', paddingTop: 5, paddingBottom: 4 }} >
        <Text style={{
        paddingLeft: 10, paddingRight: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: '#FFFFFF', fontFamily: 'CircularStd-Book', backgroundColor: this.props.back
      }}>{msg}</Text>
      </View>
    </View>
  )
}

export default class ChatScreen extends Component {
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
  componentDidMount() {

    fetch('http://smart-chat.eu-4.evennode.com/all-msg', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ isLoading: false, messages: responseJson });
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });

    NetworkInfo.getIPAddress().then(ipAddress => {
      this.setState({ IP: ipAddress })
    })

    this.ws.onopen = () => {
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      this.addMessage(message)
      console.log(message)
    }
    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }

  }
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
        mobileNickName: this.state.IP
      }))
      this.setState({ inputText: '' })
    
    fetch("http://smart-chat.eu-4.evennode.com/sendMsg", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },

      body: JSON.stringify({
        msg: this.state.inputText,
        date: this.state.date,
        IP: this.state.IP,
        mobileNickName: this.state.IP
      })
    })
      .then((response) => {
        console.log(response)
      })
    }
  }
  render() {
    return (
      <SafeAreaView >
        <View >
          <View >
            <View >
              <View >

                <FlatList
                  inverted={true}
                  data={this.state.messages}
                  renderItem={({ item,index }) => <Item msg={item.msg} date={new Date(item.date).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} />}
                  keyExtractor={item=>item._id}

                />

              </View>
            </View>
          </View>
          <View >
            <TextInput
              placeholder="Введите сообщение..."
              backgroundColor='black'
              multiline={true}
              numberOfLines={4}
              placeholderTextColor="#000000"
              onChangeText={inputText => this.setState({ inputText })}
              value={this.state.inputText}
              maxLength={400}
            />
            <TouchableOpacity
            
              onPress={this.submitMessage.bind(this)}>
            
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}