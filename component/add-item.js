import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';

export default function AddItem ({addItem}){
 const [text, setText] = useState('');
//  const typing = newText = setText(newText);
  return(
  <View>
    <TextInput
     placeholder='Add Item ...'
     style={style.input} 
     onChangeText={ newText => setText(newText)}
     />
    <TouchableOpacity>
      <Text style={style.btnText}>Add Item 
      </Text>
      <Button  onPress={() => addItem(text)}  title="+"  color="gray"  />
    </TouchableOpacity>
  </View>
  )

}

const style = StyleSheet.create({
    input: {padding:8, fontSize: 16, height: 60},
    btn: {backgroundColor:'#c2bad8', padding: 9, margin: 5},
    btnText: {backgroundColor:'darkslateblue', fontSize: 20, textAlign: 'center'},
})