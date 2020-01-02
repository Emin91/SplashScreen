import RootReducer from './reducer/reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import React, { Component } from 'react'
import {AppRegistry, Animated} from 'react-native';
import {name as appName} from './app.json';
import App from './App'
import SplashScreen from './screens/SplashScreen'
import logger from 'redux-logger';

console.disableYellowBox=true;

export default class Main extends Component {
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
        let mainScreen = currentScreen === 'Splash' ? <SplashScreen /> : <Myentrypoint />
        return mainScreen
    }
}
const Myentrypoint = () => 
<Provider store={mystore}>< App/></Provider>
export const mystore = createStore(RootReducer, applyMiddleware(logger))


AppRegistry.registerComponent(appName, () => Main);
