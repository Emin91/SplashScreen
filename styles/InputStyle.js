import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainView: {
      height: 65,
      paddingLeft: 4, 
      paddingRight: 4, 
      paddingBottom: 2, 
      paddingTop: 2, 
      justifyContent: 'center', 
      borderRadius: 40,
    },
    textInput: {
      paddingEnd:'15%',
      paddingLeft: '8%', 
      borderColor: '#FC441B', 
      borderWidth: 1.8, 
      fontSize: 18, 
      borderRadius: 66, 
      fontFamily: 'CircularStd-Book', 
      backgroundColor: '#fff'
    },
    btnSendView: {
      width: '100%', 
      height: '100%', 
      position: 'absolute', 
      justifyContent: 'center', 
      alignItems: 'flex-end',
      paddingRight: 4,
    },
  })

  export default styles