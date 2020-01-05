import React, { Component } from 'react'
import { Image, View, Text, StatusBar, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import styles from '../styles/LoginPageStyle'

export default class SplashScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset={-255} enabled>
                <View style={styles.container}>
                <StatusBar backgroundColor="#F23A12" barStyle="light-content" />
                <View style={{flex: 1.5}}>
                    <View style={styles.logoView}>
                        <Image
                            source={require('../src/assets/img/logo.png')}
                            style={styles.logo} />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.textInput}
                            selectionColor={'#FC441B'}
                            placeholder='Type something...'
                        />
                    </View>
                        <View style={styles.enterBtnView}>
                            <TouchableOpacity style={styles.enterBtn}>
                                <Text style={styles.enterBtnText}>Enter to conversation</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        )
    }
}