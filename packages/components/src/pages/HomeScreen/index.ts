import { Dimensions, View } from 'react-native'
import { CovidMessage } from '../../components/CovidMessage'
import { HomeSearch } from '../../components/HomeSearch'
import { e } from '../../utils/react-helpers'
import { HomeMap } from '../HomeMap'

export function HomeScreen(props) {
  return (
    e(View, undefined,
      [
        e(View, { key: 'home map container', style: { height: Dimensions.get('window').height - 400 } },
          e(HomeMap)
        ),
        e(CovidMessage, { key: 'covidmessage' }),
        e(HomeSearch  , { key: 'home search'  }),
      ]
    )
  )
}