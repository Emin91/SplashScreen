import React, { Component } from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, ImageBackground, Image, Dimensions, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import {chacgebg} from '../action/action'


 const screenWidth = Math.round(Dimensions.get('window').width);
 export class DrawerMenu extends Component {
    constructor() {
        super()
        this.state = {
           
    
        }
      }
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FC441B', }} behavior='padding' keyboardVerticalOffset={-280} enabled>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: '#F23A12' }}>
                        <View style={{ alignItems: 'center', marginBottom: 5 }}>
                            <Image source={require('../src/assets/img/logo.png')} style={{ width: 160, height: 145 }} />
                        </View>
                        <View style={{ flex: 1, borderRadius: 30, backgroundColor: 'white', marginBottom: 10 }}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#D2D2D2', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, width: 200, }}>
                                    <Text style={{ fontSize: 18, }}>
                                        Message background 
                            </Text>
                                </View>
                            </View>
                            <View style={{ flex: 8, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'space-around', borderRadius: 30 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 90 / 2, backgroundColor: '#FC441B' }} ></TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 90 / 2, backgroundColor: '#2980B9' }}  ></TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 90 / 2, backgroundColor: '#2ECC71' }}  ></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 90 / 2, backgroundColor: '#2C3E50' }}></TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 90 / 2, backgroundColor: '#F39C12' }}></TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 90 / 2, backgroundColor: '#8E44AD' }}></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, borderRadius: 30, backgroundColor: 'white' }}>
                            <View style={{ flex: 1, alignItems: 'center', marginBottom: 5 }}>
                                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#D2D2D2', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, width: 200, }}>
                                    <Text style={{ fontSize: 18, }}>
                                        Background
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 8, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'space-around', borderRadius: 30 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 10 }} >
                                        <ImageBackground source={require('../src/assets/img/bg1.png')} style={{ width: '100%', height: '100%' }} onPress={() => this.props.number(id = "1")} /></TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 10 }}>
                                        <ImageBackground source={require('../src/assets/img/bg2.png')} style={{ width: '100%', height: '100%' }} onPress={() => this.props.number(id = "2")} /></TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 10 }}>
                                        <ImageBackground source={require('../src/assets/img/bg3.png')} style={{ width: '100%', height: '100%' }} onPress={() => this.props.number(id = "3")} /></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 10 }}>
                                        <ImageBackground source={require('../src/assets/img/bg4.png')} style={{ width: '100%', height: '100%' }} /></TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 10 }}>
                                        <ImageBackground source={require('../src/assets/img/bg5.png')} style={{ width: '100%', height: '100%' }} /></TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 0.22, width: 90, height: 90, borderRadius: 10 }}>
                                        <ImageBackground source={require('../src/assets/img/default.png')} style={{ width: '100%', height: '100%' }} /></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.4, backgroundColor: '#FC441B', alignItems: 'center' }} keyboardShouldPersistTaps="always">
                            <Text style={{ flex: 1, fontSize: 18,  }}>Change user name:</Text>
                            <TextInput style={{ backgroundColor: 'white', alignItems: 'center', fontSize: 18, width: screenWidth - 100, borderRadius: 70 }} >
                            </TextInput>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}


function mapStateToProps(state) {
    return {
      result: state.result,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      number: (id) => dispatch(chacgebg(id)),
  
    }
    
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu)



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