import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import Utils from '../../pages/Utils'


import styles from "./styles";

const CustomDrawerNavigator = props => (
  <View style={[styles.container]}>

  	<ScrollView>
  			  	
	  	<DrawerItems
	      activeBackgroundColor={"white"}
	      activeTintColor={"black"}
	      iconContainerStyle={styles.icons}
	      {...props}
	    />
    </ScrollView>
  </View>
);

export default CustomDrawerNavigator;

	  	// <View>
	  	// 	<View style={{backgroundColor:Utils.colorGreen, minHeight:150, justifyContent:'center'}}>
	  	// 		<Image style={styles.banner} source={require('../assets/img/logo.png')}/>
	  	// 	</View>
	  	// </View>
