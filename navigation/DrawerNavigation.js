import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'

import HomeScreen from '../screens/Home';
import SideMenu from '../screens/SideMenu';

const DrawerNav = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Side: {
        screen: SideMenu,
    }, 

}, {
    drawerPosition: 'right'
})

export default createAppContainer(DrawerNav);