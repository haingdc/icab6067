import { Image, FlatList }                                        from 'react-native'
import MapView, { PROVIDER_GOOGLE }                               from 'react-native-maps'
import MapViewDirections                                          from 'react-native-maps-directions'
import { e }                                                      from '../../utils/react-helpers'

const { Marker } = (MapView as any)

export function RouteMap(props) {
  const { origin, destination } = props
  const originLocation = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  }
  const destinationLocation = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lln,
  }
  return (
    e(
      MapView,
      {
        style: { width: '100%', height: '100%' },
        provider: PROVIDER_GOOGLE,
        initialRegion: {
          latitude: 16.47135,
          longitude: 107.57941,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0101,
        },
      },
      [
        e(
          MapViewDirections,
          {
            key: 'directions',
            origin: originLocation,
            destination: destinationLocation,
            strokeWidth: 5,
            strokeColor: 'black',
            apikey: 'AIzaSyA_lsmHKQ5FTBzSHFlJXWqqSQxHfuvM8Lc',
          }
        ),
        e(
          Marker,
          {
            key: 'origin',
            coordinate: originLocation,
            title: 'Origin',
          }
        ),
        e(
          Marker,
          {
            key: 'Destination',
            coordinate: destinationLocation,
            title: 'Destination',
          }
        ),
      ]
    )
  )
}
