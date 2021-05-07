import { Text, View, Pressable }                   from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { e }                                       from '../utils/react-helpers'

export function CustomDrawer(props) {
  return (
    e(DrawerContentScrollView, { ...props },
      [
        e(View, { key: 'other than items', style: { backgroundColor : '#212121', padding: 15 } },
          [
            // User row
            e(
              View,
              {
                key: 'user row',
                style: {
                  flexDirection: 'row',
                },
              },
              [
                e(
                  View,
                  {
                    key: '1',
                    style: {
                      backgroundColor: '#cacaca',
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      marginRight: 10,
                    },
                  },
                ),
                e(
                  View,
                  {
                    key: '2',
                  },
                  [
                    e(Text, { key: '1', style: { color: 'white', fontSize: 23 } }, 'Vadim Savin'),
                    e(Text, { key: '2', style: { color: 'lightgrey', fontSize: 15 } }, '5.00 *'),
                  ]
                ),
              ]
            ),
            // Messages row
            e(
              View,
              {
                style: {
                  borderTopWidth: 1,
                  borderTopColor: '#919191',
                  borderBottomWidth: 1,
                  borderBottomColor: '#919191',
                  marginVertical: 10,
                },
                key: 'messages',
              },
              e(
                Pressable,
                {
                  onPress: () => console.warn('messages'),
                },
                e(Text, { style: { color: '#ddd', paddingVertical: 5 } }, 'Messages' )
              ),
            ),
            // Do more
            e(
              View,
              {
                key: 'do more',
              },
              e(
                Pressable,
                {
                  onPress: () => console.warn('Do More'),
                },
                e(Text, { style: { color: '#ddd', paddingVertical: 5 } }, 'Do More with your account' )
              ),
            ),
            // Make money
            e(
              Pressable,
              {
                key: 'make money',
                onPress: () => console.warn('Makke money Driving'),
              },
              e(Text, { style: { color: 'white', paddingVertical: 5 } }, 'Make money driving' )
            ),
          ]
        ),
        e(DrawerItemList, { key: 'items', ...props }),
      ]
    )
  )
}