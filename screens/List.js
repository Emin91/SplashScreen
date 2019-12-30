import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'


export class ScrollScreen extends Component {
  constructor() {
    super()
    this.state = {


    }
  }
  
  render() {
    return (
     
      <ImageBackground style={{ flex: 1, }} source={this.props.result} >
        <KeyboardAwareScrollView style={{ width: '100%', height: '100%' }}>
          <Text >bssdsdfdh</Text>
          <Text>{this.props.result}</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfdcdhgjh</Text>
          <Text>bshgddcfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdcdcdcfhgjh</Text>
          <Text>bshgdfdhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgddfhgjh</Text>
          <Text>bshgdfdchgjh</Text>
          <Text>bshdcdgdfhgjh</Text>
          <Text>bshgddcfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshcdcgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshdcdcgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
          <Text>bshgdfhgjh</Text>
        </KeyboardAwareScrollView>
      </ImageBackground>
    )
  }
}

function mapStateToProps(state) {
  return {
    result: state.result,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    number: (id) => dispatch(chacgebg(id)),

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(ScrollScreen)