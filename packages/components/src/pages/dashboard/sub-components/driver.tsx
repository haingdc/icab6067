import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native'
import { BottomSheet } from '../../../components/bottom-sheet'
import { debug } from '../../../components/input-multi-locations'
import steveroger from '../../../../assets/steveroger.png';
import { Star } from '../../../components/stars';

export function Driver(props) {
  const { dispatch } = props
  return (
    <BottomSheet onDismiss={() => props.dispatch({ type: 'enter locations' })}>
      <View style={driverStyles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, ...debug('green') }}>
            <View style={{ marginRight: 10 }}>
              <Image source={steveroger as any} style={{ width: 52, height: 52 }} />
            </View>
            <View>
              <Text>Steve Rogers</Text>
              <Star percent={80} />
            </View>
          </View>
          <View style={callDriverButtonStyles.container}>
            <TouchableOpacity onPress={() => dispatch({ type: 'driver' })}>
              <Text style={callDriverButtonStyles.text}>Call Driver</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line} />
      </View>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#D8D8D8',
    marginHorizontal: 20,
    height: 1,
  },
})

export const driverStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 6,
  },
})

const callDriverButtonStyles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginVertical: 20,
    overflow: 'hidden',
    width: 111,
  },
  text: {
    backgroundColor: '#3277D8',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 12,
    color: '#fff',
    textAlign: 'center',
  },
})