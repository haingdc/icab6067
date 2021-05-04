import { View, Pressable, Text }                          from 'react-native'
import { e           }                                    from '../../utils/react-helpers'
import { UberTypeRow }                                    from '../UberTypeRow'
import typesData                                          from '../../../assets/data/types'

export function UberTypes(props) {
  return (
    e(View, undefined,
      [
        typesData.map(type =>
          e(
            UberTypeRow,
            {
              key: type.id,
              type: type.type,
              price: type.price,
              image: type.type
            }
          )
        ),
        e(
          Pressable,
          {
            key: 'button',
            style: {
              backgroundColor: 'black',
              padding: 10,
              margin: 10,
              alignItems: 'center',
            },
            onPress() {
              console.warn('confirm')
            },
          },
          e(Text, { style: { color: 'white', fontWeight: 'bold' }}, 'Confirm Uber')
        )
      ]
    )
  )
}