import { NavigationContainer }                           from '@react-navigation/native'
import { createStackNavigator }                          from '@react-navigation/stack'
import React from 'react'
import { DestinationSearch } from '../pages/DestinationSearch'
import { HomeScreen }                                    from '../pages/HomeScreen'
import { SearchResults } from '../pages/SearchResults'
import { e }                                             from '../utils/react-helpers'

const Stack = createStackNavigator()

export default function HomeNavigator({ navigation }) {
  React.useEffect(() => {
    navigation.openDrawer()
  }, [])
  return (
    e(
      Stack.Navigator,
      {
        screenOptions: {
          headerShown: false,
        },
      } as any,
      [
        e(Stack.Screen, { key: 'home'              , name: 'Home'             , component: HomeScreen        }),
        e(Stack.Screen, { key: 'destination search', name: 'DestinationSearch', component: DestinationSearch }),
        e(Stack.Screen, { key: 'search results'    , name: 'SearchResults'    , component: SearchResults     }),
      ]
    )
  )
}