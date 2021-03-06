import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import Drawer from 'react-native-drawer'
import {Header} from 'react-native-elements'

//import Users from './src/screens/UserList'
import Scrollist from './src/screens/List'
import Input from './src/screens/Input'
import UserList from './src/screens/UserList'
import DrawerMenu from './src/screens/DrawerMenu'

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
        side={'left'}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>        
          <ImageBackground /*source={require('./src/assets/img/bg1.png')}*/ style={styles.container}>
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
                            width: 135,
                            marginBottom: 10
                        }
                    }}
                />
                <TouchableOpacity 
                onPress={this.openDrawer.bind(this)}
                style={{position: 'absolute'}} >
                    <Image
                        source={require('./src/assets/img/burger.png')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  burgerBtn: {
    width: 25,
    height: 20,
    marginTop: 32, 
    marginLeft: 20,
  },
})

export default App


