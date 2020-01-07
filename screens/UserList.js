import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import styles from '../styles/UserListStyle'
import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);
const URL = 'ws://one-chat.eu-4.evennode.com/'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            messages: [],
        }
    }

    Item = ({ user, state, ip }) => {

        return (
            <View style={{ flexDirection: 'row', flex: 1, paddingTop: 5, paddingBottom: 4, backgroundColor: this.props.back, borderTopRightRadius: 60, borderBottomRightRadius: 60, marginBottom: 4, width: screenWidth / 1.5 }} >
                <View style={styles.greenDot} />
                <Text style={styles.text}>{user}</Text>
            </View>
        )
    }


    ws = new ReconnectingWebSocket(URL)
    componentDidMount() {

        fetch('http://one-chat.eu-4.evennode.com/getusers', {
            method: 'get',
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ isLoading: false, messages: responseJson.reverse() });
                console.log(responseJson);
            })
            .catch(error => {
                console.error(error);
            });
        this.ws.onclose = () => {
            console.log('disconnected')
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.headerView}>
                </View>
                <View style={styles.onlineUsers}>
                    <FlatList
                        inverted={true}
                        data={this.state.messages}
                        renderItem={({ item }) => <this.Item user={item.name} state={item.state} ip={item.ip} />}
                        keyExtractor={item => item._id}
                    />
                </View>
                <View style={styles.sepView}>
                    <Text style={styles.headerViewText}>List of
                    <Text style={styles.textOffline}> Offline </Text>
                        Users
                    </Text>
                </View>
                <View style={styles.onlineUsers}>
                    <ScrollView>
                        <View style={styles.textView}>
                            <View style={styles.redDot} />
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot} />
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot} />
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot} />
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot} />
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot} />
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                        <View style={styles.textView}>
                            <View style={styles.redDot} />
                            <Text style={styles.text}>(1) User</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 2 }} />
            </View>
        )
    }
}


export default UserList

