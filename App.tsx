import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import { uuid } from 'uuidv4';
import Header from './component/header.js';
import ListItem from './component/list-item.js';
import AddItem from './component/add-item.js';

export default function App (){
  const [items, setItems] = useState([
    {id: '1', text:'item1'},
    {id: '2', text:'item2'},
    {id: '3', text:'item3'},
    {id: '4', text:'item4'},
    ]);
  const deleteItem = (id) =>{
    setItems(items.filter(item=> item.id !== id));
  }
  const addItem = text =>{
    if(!text) Alert.alert('Error, Please enter an Item', {text: 'Ok'});
    else setItems([...items, {id:text, text}])
  }
  return(
<View style={style.container}>
  <Header />
  <AddItem addItem={addItem}/>
  <FlatList data={items} 
    renderItem={({item})=> <ListItem item={item} deleteItem={deleteItem} /> }
  />
</View>
  )

}

const style = StyleSheet.create({
  container: {flex:1, paddingTop: 60}
})