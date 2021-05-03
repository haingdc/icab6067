import { View } from 'react-native'
import { CovidMessage } from '../../components/CovidMessage'
import { HomeSearch } from '../../components/HomeSearch'
import { e } from '../../utils/react-helpers'

export function HomeScreen(props) {
  return (
    e(View, undefined,
      [
        e(CovidMessage, { key: 'covidmessage' }),
        e(HomeSearch  , { key: 'home search'  }),
      ]
    )
  )
}