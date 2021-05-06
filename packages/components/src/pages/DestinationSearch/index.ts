import React                                                                  from 'react'
import { View, Text, TextInput, SafeAreaView }                                from 'react-native'
import { useNavigation }                                                      from '@react-navigation/native'
import { GooglePlacesAutocomplete }                                           from 'react-native-google-places-autocomplete';
import { e }                                                                  from '../../utils/react-helpers';
import { PlaceRow } from './PlaceRow';
import styles                                                                 from './styles'

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 10.79179, lng: 106.69485 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

export function DestinationSearch(props) {
  const [originPlace     , setOriginPlace     ] = React.useState<any>(undefined)
  const [destinationPlace, setDestinationPlace] = React.useState<any>(undefined)
  const navigation = useNavigation()
  React.useEffect(() =>  {
    if(originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }, [originPlace, destinationPlace])
  return (
    e(SafeAreaView, undefined,
      e(View, { style: styles.container },
        [
          e(GooglePlacesAutocomplete, {
            key: 'autocomplete 1',
            placeholder: 'Where from?',
            predefinedPlaces: [homePlace, workPlace],
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
            fetchDetails             : true,
            suppressDefaultStyles    : true,
            enablePoweredByContainer : false,
            currentLocation          : true,
            currentLocationLabel     : 'Current location',
            renderRow: (data) => {
              const text = data.description || data['vicinity']
              const ico  = text == 'Home' ? 'home' :'location-pin'
              return e(PlaceRow, { text, ico })
            },
            renderDescription: (data) =>
              data.description || data['vicinity'],
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
          e(View, { key: 'circle', style: styles.circle }),
          // Line between dots
          e(View, { key: 'line', style: styles.line }),
          // Square near Destination input
          e(View, { key: 'square', style: styles.square }),
        ]
      )
    )
  )
}