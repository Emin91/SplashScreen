import React, { Component } from 'react'
import { Text, ImageBackground, View, FlatList } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import { NetworkInfo } from 'react-native-network-info';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';


const URL = 'ws://one-chat.eu-4.evennode.com/'
Item = ({ text, time, ip }) => {
  return (
    <View style={{ flexDirection: 'row-reverse', paddingTop: 5, paddingBottom: 4 }} >
      <Text style={{
        paddingLeft: 10, paddingRight: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: 'black', fontFamily: 'CircularStd-Book'
      }} >{time}</Text>
      <View style={{ flexDirection: 'row-reverse', paddingTop: 5, paddingBottom: 4 }} >
        <Text style={{
        paddingLeft: 10, paddingRight: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: 'black', fontFamily: 'CircularStd-Book'
      }}>{text}</Text>
      </View>
    </View>
  )
}

export class ScrollScreen extends Component {
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

  

  render() {
    return (
      <ImageBackground style={{ flex: 1, }}  >
        <KeyboardAwareScrollView style={{ width: '100%', height: '100%', marginTop: 10 }}>
        
        <FlatList
                  inverted={true}
                  data={this.state.messages}
                  renderItem={({ item }) => <Item text={item.text} time={new Date(item.time).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} />}
                  keyExtractor={item=>item._id}
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