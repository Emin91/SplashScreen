import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from '../styles/UserListStyle'

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


export default UserList

