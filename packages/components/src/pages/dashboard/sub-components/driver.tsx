import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomSheet } from '../../../components/bottom-sheet'
import { debug } from '../../../components/input-multi-locations'

export function Driver(props) {
  return (
    <BottomSheet onDismiss={() => props.dispatch({ type: 'enter locations' })}>
      <View style={driverStyles.container}>
        <Text>Driver</Text>
      </View>
    </BottomSheet>
  )
}

export const driverStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 6,
    ...debug('tomato'),
  },
})