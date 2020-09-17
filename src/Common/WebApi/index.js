import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Utils from '../../pages/Utils';

// const baseUrl = 'https://www.coinbaazar.com/api/v1';
const baseUrl='http://app.lifesphere.in/api/';
const user = '/user/';

export default class WebApi extends Component {


	static postApi_WT_user(url, body){
        console.log(body);
		return fetch(baseUrl+url, {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body:body
		})
	}

	static postApi_user=async(url, body)=>{
		console.log(body);
		const token= await AsyncStorage.getItem(Utils.token);
		// console.log('token====>', token );

		return fetch(baseUrl+url, {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		    Authorization:token,
		  },
		  body:body
		})
	}

	static getApi=async(url)=>{
		console.log(url);
		const token= await AsyncStorage.getItem(Utils.token);
		return fetch(baseUrl+url, {
			method:'GET',
	 	    headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		    Authorization:token,
		  }
		})
	}

	static profileApi=async(url, body)=>{
		console.log(body);
		const token= await AsyncStorage.getItem(Utils.token);
		console.log('token====>', token );

		return fetch(baseUrl+url, {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'multipart/form-data;',
		    Authorization:token,
		  },
		  body:body
		})
	}

}