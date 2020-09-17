import React, { Component } from 'react';
import { View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator} from 'react-navigation-stack';
import CustomDrawerNavigator from "../Common/Drawer/CustomDrawerNavigator";
import Icon from 'react-native-vector-icons/FontAwesome';

import SplashSc from '../pages/Splash';
import RegisterSc from '../pages/Register';


class Hidden extends React.Component {
  render() {
    return null;
  }
}

const mainNavigator = createDrawerNavigator({
    Logout: {
        screen: SplashSc,
          navigationOptions: {
              headerShown:false,
              drawerLabel: "Logout",
              drawerIcon: ({ tintColor }) => (
                <Icon name="undo" style={{ color: tintColor, fontSize:20, color:Utils.colorGray}}/>
              ),
      },
    },
},

{
    contentComponent: CustomDrawerNavigator
  })

const PublicRoute = createStackNavigator({
     mainNavigator:mainNavigator,
     
     Splash: {
        screen: SplashSc,
        navigationOptions: {
            headerShown: false,
        }
    },
    Register: {
        screen: RegisterSc,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
        initialRouteName:'Splash',
        defaultNavigationOptions: {
            gestureEnabled: false,
            swipeEnabled: false,
            headerShown:false
        }
    })

class AuthLoading extends Component {
    componentDidMount = async () => {
      
        this.props.navigation.navigate('PublicRoute')
    }
    render() {
        return (
            <View>
            </View>
        )
    }
}

const AppNavigator = createAppContainer(PublicRoute);
export default AppNavigator;