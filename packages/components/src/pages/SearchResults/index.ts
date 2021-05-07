import { View , Dimensions }                                            from 'react-native'
import { useRoute }                                                     from '@react-navigation/native'
import { RouteMap }                                                     from '../../components/RouteMap'
import { UberTypes }                                                    from '../../components/UberTypes'
import { e }                                                            from '../../utils/react-helpers'

export function SearchResults(props) {
  const route = useRoute()
  const { originPlace , destinationPlace } = route.params as any
  return (
    e(View, undefined,
      [
        e(View, { key: 'homemap container', style: { display: 'flex', justifyContent: 'space-between' } },
          e(View, { style: { height: Dimensions.get('window').height - 400 } },
            e(RouteMap  , { key: 'homemap', origin: originPlace, destination: destinationPlace }),
          )
        ),
        e(View, { key: 'uber types container', style: { height: 400 } },
          e(UberTypes, { key: 'types' }),
        )
      ]
    )
  )
}