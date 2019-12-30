import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

class UserList extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.headerView}>
                    <Text style={styles.headerViewText}>List of 
                    <Text style={styles.textOnline}> Online </Text>
                    Users
                    </Text>
                </View>
                <View style={styles.onlineUsers}>
                    <ScrollView>
                        <View style={styles.textView}>
                            <View style={styles.greenDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.greenDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.greenDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.greenDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.greenDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.greenDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.greenDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.sepView}>
                    <Text style={styles.headerViewText}>List of
                    <Text style={styles.textOffline}> Ofline </Text>
                        Users
                    </Text>
                </View>
                <View style={styles.onlineUsers}>
                    <ScrollView>
                        <View style={styles.textView}>
                            <View style={styles.redDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot}/>
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex: 2}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fc441b'
    },
    sepView: {
        flex: 1, 
        backgroundColor: '#fc441b', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    headerView: {
        flex: 1,  
        backgroundColor: '#fc441b', 
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
        backgroundColor: '#d74525', 
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 20, 
        paddingBottom: 20,
    },
    textView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingLeft: 40,
    },
    text: {
        fontSize: 24, 
        color: '#fff', 
        paddingLeft: 15, 
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
        backgroundColor: 'green', 
        width: 10, 
        height: 10, 
        borderRadius: 30,
    },
    redDot: {
        backgroundColor: 'red', 
        width: 10, 
        height: 10, 
        borderRadius: 30,
    },
})
export default UserList

