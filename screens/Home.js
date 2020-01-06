import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import Drawer from 'react-native-drawer'
import {Header} from 'react-native-elements'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'
import Scrollist from './List'
import Input from './Input'
import DrawerMenu from './DrawerMenu'
import styles from '../styles/HomeStyle'

class App extends Component {
  constructor(props) {
    super(props)
}

renderDrawer() {
  return (
      <View style={{flex: 1}}>
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
            <Header
                    centerContainerStyle={{ justifyContent: 'center', }}
                    backgroundColor={'#fc441b'}
                    centerComponent={{
                        text: 'Orange',
                        style: {
                            color: '#fff',
                            fontFamily: 'Bukhari Script',
                            fontSize: 40,
                            lineHeight: 60,
                            width: 135,
                            position: 'absolute',
                            top: -50,
                            zIndex: 50000,
                    
                        }
                    }}
                />
                <TouchableOpacity 
                onPress={this.openDrawer.bind(this)}
                style={{position: 'absolute'}} >
                    <Image
                        source={require('../src/assets/img/burger.png')}
                        style={styles.burgerBtn} 
                        />
                </TouchableOpacity>
              <Scrollist />
              <Input />
            </View>
          </ImageBackground>
        </View>
      </Drawer>
    )
  }
}


function mapStateToProps(state) {
  return {
    result: state.result,
    back: state.back,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    number: (id) => dispatch(chacgebg(id)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)


