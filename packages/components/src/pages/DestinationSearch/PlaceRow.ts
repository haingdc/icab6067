import { View, Text }                           from 'react-native'
import Entypo                                   from 'react-native-vector-icons/Entypo'
import styles                                   from './styles'
import { e }                                    from '../../utils/react-helpers'

export function PlaceRow(props: { text: string, ico?: string }) {
  const { text, ico = 'location-pin' } = props
  return (
    e(View, { style: styles.row },
      e(View, { style: styles.iconContainer },
        e(
          Entypo,
          {
            name: ico,
            size: 20,
            color: 'white',
          }
        )
      ),
      e(Text, undefined, text)
    )
  )
}