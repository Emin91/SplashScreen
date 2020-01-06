import styles from '../Styles/Styles';
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import MyMessage from '../Components/MyMessage';
import UserMessage from '../Components/UserMessage';
import { NetworkInfo } from 'react-native-network-info';
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';


const URL = 'ws://smart-chat.eu-4.evennode.com/'

//Flatlist item
Item = ({ msg, date, IP }) => {
  return (
    <View style={styles.userMessageRow}>
      <Text style={styles.userTimeText}>{date}</Text>
      <View style={styles.userMessageContainer}>
        <Text style={styles.userMessageText}>{msg}</Text>
      </View>
    </View>
  )
}
//Flatlist item
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
  /*
    componentDidMount() {
      fetch('http://smart-chat.eu-4.evennode.com/all-msg ', {
        method: 'GET',
      })
        .then(response => response.json())
        .then(responseJson => {
          this.setState({isLoading: false, messages: responseJson});
          console.log(responseJson);
        })
        .catch(error => {
          console.error(error);
        });
    }
  
  
  
  
  
    submitMessage() {
  
      this.setState({inputText: ''});
    }
  
    
  */
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
        text: this.state.inputText,
        time: this.state.data,
        ip: this.state.IP,
        name: this.state.IP
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
      <SafeAreaView style={styles.chatScreenContainer}>
        <View style={styles.chatScreenContainer}>
          <View style={styles.messagesMainContainer}>
            <View style={styles.dinamicMessagesField}>
              <View style={styles.innerMessagesField}>

                <FlatList
                  inverted={true}
                  data={this.state.messages}
                  renderItem={({ item,index }) => <Item msg={item.msg} date={new Date(item.date).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} />}
                  keyExtractor={item=>item._id}

                />

              </View>
            </View>
          </View>
          <View style={styles.messagesInputContainer}>
            <TextInput
              placeholder="Введите сообщение..."
              style={styles.messagesInput}
              multiline={true}
              numberOfLines={4}
              placeholderTextColor="#000000"
              onChangeText={inputText => this.setState({ inputText })}
              value={this.state.inputText}
              maxLength={400}
            />
            <TouchableOpacity
              style={styles.paperPlaneContainer}
              onPress={this.submitMessage.bind(this)}>
              <Image
                source={require('../images/paper-plane.png')}
                style={styles.paperPlaneButton}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}