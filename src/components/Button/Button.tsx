import {Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface Button{
    text: string;
    onPress?: () => void
}

const Button = ({text, onPress = () => {}}: Button) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 5,
        alignItems: "center",
        borderRadius: 5,
        flex: 1,
        margin: 5
    },
    text: {
        fontWeight: fonts.weight.semi
    }
})

export default Button