import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

export default class DrawerMenu extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.logoView}>
                    <Image 
                        source={require('../assets/img/logo.png')}
                        style={{width: 160, height: 145}}    
                    />
                </View>         
                <View style={{flex: 1, backgroundColor: '#F23A12'}}/>   
                <View style={{flex: 1.8, backgroundColor: '#F23A12'}}/>   
                <View style={{flex: 1, backgroundColor: '#F23A12'}}/>    
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#F23A12'
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})