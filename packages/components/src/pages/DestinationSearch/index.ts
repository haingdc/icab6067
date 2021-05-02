import React                                                                  from 'react'
import { View, Text, TextInput, SafeAreaView                                } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { e }                                                                  from '../../utils/react-helpers';
import styles                                                                 from './styles'

export function DestinationSearch(props) {
  const [originPlace     , setOriginPlace     ] = React.useState<any>(undefined)
  const [destinationPlace, setDestinationPlace] = React.useState<any>(undefined)
  React.useEffect(() =>  {
    if(originPlace && destinationPlace) {
      console.warn('Redirect to results')
    }
  }, [originPlace, destinationPlace])
  return (
    e(SafeAreaView, undefined,
      e(View, { style: styles.container },
        [
          e(GooglePlacesAutocomplete, {
            key: 'autocomplete 1',
            placeholder: 'Where from?',
            onPress(data, details = null) {
              setOriginPlace({data, details})
              console.log(data, details)
            },
            query: {
              key: 'AIzaSyA_lsmHKQ5FTBzSHFlJXWqqSQxHfuvM8Lc',
              language: 'en',
            },
            requestUrl: {
              useOnPlatform: 'web', // or "all"
              url: 'http://localhost:8080/maps/api',
            },
            fetchDetails: true,
            styles: {
              textInput: styles.textInput,
            },
          }),
          e(GooglePlacesAutocomplete, {
            key: 'autocomplete 2',
            placeholder: 'Search',
            onPress(data, details = null) {
              setDestinationPlace({data, details})
              console.log(data, details)
            },
            query: {
              key: 'AIzaSyA_lsmHKQ5FTBzSHFlJXWqqSQxHfuvM8Lc',
              language: 'en',
            },
            requestUrl: {
              useOnPlatform: 'web', // or "all"
              url: 'http://localhost:8080/maps/api',
            },
            fetchDetails: true,
            styles: {
              textInput: styles.textInput,
            },
          }),
        ]
      )
    )
  )
}