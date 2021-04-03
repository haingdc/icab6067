import React, { PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle, Image, StyleSheet } from 'react-native'
import star0 from './star-0.png'
import star100 from './star-100.png'

export function Star(props: PropType) {
  const { percent } = props
  let list = [star0, star0, star0, star0, star0]
  const divide = Math.floor(percent / 20)
  const modular = percent % 20

  list = list.map((_n, index) => {
    if (index < divide) return star100
    return star0
  })
  return (
    <View style={styles.container}>
      <Image source={list[0] as any} style={{ width: 10, height: 10 }} />
      <Image source={list[1] as any} style={{ width: 10, height: 10 }} />
      <Image source={list[2] as any} style={{ width: 10, height: 10 }} />
      <Image source={list[3] as any} style={{ width: 10, height: 10 }} />
      <Image source={list[4] as any} style={{ width: 10, height: 10 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})

interface PropType extends PropsWithChildren<any> {
  style?: StyleProp<ViewStyle>
  percent: number
}
