import React                                                                  from 'react'
import { View, Text, TextInput, SafeAreaView }                                from 'react-native'
import { GooglePlacesAutocomplete }                                           from 'react-native-google-places-autocomplete';
import { e }                                                                  from '../../utils/react-helpers';
import { PlaceRow } from './PlaceRow';
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
            fetchDetails             : true ,
            suppressDefaultStyles    : true ,
            enablePoweredByContainer : false,
            renderRow: (data) =>
              e(PlaceRow, { text: data.description }),
            styles: {
              textInput: styles.textInput,
              container: styles.autocompleteContainer,
              listView: styles.listView,
              separator: styles.separator,
            },
          }),
          e(GooglePlacesAutocomplete, {
            key: 'autocomplete 2',
            placeholder: 'Where to?',
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
            fetchDetails             : true ,
            suppressDefaultStyles    : true ,
            enablePoweredByContainer : false,
            renderRow: (data) =>
              e(PlaceRow, { text: data.description }),
            styles: {
              textInput: styles.textInput,
              container: { ...styles.autocompleteContainer, top: 55 },
              separator: styles.separator,
            },
          }),

          // Circle near Origin input
          // Line between dots
          // Square near Destination input
        ]
      )
    )
  )
}