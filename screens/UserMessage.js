import React, { Component } from 'react';
import { View, Text } from 'react-native';


export class UserMessage extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginRight: '30%', marginTop: 5, marginBottom: 3, }} >
                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#d2d2d2' }}>
                        <Text style={{ fontSize: 12, color: '#000', fontFamily: 'CircularStd-Book' }}>{this.props.name}</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#d2d2d2', alignItems: 'flex-end', borderTopRightRadius: 10, paddingRight: 10, marginRight: 60 }}>
                        <Text style={{ fontSize: 12, color: '#000', fontFamily: 'CircularStd-Book' }}>{this.props.ip}</Text>
                    </View>
                </View>
                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', paddingLeft: 10, paddingTop: 5, paddingBottom: 5, }}>
                        <Text style={{ fontSize: 20, color: '#000', fontFamily: 'CircularStd-Book' }}>{this.props.text}</Text>
                    </View>
                    <View style={{ flex: 0.4, backgroundColor: '#fff', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'flex-end', paddingRight: 10 }}>
                        <Text>{this.props.time}</Text>
                    </View>
                </View>
            </View>
        )
    }
};

export default UserMessage;

