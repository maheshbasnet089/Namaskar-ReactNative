
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

function App() {
 const popupDeka = ()=>{
  Alert.alert("Button was clicked")
 }
 const [text,setText] = useState('')
 
  return (
    <View style={styles.container}>

    <Text className="text-blue-500 text-[50px]">Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textkolagi : {
    fontSize : 50, 
    color : 'red'
  }, 
  container : {
    padding : 20
  }, 
  imageStyle : {
    width: 50, 
    height : 50
  }
})


export default App;
