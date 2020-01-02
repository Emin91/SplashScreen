import React, { Component } from 'react'
import {View, Button} from 'react-native'

class SideMenu extends Component {
    render() {
        return(
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Home menu"
      />
            </View>
        )
    }
}

export default SideMenu 







