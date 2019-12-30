import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../src/assets/img/logo.png')} 
                    style={styles.logo}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fc441b',
    },
    logo: {
        width: 200,
        height: 180,
    },
})