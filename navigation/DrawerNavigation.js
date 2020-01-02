import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'

import HomeScreen from '../screens/Home';
import SideMenu from '../screens/SideMenu';
import Userlist from '../screens/UserList'

const DrawerConfig = {
    contentComponent: ({ }) => {
        return(<Userlist />)
    }
}

const DrawerNav = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Side: {
            screen: SideMenu,
        },
    },{drawerPosition: 'right',
    contentComponent: props => 
        <Userlist />},
        
);

export default createAppContainer(DrawerNav);