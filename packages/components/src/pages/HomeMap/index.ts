/* eslint-disable @typescript-eslint/no-var-requires */
import { View, Text } from 'react-native'
import { e } from '../../utils/react-helpers'

export function HomeMap(props) {
  return (
    e(
      View,
      {
        style: {
          height: 300,
          backgroundColor: '#a0abff',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      e( Text, null, 'I am a map')
    )
  )
}
