import React, { Component } from 'react'
import {Header} from 'react-native-elements'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native'


export default class App extends Component {
    render() {
        return (
            <View>
                <Header
                    centerContainerStyle={{ justifyContent: 'center', }}
                    backgroundColor={'#fc441b'}
                    centerComponent={{
                        text: 'Orange',
                        style: {
                            color: '#fff',
                            fontFamily: 'Bukhari Script',
                            fontSize: 40,
                            width: 135,
                            marginBottom: 10
                        }
                    }}
                />
                <TouchableOpacity style={{position: 'absolute'}}>
                    <Image
                        source={require('../assets/img/burger.png')}
                        style={styles.burgerBtn} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    burgerBtn: {
      width: 25,
      height: 20,
      marginTop: 32, 
      marginLeft: 20,
    },
  })