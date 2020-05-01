import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header (){
  return(
<View style={style.header}>
  <Text style={style.text}>Shopping List!!</Text>
</View>
  )

}

const style = StyleSheet.create({
  header: {height:60, padding:10, backgroundColor:'darkslateblue'},
  text: {color: '#fff', fontSize: 30, textAlign:'center'}
})