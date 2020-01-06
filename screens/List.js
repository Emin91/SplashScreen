import React, { Component } from 'react'
import { Text, ImageBackground, View, FlatList } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import { NetworkInfo } from 'react-native-network-info';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import { Dimensions } from "react-native";

import PushNotification from "react-native-push-notification"

PushNotification.configure({
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  senderID: "468408451342",
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },
  popInitialNotification: true,
  requestPermissions: true
});




const screenWidth = Math.round(Dimensions.get('window').width);
const URL = 'ws://smart-chat.eu-4.evennode.com/'


export class ScrollScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      messages: [],
      inputText: '',
      date: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
      ws: '',
      name: '',
      IP: '',

    }
  }
  Item = ({ outputMes, timeMes }) => {

    return (
      <View style={{ flex: 1, paddingTop: 5, paddingBottom: 4, backgroundColor: this.props.back, borderTopRightRadius: 60, borderBottomRightRadius: 60, marginBottom: 4, width: screenWidth / 1.5 }} >
        <View style={{ flexDirection: 'row', flex: 1, paddingTop: 5, paddingBottom: 4, }} >
          <Text style={{
            flex: 0.6, paddingLeft: 10, paddingRight: 10, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: 'black', fontFamily: 'CircularStd-Book'
          }}>{outputMes}</Text>
          <Text  style={{
            flex: 0.3, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 15, color: 'black', fontFamily: 'CircularStd-Book'
          }} >{timeMes} </Text>
        </View>
      </View>
    )
  }


  addMessage = message =>
    this.setState(state => ({ messages: [message, ...this.state.messages] }))

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
      console.log(message.msg)
    }
    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  getNotification() {
    PushNotification.localNotification({
      title: "Orange Chat",
      message: "Your message is sended",
    });
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('Notification is clicked')
      }
    })
  }
  render() {
    
    return (
      <ImageBackground style={{ flex: 1, }}  >
        <KeyboardAwareScrollView style={{ width: '100%', height: '100%', marginTop: 10 }}>
          <FlatList
            inverted={true}
            data={this.state.messages.msg}
            renderItem={({ item }) => <this.Item outputMes={item.msg} timeMes={item.date }/>}
            keyExtractor={item => item._id}
          />
        </KeyboardAwareScrollView>
      </ImageBackground>
    )
  }
}

function mapStateToProps(state) {
  return {
    result: state.result,
    back: state.back,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    number: (id) => dispatch(chacgebg(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScrollScreen)