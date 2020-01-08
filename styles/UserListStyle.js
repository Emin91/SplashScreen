import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#F23A12'
    },
    sepView: {
        flex: 1, 
        backgroundColor: '#F23A12', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    headerView: {
        flex: 1,  
        backgroundColor: '#F23A12', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    headerViewText: {
        fontSize: 24, 
        color: '#fff', 
        fontFamily: 'CircularStd-Book',
    },
    onlineUsers: {
        flex: 3, 
        alignItems: 'center',
        backgroundColor: '#d74525', 
        paddingLeft: 5, 
        paddingRight: 5, 
        paddingTop: 5, 
        paddingBottom: 5,
    },
    text: {
        flex: 0.7,
        fontSize: 16, 
        color: '#fff', 
        paddingLeft: 4, 
        fontFamily: 'CircularStd-Book',
    },
    textOnline: {
        fontSize: 24, 
        color: 'green', 
        paddingLeft: 15, 
        fontFamily: 'CircularStd-Book',
    },
    textOffline: {
        fontSize: 24, 
        color: '#626262', 
        paddingLeft: 15, 
        fontFamily: 'CircularStd-Book',
    },
    greenDot: {
        flex: 0.04,
        backgroundColor: 'green', 
        width: 10, 
        height: 10, 
        marginLeft: 10,
        borderRadius: 30,
    },
    greyDot: {
        flex: 0.04,
        backgroundColor: '#626262', 
        width: 10, 
        height: 10, 
        marginLeft: 10,
        borderRadius: 30,
    },
})

export default styles