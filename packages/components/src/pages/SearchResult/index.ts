import { View, Text } from 'react-native'
import { UberTypes } from '../../components/UberTypes'
import { e } from '../../utils/react-helpers'
import { HomeMap } from '../HomeMap'

export function SearchResult(props) {
  return (
    e(View, undefined,
      [
        e(HomeMap  , { key: 'homemap'    }),
        e(UberTypes, { key: 'uber types' }),
      ]
    )
  )
}