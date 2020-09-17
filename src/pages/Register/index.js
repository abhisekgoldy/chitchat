import React, { Component } from 'react';
import {
  Text, TextInput, View, ImageBackground, Dimensions, Keyboard, TouchableHighlight
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CountDown from 'react-native-countdown-component';
import Styles from './style';
import Utils from '../Utils';
import auth from '@react-native-firebase/auth';

const width = Dimensions.get('window').width;

export default class Splash extends Component {

  constructor(props) {
    super(props);
    this.state={
      number:'',
      mobilevalidate:true,
      nextButton:false, nextButtonText:'Next',
      OtpView:false,
      o1:'', o2:'', o3:'', o4:''
    }
  }

  componentDidMount = async () => {


  }

  validateNumber(text){
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      this.setState({
        mobilevalidate: false,
        number: text,
        nextButton:false,

      });
      return false;
    } else {
      this.setState({
        mobilevalidate: true,
        number: text,
        nextButton:true
      });
      Keyboard.dismiss();
      return true;
    }
  }

  getOtp=async()=>{
     await auth().signInWithPhoneNumber(phoneNumber)
     .then(confirmResult => {
      this.setState({ confirmResult:confirmResult, OtpView:true, timer:true, nextButtonText:'' });
    })
    .catch(error => {
      alert(error.message)
      console.log(error)
    })
  }

  verifyOtp(){
    const verificationCode = this.state.o1+this.state.o2+this.state.o3+this.state.o4;
    this.state.confirmResult
    .confirm(verificationCode)
    .then(user => {
      this.setState({ userId: user.uid })
      alert(`Verified! ${user.uid}`);
    })
    .catch(error => {
      alert(error.message)
      console.log(error)
    })
  }

  render() {
   
    return (
        <View style={Styles.body}>
            <ImageBackground source={require('../../assets/img/bg.jpg')} style={{flex:1, width:width, alignItems:'center', justifyContent:'center'}}>
              <View style={{width:'90%'}}>
                <View style={[this.state.mobilevalidate ? Styles.inputView : Styles.inputViewError, {flexDirection:'row', alignSelf:'center', justifyContent:'center'}]}>
                  <Text style={{fontSize:Utils.subHeadSize, color:Utils.colorBrown, textAlignVertical:'center', paddingLeft:15}}>+91</Text>
                  <TextInput
                    style={Styles.input}
                    placeholder='Enter Your Number'
                    placeholderTextColor={Utils.colorBrown}
                    maxLength={10}
                    keyboardType={'number-pad'}
                    onChangeText={(num)=>this.validateNumber(num)}
                    value = {this.state.number}
                  />
                </View>
              </View>
              <View style={{marginVertical:30, width:'90%', alignItems:'center'}}>
                {this.state.nextButton && (
                    <TouchableHighlight style={Styles.button} onPress={()=>this.getOtp()}>
                        {this.state.nextButtonText!='' ? (
                          <Text style={{color:Utils.colorWhite, fontSize:Utils.subHeadSize, padding:10}}>{this.state.nextButtonText}</Text>
                        ):(
                          <CountDown
                                  until={120}
                                  size={15}
                                  onFinish={() => {this.setState({nextButtonText:'Resend'})}}
                                  digitStyle={{marginHorizontal:-5, color:Utils.colorWhite}}
                                  digitTxtStyle={{color: Utils.colorWhite}}
                                  timeToShow={['M', 'S']}
                                  timeLabels={{m: '', s:''}}
                                  onChange={(time)=>{}}
                                />
                        )}
                        </TouchableHighlight>
                )}
              </View>
              <View style={{width:'90%', alignItems:'center'}}>
                {this.state.OtpView && (
                    <View style={{flexDirection:'row', width:'90%', justifyContent:'center'}}>
                      <View style={[Styles.inputView, {marginHorizontal:10}]}>
                        <TextInput
                          placeholder="_"
                          style={{textAlign:'center', paddingHorizontal:10}}
                          maxLength={1}
                          ref={(ref)=>this.firstOtp = ref}
                          onChangeText={(t)=>{if(t!='')this.secondOtp.focus(); this.setState({o1:t})}}
                        />
                      </View>
                      <View style={[Styles.inputView, {marginHorizontal:10}]}>
                        <TextInput
                          placeholder="_"
                          style={{textAlign:'center', paddingHorizontal:10}}
                          maxLength={1}
                          ref={(ref) =>this.secondOtp = ref}
                          onChangeText={(t)=>{if(t=='')this.firstOtp.focus(); else this.thirdOtp.focus(); this.setState({o2:t});}}
                        />
                      </View>
                      <View style={[Styles.inputView, {marginHorizontal:10}]}>
                        <TextInput
                          placeholder="_"
                          style={{textAlign:'center', paddingHorizontal:10}}
                          maxLength={1}
                          ref={(ref) =>this.thirdOtp = ref}
                          onChangeText={(t)=>{if(t=='')this.secondOtp.focus(); else this.fourthOtp.focus(); this.setState({o3:t})}}
                        />
                      </View>
                      <View style={[Styles.inputView, {marginHorizontal:10}]}>
                        <TextInput
                          placeholder="_"
                          style={{textAlign:'center', paddingHorizontal:10}}
                          maxLength={1}
                          ref={(ref) =>this.fourthOtp = ref}
                          onChangeText={(t)=>{if(t=='')this.thirdOtp.focus(); this.setState({o4:t})}}
                        />
                      </View>
                    </View>
                )}
              </View>
              <View style={{marginVertical:30, width:'90%', alignItems:'center'}}>
                {this.state.OtpView && (
                    <TouchableHighlight style={Styles.button} onPress={()=>this.verifyOtp()}>
                      <Text style={{color:Utils.colorWhite, fontSize:Utils.subHeadSize, padding:10}}>Verify</Text>
                    </TouchableHighlight>
                )}
              </View>
            </ImageBackground>
        </View>
      );
  }
}