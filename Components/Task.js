import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'


export default function Task(props) {
  return (
    
    <View style={styles.container}>
      <TouchableOpacity><Text style={styles.container}>{props.text}</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        borderRadius:50,
        padding:5,
        margin:5,
        width:'96%'
    }
})
