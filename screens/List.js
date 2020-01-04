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
          <View style={{ flexDirection: 'row-reverse', paddingTop: 5, paddingBottom: 5}}>
            <View style={{ width: 290, backgroundColor: 'green' }}>
              <Text style={{paddingLeft: 10,paddingRight: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: '#FFFFFF',fontFamily: 'CircularStd-Book', backgroundColor: this.props.back
              }}> Hi. I am Test</Text>
              <View style={{height: '100%', position: 'absolute', alignSelf: 'flex-end', justifyContent: 'flex-start'}}>
              <Text style={{ color: '#EDEDED',}}>6:30 PM</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row-reverse',}}>
            <View style={{ width: 290, backgroundColor: 'green', paddingTop: 5, paddingBottom: 5 }}>
              <Text style={{paddingLeft: 10,paddingRight: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: '#FFFFFF',fontFamily: 'CircularStd-Book', backgroundColor: this.props.back
              }}> <Text style={{paddingLeft: 10,paddingRight: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, fontSize: 18, color: '#FFFFFF',fontFamily: 'CircularStd-Book', backgroundColor: this.props.back
            }}> Lorem </Text></Text>
              <View style={{height: '100%', position: 'absolute', alignSelf: 'flex-end', justifyContent: 'flex-start'}}>
              <Text style={{ color: '#EDEDED',}}>6:30 PM</Text>
              </View>
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