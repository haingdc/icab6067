import { Image, FlatList }                                        from 'react-native'
import MapView, { PROVIDER_GOOGLE }                               from 'react-native-maps'
import MapViewDirections                                          from 'react-native-maps-directions'
import { e }                                                      from '../../utils/react-helpers'

const { Marker } = (MapView as any)

export function RouteMap(props) {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  }
  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  }
  return (
    e(
      MapView,
      {
        style: { width: '100%', height: '100%' },
        provider: PROVIDER_GOOGLE,
        initialRegion: {
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        },
      },
      [
        e(
          MapViewDirections,
          {
            key: 'directions',
            origin,
            destination,
            strokeWidth: 5,
            strokeColor: 'black',
            apikey: 'AIzaSyA_lsmHKQ5FTBzSHFlJXWqqSQxHfuvM8Lc',
          }
        ),
        e(
          Marker,
          {
            key: 'origin',
            coordinate: origin,
            title: 'Origin',
          }
        ),
        e(
          Marker,
          {
            key: 'Destination',
            coordinate: destination,
            title: 'Destination',
          }
        ),
      ]
    )
  )
}
