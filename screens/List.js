import React, { Component } from 'react'
import { Text, ImageBackground, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import { NetworkInfo } from 'react-native-network-info';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import { Dimensions } from "react-native";
import UserMessage from './UserMessage'
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
const URL = 'ws://one-chat.eu-4.evennode.com/'


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




  OurMess = ({ text, time, ip, name }) => {

    return (

      <View style={{ flex: 1, marginRight: '30%', marginTop: 5, marginBottom: 3, backgroundColor: this.props.back, width: screenWidth / 1.5 }} >
        <View style={{ flexDirection: 'row', flex: 1, paddingTop: 5, paddingBottom: 4, }} >
          <Text style={{
            flex: 0.6, paddingLeft: 10, paddingRight: 10, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: 'black', fontFamily: 'CircularStd-Book'
          }}>{text}</Text>
          <Text style={{
            flex: 0.3, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 15, color: 'black', fontFamily: 'CircularStd-Book'
          }} >{time} {ip} {name}</Text>
        </View>
      </View>

    )
  }

  getNotification(text, name) {
    PushNotification.localNotification({
      title: name,
      message: text,
    });
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('Notification is clicked')
      }
    })
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...this.state.messages] }))

  ws = new ReconnectingWebSocket(URL)
  componentDidMount() {

    fetch('http://one-chat.eu-4.evennode.com/getmessages', {
      method: 'get',
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ isLoading: false, messages: responseJson.reverse() });
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
      this.getNotification(message.name, message.text)
      console.log(message)
    }
    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, }}  >

        <FlatList
          inverted={true}
          data={this.state.messages}
          renderItem={({ item }) => {
            if (this.state.IP !== item.ip) {
              return (<UserMessage text={item.text} name={item.name} ip={item.ip} time={new Date(item.time).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} />)
            } else {
              return (<this.OurMess text={item.text} time={new Date(item.time).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} />)
            }
          }}
        />
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
















  // < View style = {{ flexDirection: 'row-reverse', paddingTop: 5, paddingBottom: 4 }}>
  //   <View style={{ width: 290 }}>
  //     <Text style={{
  //       paddingLeft: 10, paddingRight: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: '#FFFFFF', fontFamily: 'CircularStd-Book', backgroundColor: this.props.back
  //     }}> Hi. I am Test</Text>
  //     <View style={{ height: '100%', position: 'absolute', alignSelf: 'flex-end', justifyContent: 'flex-start' }}>
  //       <Text style={{ color: '#EDEDED', }}>6:30 PM</Text>
  //     </View>
  //   </View>