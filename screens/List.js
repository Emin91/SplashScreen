import React, { Component } from 'react'
import { Text, ImageBackground, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import { NetworkInfo } from 'react-native-network-info';
import { Dimensions } from "react-native";
import UserMessage from './UserMessage'
import Hyperlink from 'react-native-hyperlink'
import PushNotification from "react-native-push-notification"

PushNotification.configure({
  onRegister: function (token) {
    //console.log("TOKEN:", token);
  },
  onNotification: function (notification) {
    console.log("NOTIFICATION text here is:", notification);
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

const URL = 'ws://web-chat.eu-4.evennode.com/'

export class ScrollScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      messages: [],
      inputText: '',
      date: new Date('July 36, 2018 05:35'),
      ws: '',
      IP: '',
    }
  }

  OurMess = ({ text, time, }) => {
    return (
      <View style={{ flexDirection: 'row', paddingBottom: 2, paddingTop: 2 }} >
      
        <View style={{ flex: 1, paddingLeft: 100 }}>
          <View style={{ paddingLeft: 15, paddingTop: 2, paddingBottom: 5, backgroundColor: this.props.back, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }}>
            <Hyperlink linkDefault={true}>
              <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'CircularStd-Book', }}>{text}</Text>
            </Hyperlink>
          </View>
        </View>
        <View style={{ backgroundColor: this.props.back, paddingRight: 5, paddingTop: 5, justifyContent: 'flex-start' }}>
          <Text style={{ color: '#c2c2c2' }}>{time}</Text>
        </View>
      </View>
    )
  }

  getNotification(text, name) {
    PushNotification.localNotification({
      title: text,
      message: name,
    });
    PushNotification.configure({
      onNotification: function (notification) {
        //console.log('Notification is clicked')
      }
    })
  }

  addMessage = message => this.setState(state => ({ messages: [message, ...this.state.messages] }))
  ws = new WebSocket(URL)
  componentDidMount() {
    fetch('http://web-chat.eu-4.evennode.com/getmessages', {
      method: 'get',
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ isLoading: false, messages: responseJson.reverse() });
        //console.log(responseJson);
      })
      .catch(error => {
        //console.error(error);
      });

    this.ws.onopen = () => {
      //console.log('connected')
    }

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data)

      this.addMessage(message)
      if (message.time != undefined && message.text != this.state.messages.message) {
        if (message.name != this.props.username) {
          this.getNotification(message.name, message.text)
        }
      }
      this.ws.onclose = () => {
        console.log('disconnected')
        this.setState({
          ws: new WebSocket(URL),
        })
      }
    }
  }


  render() {
    return (
      <ImageBackground style={{ flex: 1, }} >
        <Hyperlink linkDefault={true}>
          <FlatList
            inverted={true}
            data={this.state.messages}
            renderItem={({ item }) => {
            if (item.time !== undefined ) {
              if (this.props.username !== item.name) {
                return (<UserMessage text={item.text} name={item.name} ip={item.ip} time={new Date(item.time).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')} />)
              } else {
                return (<this.OurMess text={item.text} time={new Date(item.time).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')} />)
              }
            }
          }
        }keyExtractor={(item, index) => 'key' + index}
          />
        </Hyperlink>
        </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScrollScreen)