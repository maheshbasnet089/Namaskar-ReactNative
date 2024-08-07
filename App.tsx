
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

function App() {
 const popupDeka = ()=>{
  Alert.alert("Button was clicked")
 }
 const [text,setText] = useState('')
 
  return (
    <View style={styles.container}>

    <Text style={styles.textkolagi} >Hello World</Text>
    <Button title='Submit' onPress={popupDeka} />
    <TextInput placeholder='Type Here .....' onChangeText={setText} />
    <Image style={styles.imageStyle}  source={{
      uri :'https://play-lh.googleusercontent.com/m8E7ypNV9nRzrKJ_fsF0AjKSevtJYHxvkSKtEM5GQ1h40GX5BMVd0YS_oZ4plRzpSw=w600-h300-pc0xffffff-pd'
    }} />
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
