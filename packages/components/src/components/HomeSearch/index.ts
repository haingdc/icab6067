import { View, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { e } from '../../utils/react-helpers'
import styles from './styles'

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
        /* Home destination */
      ]

    )
  )
}