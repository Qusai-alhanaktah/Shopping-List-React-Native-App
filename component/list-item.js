import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default function ListItem ({item, deleteItem}){
  return(
<TouchableOpacity style={style.listItem}>
  <View style={style.listItemView}></View>
  <Text style={style.listItemText}>{item.text}</Text>
  <Button onPress={() => deleteItem(item.id)}  title="X"  color="red"  fontSize= 'xx-large'/>
</TouchableOpacity>
  )

}

const style = StyleSheet.create({
    listItem: {padding:25, backgroundColor:'#f8f8f8', borderBottomWidth:1 ,borderColor:'#eee'},
    listItemView: {flexDirection:'row', justifyContent: 'space-between',alignItems:'center' },
    listItemText: {fontSize: 18},
})