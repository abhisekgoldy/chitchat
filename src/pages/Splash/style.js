import {Dimensions, StyleSheet } from 'react-native';
import Utils from '../Utils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
	body:{
		flex:1,
		backgroundColor:Utils.colorYellow,
		alignItems:'center',
		justifyContent:'center',
	},
	logo:{
		width:width,
		height:height,
		resizeMode:'contain'
	}
 })