import React, { Component } from 'react'
import { Text, ImageBackground, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { chacgebg } from '../action/action'

export class ScrollScreen extends Component {

  render() {
    return (
      <ImageBackground style={{ flex: 1, }}  >
        <KeyboardAwareScrollView style={{ width: '100%', height: '100%', marginTop: 10 }}>
        <View style={{ width: 223, flex: 1, backgroundColor: '#FFFFFF', marginBottom: 2, borderBottomRightRadius: 20, borderTopRightRadius: 20, borderWidth: 1, borderColor: '#DCDCDC' }}>
            <Text> User3             192.168.243.332</Text>
          </View>
          <View style={{ width: 223, flexDirection: 'row', flex: 1, backgroundColor: '#FFFFFF', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderWidth: 1, borderColor: '#DCDCDC' }}>
            <View style={{ flex: 3, justifyContent: 'flex-start' }}><Text style={{ marginLeft: 10, fontSize: 18, }}> Hi.</Text></View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignContent: 'flex-end' }}><Text> 12:24</Text></View>
          </View>
          <View style={{ flexDirection: 'row-reverse'}}>
            <View style={{ width: 223 }}>
              <Text style={{ marginTop: 10,borderBottomLeftRadius: 20,borderTopLeftRadius: 20,fontSize: 18,color: '#FFFFFF',backgroundColor: this.props.back
              }}> Hi. I am Test </Text>
              <Text style={{ marginTop: 3, borderBottomLeftRadius: 20,borderTopLeftRadius: 20,fontSize: 18,color: '#FFFFFF',backgroundColor: this.props.back
              }}> Some text writed here.  </Text>
            </View>
          </View>
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


  }

}
export default connect(mapStateToProps, mapDispatchToProps)(ScrollScreen)