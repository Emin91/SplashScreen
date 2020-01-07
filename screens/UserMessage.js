import React, { Component } from 'react';
import { View, Text } from 'react-native';


export class UserMessage extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginRight: '25%', marginTop: 2, marginBottom: 2, }} >
                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#d2d2d2', paddingLeft: 5 }}>
        <Text style={{ fontSize: 12, color: '#000', fontFamily: 'CircularStd-Book' }}>{this.props.name}</Text>
                    </View>
                    <View style={{ flex: 0.7, backgroundColor: '#d2d2d2', borderTopRightRadius: 6, paddingRight: 10, marginRight: 30 }}>
        <Text style={{ fontSize: 12, color: '#000',alignSelf: 'flex-end', fontFamily: 'CircularStd-Book' }}>{this.props.ip}</Text>
                    </View>
                </View>
                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', paddingLeft: 5,paddingBottom: 2  }}>
                        <Text style={{ fontSize: 20, color: '#000', fontFamily: 'CircularStd-Book' }}>{this.props.text}</Text>
                    </View>
                    <View style={{ flex: 0.4, backgroundColor: '#fff', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'flex-end', paddingRight: 10, paddingTop: 3 }}>
                        <Text>{this.props.time}</Text>
                    </View>
                </View>
            </View>
        )
    }
};

export default UserMessage;

