import { View, Text }          from 'react-native'
import AntDesign               from 'react-native-vector-icons/AntDesign'
import MaterialIcons           from 'react-native-vector-icons/MaterialIcons'
import Entypo                  from 'react-native-vector-icons/Entypo'
import { e }                   from '../../utils/react-helpers'
import styles                  from './styles'

export function HomeSearch(props) {
  return (
    e(View, undefined,
      [
        /* Input Box */
        e(View, { key: 'input box', style: styles.inputBox },
          [
            e(Text, { key: 'input text', style: styles.inputText }, 'Where To?'),
            e(View, { key: 'time container', style: styles.timeContainer },
              [
                e(AntDesign    , { key: 'clock circle'       , name: 'clockcircle'        , size: 16, color: '#535353' }),
                e(Text         , { key: 'text' }, 'Now'),
                e(MaterialIcons, { key: 'keyboard arrow down', name: 'keyboard-arrow-down', size: 16 })
              ]
            )
          ]
        ),
        /* Previous destination */
        e(View, { key: 'previous destination', style: styles.row },
          [
            e(View, { key: 'icon container', style: styles.iconContainer },
              e(AntDesign      , { key: 'clock circle'       , name: 'clockcircle'        , size: 20, color: 'white' }),
            ),
            e(Text, { key: 'destination text', style: styles.destinationText }, 'Spin Nightclub')
          ]
        ),
        /* Home destination */
        e(View, { key: 'home destination', style: styles.row },
          [
            e(View, { key: 'icon container', style: [styles.iconContainer, { backgroundColor: '#218cff' }] },
              e(Entypo        , { key: 'home'                , name: 'home'              , size: 20, color: 'white' }),
            ),
            e(Text, { key: 'destination text', style: styles.destinationText }, 'Spin Nightclub')
          ]
        )
      ]

    )
  )
}