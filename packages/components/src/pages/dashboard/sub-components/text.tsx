import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export function Information(props: { label: string, value: string }) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: 'rgba(96, 100, 112, 0.6)',
  },
  value: {
    fontSize: 14,
    color: '#323643',
  },
})