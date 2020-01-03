import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F23A12',
    },
    logoView: {
        marginTop: 10,
        alignItems: 'center', 
        marginBottom: 20,
    },
    logo: {
        width: 130, 
        height: 115,
    },
    colorsMainView: {
        flex: 1, 
        paddingLeft: 10, 
        paddingRight: 10
    },
    colorsBtnBox: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorsBtn: {
        flex: 1,
        width: 65,
        height: 65,
        borderRadius: 50,
    },
    backgroundBtn: {
        flex: 1,
        width: 65,
        height: 65,
        borderRadius: 10,
    },
    imgStyle: {
        width: '100%', 
        height: '105%', 
        borderRadius: 20,
    },
    textView: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#D2D2D2', 
        borderBottomLeftRadius: 5, 
        borderBottomRightRadius: 5, 
        width: 200,
    },
    imgLineOne: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingBottom: 5, 
        paddingTop: 5,
    },
    changeUserNameView: {
        flex: 1, 
        backgroundColor: '#F23A12', 
        alignItems: 'center', 
        paddingTop: 10
    },
    changeUserNameText: {
        flex: 1, 
        fontSize: 18, 
        color: '#fff',
        fontFamily: 'CircularStd-Book',
    },
    textInputStyle: {
        paddingLeft: '8%', 
        backgroundColor: 'white', 
        borderColor: '#F23A12', 
        borderWidth: 1.8, 
        fontSize: 18, 
        borderRadius: 66, 
        fontFamily: 'CircularStd-Book'
    },
    inputSendBtn: {
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        paddingRight: 4,
    },  
})

export default styles