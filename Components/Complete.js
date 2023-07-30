import {Text, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'


export default function Complete(props) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.container}>{props.word}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        borderRadius:50,
        padding:5,
        margin:8,
        width:'96%'
    }
})
