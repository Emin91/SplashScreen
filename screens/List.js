import React, { Component } from 'react'
import { Text, ImageBackground, View, FlatList, } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import { NetworkInfo } from 'react-native-network-info';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import { Dimensions } from "react-native";

import PushNotification from "react-native-push-notification"

// PushNotification.configure({
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },
//   senderID: "468408451342",
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true
//   },
//   popInitialNotification: true,
//   requestPermissions: true
// });

//const screenWidth = Math.round(Dimensions.get('window').width);
const URL = 'ws://one-chat.eu-4.evennode.com/'


export class ScrollScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      messages: [],
      inputText: '',
      date: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
      ws: '',
      name: '',
      IP: '',
      text: '',
    }
  }
  Item = ({ text, time, ip, name,  }) => {
    return (
      <View style={{ flex: 1, marginRight: '30%', marginTop: 5, marginBottom: 3,  }} >
        <View style={{flex: 1.5,flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: '#d2d2d2'}}>
    <Text style={{fontSize: 12, color: '#000', fontFamily: 'CircularStd-Book'}}>{name}</Text>
          </View>
          <View style={{flex: 1, backgroundColor: '#d2d2d2', alignItems: 'flex-end',borderTopRightRadius: 10, paddingRight: 10, marginRight: 60}}>
    <Text style={{fontSize: 12, color: '#000', fontFamily: 'CircularStd-Book'}}>{ip}</Text>
          </View>
        </View>
        <View style={{flex: 1.5,flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: '#fff',justifyContent: 'center', paddingLeft: 10, paddingTop: 5, paddingBottom: 5,}}>
    <Text style={{fontSize: 20, color: '#000', fontFamily: 'CircularStd-Book'}}>{text}</Text>
          </View>
          <View style={{flex: 0.4, backgroundColor: '#fff', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'flex-end', paddingRight: 10}}>
    <Text>{time}</Text>
          </View>
        </View>
      </View>
    )
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
        console.log(responseJson.text);
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
      //this.getNotification(message.text)
      console.log(message)
    }
    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }
   
  }


  // getNotification(text) {
  //   PushNotification.localNotification({
  //     title: "name",
  //     message: text,
  //   });
  //   PushNotification.configure({
  //     onNotification: function (notification) {
  //       console.log('Notification is clicked')
  //     }
  //   })
  // }

  render() {
    let{messages, isLoading} = this.state;
    return (
      <ImageBackground style={{ flex: 1, }}  >
          <FlatList
            inverted={true}
            data={messages}
            renderItem={({ item }) => <this.Item text={item.text} name={item.name} ip={item.ip} time={new Date(item.time).toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})} />}
            //renderItem={({ item }) => <this.Item text={item.text} name={item.name} ip={item.ip} time={new Date(item.time).toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})} />}
            keyExtractor={item => item._id}
            refreshing={isLoading}
            onRefresh={this.getData}
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