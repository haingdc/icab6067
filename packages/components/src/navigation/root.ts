import { NavigationContainer }                           from '@react-navigation/native'
import { createStackNavigator }                          from '@react-navigation/stack'
import { DestinationSearch } from '../pages/DestinationSearch'
import { HomeScreen }                                    from '../pages/HomeScreen'
import { SearchResults } from '../pages/SearchResults'
import { e }                                             from '../utils/react-helpers'

const Stack = createStackNavigator()

export default function RootNavigator() {
  return (
    e(NavigationContainer, undefined,
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
  )
}