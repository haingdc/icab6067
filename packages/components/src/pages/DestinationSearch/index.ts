import React                                                                  from 'react'
import { View, Text, TextInput, SafeAreaView                                } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { e }                                                                  from '../../utils/react-helpers';
import styles                                                                 from './styles'

export function DestinationSearch(props) {
  const [fromText, setFromText] = React.useState('')
  const [destinationText, setDestinationText] = React.useState('')
  return (
    e(SafeAreaView, undefined,
      e(View, { style: styles.container },
        [
          e(TextInput, {
            key: 'from',
            style: styles.textInput,
            value: fromText,
            onChangeText: setFromText,
            placeholder: 'From'
          }),
          e(TextInput, {
            key: 'to',
            style: styles.textInput,
            value: destinationText,
            onChangeText: setDestinationText,
            placeholder: 'Where to?'
          }),
          e(GooglePlacesAutocomplete, {
            key: 'autocomplete',
            placeholder: 'Search',
            onPress(data, details = null) {
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
          })
        ]
      )
    )
  )
}