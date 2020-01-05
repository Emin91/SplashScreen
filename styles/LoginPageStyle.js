import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FC441B',
    },
    logoView: {
        flex: 0.5, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        width: 200,
        height: 180,
    },
    textInputView: {
        flex: 0.1, 
        justifyContent: 'flex-end', 
        paddingLeft: 8, 
        paddingRight: 8,
        paddingTop: 20,
    },
    textInput: {
        paddingLeft: '8%',
        paddingRight: '8%', 
        height: 60, 
        backgroundColor: 'white', 
        borderColor: '#F23A12', 
        fontSize: 22, 
        borderRadius: 10, 
        fontFamily: 'CircularStd-Book'
    },
    enterBtnView: {
        flex: 0.2, 
        justifyContent: 'flex-start', 
        paddingTop: 20, 
        alignItems: 'center',
        paddingRight: 8, 
        paddingLeft: 8
    },
    enterBtn: {
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 5,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 3, 
        backgroundColor: '#0984e3', 
        borderRadius: 10, 
        width: '100%', 
        height: 55, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    enterBtnText: {
        fontSize: 20, 
        color: '#fff', 
        fontFamily: 'CircularStd-Book'
    },
})

export default styles