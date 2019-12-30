/**
 * @format
 */

import React, { Component } from 'react'
import {AppRegistry, Animated} from 'react-native';
import {name as appName} from './app.json';
import App from './App'
import SplashScreen from './src/screens/SplashScreen'
//import UserList from './src/screens/UserList'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentScreen: 'Splash' };
        setTimeout(()=>{
            this.setState({
                currentScreen: 'App'})
        }, 2000)
    }

    render() {
        const {currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <SplashScreen /> : <App />
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => Main);
