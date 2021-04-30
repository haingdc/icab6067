import { View, Text } from 'react-native'
import { e } from '../../utils/react-helpers'
import styles from './styles'

export function CovidMessage(props) {
  return (
    e(View, { style: styles.container },
      [
        e(Text, { key: 'text1', style: styles.title }, 'Travel only if necessary'),
        e(Text, { key: 'text2', style: styles.text }, 'Upgrading this package often requires the font files linked to your projects to'),
        e(Text, { key: 'text3', style: styles.learnmore }, 'Learn more'),
      ]
    )
  )
}