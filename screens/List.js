import React, { Component } from 'react'
import { Text, ImageBackground, View, FlatList,  Dimensions, Keyboard, KeyboardAvoidingView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import { NetworkInfo } from 'react-native-network-info';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import PushNotification from "react-native-push-notification"
const URL = 'ws://one-chat.eu-4.evennode.com/'

PushNotification.configure({
  onRegister: function(token) {
    console.log("TOKEN:", token);
  },
  onNotification: function(notification) {
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
},
);


export class ScrollScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        messages: [],
        inputText: '',
        date: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
        ws: '',
        IP: '',     
        screenHeight: Dimensions.get('window').height,
        flatListHeight: Dimensions.get('window').height,
      }
    }
    
    Item = ({ text, time, ip }) => {
      return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }} >
          <View style={{ flex: 1, paddingLeft: 100 }}>
            <View style={{ paddingLeft: 15, paddingTop: 2, paddingBottom: 5, backgroundColor: this.props.back, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }}>
              <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'CircularStd-Book', }}>{text}</Text>
            </View>
          </View>
          <View style={{ backgroundColor: this.props.back, paddingRight: 5, paddingTop: 5, justifyContent: 'flex-start' }}>
            <Text style={{ color: '#d2d2d2' }}>{time}</Text>
          </View>
        </View>
      )
    }

ws = new ReconnectingWebSocket(URL)
  componentDidMount() {

    this._keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyBoardDidShow,);
        this._keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyBoardDidHide,);

    fetch('http://one-chat.eu-4.evennode.com/getmessages', {
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
      this.getNotification()
      console.log("new message: " + message)
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
      message: "sdsds"
  });
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('Notification is clicked')
      }
    })
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...this.state.messages] }))
  
    componentWillUnmount() {
      this._keyboardDidShowListener.remove();
      this._keyboardDidHideListener.remove();
    }
    
    _keyBoardDidShow = e => {
      this.setState({
        flatListHeight: Dimensions.get('window').height - e.endCoordinates.height,
      })
    }
    _keyBoardDidHide = () => {
      this.setState({
        flatListHeight: Dimensions.get('window').height,
      })
    }
  

  render() {
    return (
      <ImageBackground style={{ flex: 1, }}  >
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-255} enabled>
        <FlatList
                    inverted={true}
                    data={this.state.messages}
                    renderItem={({ item }) => <this.Item text={item.text} time={new Date(item.time).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} />}
                    keyExtractor={item=>item._id}
                  />
        </KeyboardAvoidingView>
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