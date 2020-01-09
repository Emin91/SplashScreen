import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import Drawer from 'react-native-drawer'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import Scrollist from './List'
import Input from './Input'
import DrawerMenu from './DrawerMenu'
import styles from '../styles/HomeStyle'
import NetInfo from "@react-native-community/netinfo";
import DropdownAlert from 'react-native-dropdownalert';


class App extends Component {
  constructor(props) {
    super(props);
  }

  internetConnection = () => {
    NetInfo.addEventListener(state => {
        if (state.isInternetReachable === true) {
          this.dropDownAlertRef.alertWithType('success', 'Success', 'Internet connection established' );
        }  else if (state.isConnected === false) {
          this.dropDownAlertRef.alertWithType('error', 'Error', 'Сheck internet connection');
        }
    });
}

componentDidMount() {
    this.internetConnection()
}
componentWillUnmount() {
    this.internetConnection()
  }

  renderDrawer() {
    return (
      <View style={{ flex: 1 }}>
        <DrawerMenu />
      </View>
    )
  }

  openDrawer() {
    this.drawer.open()
  }

  closeDrawer() {
    this.drawer.close()
  }
  
  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref }}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.25}
        content={this.renderDrawer()}
        //open={true}
        side={'left'}>
        <View style={{ flex: 1, }}>
          <StatusBar backgroundColor="#F23A12" barStyle="light-content" />
          <ImageBackground style={styles.container} source={this.props.result}>
            <View style={styles.container}>
              <View style={{ width: '100%', height: 60, backgroundColor: '#fc441b', alignItems: 'center', justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
                <Image
                  source={require('../src/assets/img/titleLogo.png')}
                  style={{ width: '40%', height: '100%', resizeMode: 'center' }}></Image>
              </View>
              <View style={{ width: '100%', height: 60, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                <TouchableOpacity
                  onPress={this.openDrawer.bind(this)}
                >
                  <Image
                    source={require('../src/assets/img/burger.png')}
                    style={styles.burgerBtn}
                  />
                </TouchableOpacity>
              </View>
              <Scrollist />
              <Input />
            </View>
          </ImageBackground>
        </View>
        <DropdownAlert 
          ref={ref => this.dropDownAlertRef = ref} 
          closeInterval={1000} 
          errorImageSrc={require('../src/assets/img/wifioff.png')} 
          successImageSrc={require('../src/assets/img/wifion.png')} 
          panResponderEnabled={true}/>
      </Drawer>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(App)


