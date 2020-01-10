import React, { Component } from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, ImageBackground, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { chacgebg, chacgename } from '../action/action'
import styles from '../styles/DrawerMenuStyle'

export class DrawerMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorTitle: "Message background",
            backgroundTitle: "Backgrounds",
            changeUserNameText: "Change user name:",
        }
    }

    submitMessage(inputName) {
        fetch("http://web-chat.eu-4.evennode.com/putchangeuser", {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                name: this.props.username
            })
        })
            .then((response) => {
                console.log(response)
            })

        return this.setState(inputName)
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FC441B', }} behavior='padding' keyboardVerticalOffset={-255} enabled>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.logoView}>
                            <Image
                                source={require('../src/assets/img/logo.png')}
                                style={styles.logo} />
                        </View>
                        <View style={styles.colorsMainView}>
                            <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#fff', }}>
                                <View style={{ flex: 1, alignItems: 'center', }}>
                                    <View style={styles.textView}>
                                        <Text style={{ fontSize: 14, fontFamily: 'CircularStd-Book' }} adjustsFontSizeToFit={true} numberOfLines={1}>
                                            {this.state.colorTitle}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', }}>
                                    <View style={styles.imgLineOne}>
                                        <View style={{ flex: 0.05 }}></View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={[styles.colorsBtn, { backgroundColor: '#FC441B' }]}
                                                onPress={() => this.props.number(id = "1")} />
                                        </View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={[styles.colorsBtn, { backgroundColor: '#2980B9' }]}
                                                onPress={() => this.props.number(id = "2")} />
                                        </View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={[styles.colorsBtn, { backgroundColor: '#2ECC71' }]}
                                                onPress={() => this.props.number(id = "3")} />
                                        </View>
                                        <View style={{ flex: 0.05 }}></View>
                                    </View>
                                    <View style={styles.imgLineOne}>
                                        <View style={{ flex: 0.05 }}></View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={[styles.colorsBtn, { backgroundColor: '#2C3E50' }]}
                                                onPress={() => this.props.number(id = "4")} />
                                        </View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={[styles.colorsBtn, { backgroundColor: '#F39C12' }]}
                                                onPress={() => this.props.number(id = "5")} />
                                        </View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={[styles.colorsBtn, { backgroundColor: '#8E44AD' }]}
                                                onPress={() => this.props.number(id = "6")} />
                                        </View>
                                        <View style={{ flex: 0.05 }}></View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, padding: 10 }} />

                        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                            <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#fff', }}>
                                <View style={{ flex: 1, alignItems: 'center', }}>
                                    <View style={styles.textView}>
                                        <Text style={{ fontSize: 14, fontFamily: 'CircularStd-Book' }} adjustsFontSizeToFit={true} numberOfLines={1}>
                                            {this.state.backgroundTitle}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', paddingBottom: 10 }}>
                                    <View style={styles.imgLineOne}>
                                        <View style={{ flex: 0.05 }}></View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={styles.backgroundBtn}
                                                onPress={() => this.props.number(id = "7")}>
                                                <ImageBackground
                                                    source={require('../src/assets/img/bg1.png')}
                                                    style={styles.imgStyle}
                                                    imageStyle={{ borderRadius: 8 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={styles.backgroundBtn}
                                                onPress={() => this.props.number(id = "8")}>
                                                <ImageBackground
                                                    source={require('../src/assets/img/bg2.png')}
                                                    style={styles.imgStyle}
                                                    imageStyle={{ borderRadius: 8 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={styles.backgroundBtn}
                                                onPress={() => this.props.number(id = "9")}>
                                                <ImageBackground
                                                    source={require('../src/assets/img/bg3.png')}
                                                    style={styles.imgStyle}
                                                    imageStyle={{ borderRadius: 8 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.05 }}></View>
                                    </View>
                                    <View style={styles.imgLineOne}>
                                        <View style={{ flex: 0.05 }}></View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={styles.backgroundBtn}
                                                onPress={() => this.props.number(id = "10")}>
                                                <ImageBackground
                                                    source={require('../src/assets/img/bg4.png')}
                                                    style={styles.imgStyle}
                                                    imageStyle={{ borderRadius: 8 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={styles.backgroundBtn}
                                                onPress={() => this.props.number(id = "11")}>
                                                <ImageBackground
                                                    source={require('../src/assets/img/bg5.png')}
                                                    style={styles.imgStyle}
                                                    imageStyle={{ borderRadius: 8 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.colorsBtnBox}>
                                            <TouchableOpacity
                                                style={styles.backgroundBtn}
                                                onPress={() => this.props.number(id = "12")}>
                                                <ImageBackground
                                                    source={require('../src/assets/img/default.jpg')}
                                                    style={styles.imgStyle}
                                                    imageStyle={{ borderRadius: 8 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.05 }}></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.changeUserNameView}>
                            <Text style={styles.changeUserNameText} adjustsFontSizeToFit={true} numberOfLines={1}>{this.state.changeUserNameText}</Text>
                        </View>
                        <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                            <TextInput
                                onChangeText={inputName => this.submitMessage({ inputName })}
                                style={styles.textInputStyle}
                                selectionColor={'#fc441b'}
                                placeholder='Type something...'
                            />
                            <View style={styles.inputSendBtn}>
                                <TouchableOpacity onPress={() => this.props.name(this.state.inputName)}>
                                    <Image
                                        style={{ width: 40, height: 34 }}
                                        source={require('../src/assets/img/Save.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state) {
    return {
        result: state.result,
        back: state.back,
        username: state.username
    }
}

function mapDispatchToProps(dispatch) {
    return {
        number: (id) => dispatch(chacgebg(id)),
        name: (inputName) => dispatch(chacgename(inputName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu)