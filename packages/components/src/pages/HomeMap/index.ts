import { Image, FlatList }                                        from 'react-native'
import MapView, { PROVIDER_GOOGLE }                               from 'react-native-maps'
import { e }                                                      from '../../utils/react-helpers'
import car                                                        from '../../../assets/images/top-UberX.png'
import cars from '../../../assets/data/cars'
import types from './types'

const { Marker } = (MapView as any)

export function HomeMap(props) {
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
      cars.map(car =>
        e(
          Marker,
          {
            key: car.id,
            coordinate: {
              latitude: car.latitude,
              longitude: car.longitude,
            },
          },
          e(
            Image,
            {
              source: types[car.type] as any,
              style: {
                width: 70,
                height: 70,
                resizeMode: 'contain'
              },
            }
          )
        )
      )
    )
  )
}
