import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, } from 'react-native'
import styles from '../styles/InputStyle'
import PushNotification from "react-native-push-notification"

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
});

export default class App extends Component {

  getNotification() {
    PushNotification.localNotification({
      title: "Orange Chat",
      message: "Your message is sended",
  });
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('Notification is clicked')
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.textInput}
          placeholder='Type something...'
          selectionColor={'#FC441B'}
        />
        <View style={styles.btnSendView}>
          <TouchableOpacity onPress={this.getNotification}>
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

