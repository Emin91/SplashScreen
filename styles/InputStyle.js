import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainView: {
      height: 100,
      paddingLeft: 4, 
      paddingRight: 4, 
      paddingBottom: 2, 
      paddingTop: 2, 
      justifyContent: 'center', 
      borderRadius: 40,
    },
    textInput: {
      width: '87%',
      height: 40,
      paddingEnd:'8%',
      paddingLeft: '8%',
      marginLeft: '1%', 
      borderColor: '#FC441B', 
      borderWidth: 1.8, 
      fontSize: 18, 
      borderRadius: 66, 
      fontFamily: 'CircularStd-Book', 
      backgroundColor: '#fff',
      position: 'absolute',
      zIndex: 1000,
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