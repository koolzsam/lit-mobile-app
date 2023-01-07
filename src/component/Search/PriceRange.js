import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '@/App'

const PriceRange = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Price Range</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: theme.colors.textDark
  }
})

export default PriceRange