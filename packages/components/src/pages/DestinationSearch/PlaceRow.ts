import { View, Text }                           from 'react-native'
import Entypo                                   from 'react-native-vector-icons/Entypo'
import styles                                   from './styles'
import { e }                                    from '../../utils/react-helpers'

export function PlaceRow(props) {
  console.log( { props })
  const { text } = props
  return (
    e(View, { style: styles.row },
      e(View, { style: styles.iconContainer },
        e(
          Entypo,
          {
            name: 'location-pin',
            size: 20,
            color: 'white',
          }
        )
      ),
      e(Text, undefined, text)
    )
  )
}