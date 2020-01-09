import rootReducer from './reducer/reducer'
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
import { connect } from 'react-redux'
import { chacgebg } from './action/action'
//disable yellow warning
console.disableYellowBox=true;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username: '',
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

function mapStateToProps(state) {
    return {
        result: state.result,
        back: state.back,
        username: state.username
    }
}

function mapDispatchToProps(dispatch) {
    return {
        number: (id) => dispatch(chacgebg(id)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['result', 'back','username']
  }
    
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
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
