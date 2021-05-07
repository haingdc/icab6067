import { View, Text }                                    from 'react-native'
import { NavigationContainer }                           from '@react-navigation/native'
import { createDrawerNavigator }                         from '@react-navigation/drawer'
import { e }                                             from '../utils/react-helpers'
import HomeNavigator                                     from './home'
import { CustomDrawer } from './CustomDrawer'

const Drawer = createDrawerNavigator()

const DummyScreen = props => e(
  View,
  {
    style: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  e(Text, undefined, props.name)
)

export default function RootNavigator() {
  return (
    e(NavigationContainer, undefined,
      e(Drawer.Navigator,
        {
          drawerContent: (props) => {
            return e(CustomDrawer, { ... props })
          },
        } as any,
        [
          e(Drawer.Screen, { key: 'Home', name: 'Home', component: HomeNavigator }),
          e(Drawer.Screen, { key: 'Help', name: 'Help' } as any,
            () => e(DummyScreen, { name: 'Help' })
          ),
          e(Drawer.Screen, { key: 'Wallet', name: 'Wallet' } as any,
            () => e(DummyScreen, { name: 'Wallet' })
          ),
          e(Drawer.Screen, { key: 'Settings', name: 'Settings' } as any,
            () => e(DummyScreen, { name: 'Settings' })
          ),
        ]
      )
    )
  )
}