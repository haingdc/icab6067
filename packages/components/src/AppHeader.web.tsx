import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#f3f3f3',
  },
  text: {
    fontSize: 36,
    fontWeight: '600',
  },
})
