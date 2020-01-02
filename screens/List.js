import React, { Component } from 'react'
import { Text, ImageBackground } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { chacgebg, changeColor } from '../action/action'

export class ScrollScreen extends Component {

  render() {
    return (

      <ImageBackground style={{ flex: 1, }} source={this.props.result} >
        <KeyboardAwareScrollView style={{ width: '100%', height: '100%' }}>
          <Text style={{backgroundColor: this.props.back}}>askjdaksjdbaskjdhaj</Text>
          <Text >{this.props.back}</Text>
          <Text>{this.props.result}</Text>
        </KeyboardAwareScrollView>
      </ImageBackground>
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
    color: (color) => dispatch(changeColor(color)),

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(ScrollScreen)