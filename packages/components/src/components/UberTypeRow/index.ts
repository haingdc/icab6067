import { ComponentProps } from 'react'
import { View, Text, Image }                              from 'react-native'
import Ionicons                                           from 'react-native-vector-icons/Ionicons'
import { e }                                              from '../../utils/react-helpers'
import styles                                             from './styles'
import typesLookup from './types'

export function UberTypeRow(props: Props) {
  const { type, price, image } = props

  return (
    e(View, { style: styles.container },
      [
        e(Image, {
          key: 'image',
          style: [
            styles.image,
          ],
          source: typesLookup[image],
        }),
        e(View , { key: 'middle', style: styles.middleContainer }, [
          e(Text, { key: 'icon person', style: styles.type }, [
            type,
            ' ',
            e(Ionicons, { key: 'person', name: 'person', size: 12 }),
            3,
          ]),
          e(Text, { key: 'time', style: styles.time }, '8.03PM drop off')
        ]),
        e(View , { key: 'right' , style: styles.rightContainer }, [
          e(Ionicons, { key: 'icon price', name: 'pricetag', size: 18, color: '#42d742' }),
          e(Text, { key: 'price', style: styles.price }, `est. $${price}`),
        ]),
      ]
    )
  )
}

interface Props extends ComponentProps<any> {
  type: string;
  price: number;
  image: string;
}