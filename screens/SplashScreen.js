import React, { Component } from 'react'
import { Image, View, StatusBar } from 'react-native'
import styles from '../styles/SplashScreenStyle'




 export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
      
      }

   
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden /> 
                <Image 
                    source={require('../src/assets/img/logo.png')} 
                    style={styles.logo}/>
            </View>
        )
    }
}

