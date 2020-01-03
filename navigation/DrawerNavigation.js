import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'

import HomeScreen from '../screens/Home';
import Userlist from '../screens/UserList'

const DrawerNav = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
    },{drawerPosition: 'right',
    contentComponent: props => 
        <Userlist />},
        
);

export default createAppContainer(DrawerNav);