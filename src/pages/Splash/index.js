import React, { Component } from 'react';
import {
  Text, View, Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from './style';
import Utils from '../Utils';
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
// var PushNotification = require("react-native-push-notification");
// var notiType='';
// PushNotification.configure({
//   onRegister: function (token) {
//     // deviceToken=token.token;
//     // deviceType=token.os;
//     console.log("TOKEN from splash:", token);
//   },
//   onNotification: function (notification) {
//     console.log(notification);
//     notiType='Appointment Request';
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },
//   popInitialNotification: true,
//    requestPermissions: true,
// });
export default class Splash extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
        const isLoggedIn = await AsyncStorage.getItem(Utils.userId);
      setTimeout(()=>{
        // if (isLoggedIn != null){
              this.props.navigation.replace('Register');
        // }
    }, 3000);
  }

  render() {
   
    return (
        <View style={Styles.body}>
            <View style={{width:'100%', alignItems:'center', backgroundColor:Utils.colorBg}}>
              <Image source={require('../../assets/img/splash.png')} style={Styles.logo}/>
            </View>
        </View>
      );
  }
}