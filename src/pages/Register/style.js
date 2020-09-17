import {Dimensions, StyleSheet } from 'react-native';
import Utils from '../Utils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
	body:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	inputView:{
		borderRadius:10,
		borderWidth:1,
		borderColor:Utils.colorBrown
	},
	input:{
		flex:1,
		paddingLeft:10,
		color:Utils.colorBrown,
		fontSize:Utils.subHeadSize,
		fontFamily:'Rubik-Medium',
	},
	inputViewError:{
		borderRadius:10,
		borderWidth:1,
		borderColor:Utils.colorRed
	},
	button:{
		width:'30%',
		backgroundColor:Utils.colorBrown,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:10
	}

 })