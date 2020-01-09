import React, { Component } from 'react'
import { Text, Linking, ImageBackground, View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import { NetworkInfo } from 'react-native-network-info';
import { Dimensions } from "react-native";
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import UserMessage from './UserMessage'
import Hyperlink from 'react-native-hyperlink'
import PushNotification from "react-native-push-notification"
import ParsedText from 'react-native-parsed-text';

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

const screenWidth = Math.round(Dimensions.get('window').width);
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
            [
              {type: 'url',                       style: styles.url, onPress: this.handleUrlPress},
              {type: 'phone',                     style: styles.phone, onPress: this.handlePhonePress},
              {type: 'email',                     style: styles.email, onPress: this.handleEmailPress},
            ]
          }
          childrenProps={{allowFontScaling: false}}
        >
          {text}

        </ParsedText>
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

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...this.state.messages] }))

  ws = new WebSocket(URL)
  componentDidMount() {
    this.setUserName()

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

    NetworkInfo.getIPAddress().then(ipAddress => {
      this.setState({ IP: ipAddress })
    })

    this.ws.onopen = () => {
      //console.log('connected')
    }

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      this.addMessage(message)
      if (message.name != this.props.username) {
        this.getNotification(message.name, message.text)
    }
    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  setUserName() {
    if(this.props.username==undefined){
        new WebSocket('http://web-chat.eu-4.evennode.com/putuser').send(JSON.stringify({
        id:this.props.ID,
        name: 'User',
        state: true,
    }));
    fetch(urlPut, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            id:this.props.ID,
            name: 'User',
            state: true,
        }),
    }).then((response) => response.json())
       
    console.log('SetUser' + setUserName());
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
            if (this.props.username!== item.name) {
              return (<UserMessage text={item.text} name={item.name} ip={item.ip} time={new Date(item.time).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}/>)
              } else {
              return (<this.OurMess text={item.text} time={new Date(item.time).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')} />)
              }
            }}
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