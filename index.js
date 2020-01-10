import reducer from './reducer/reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import React, { Component } from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App'
import SplashScreen from './screens/SplashScreen'
//Save Redux state
import AsyncStorage from '@react-native-community/async-storage'
import {persistStore, persistReducer} from 'redux-persist'
import {createLogger} from 'redux-logger'
import {PersistGate} from 'redux-persist/es/integration/react'
//disable yellow warning
console.disableYellowBox=true;

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
        let mainScreen = currentScreen === 'Splash' ? <SplashScreen /> : <Myentrypoint />
        return mainScreen
    }
}




const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['result', 'back', 'username']
  }
    
  const persistedReducer = persistReducer(persistConfig, reducer)
  
  const store = createStore(
    persistedReducer, applyMiddleware(createLogger())
  );
  
  const persistedStore = persistStore(store)

const Myentrypoint = () => 
    <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
            <App />
        </PersistGate>
    </Provider>

AppRegistry.registerComponent(appName, () => Main);