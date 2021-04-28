import React, { useReducer, useState } from 'react'
import { Image, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Carousel from 'react-native-snap-carousel'
import { BottomSheet } from '../../components/bottom-sheet'
import { InputLocation } from '../../components/input-location'
import { debug, InputLocations } from '../../components/input-multi-locations'
import vehicle_shedan    from '../../../assets/vehicle_shedan.png'
import vehicle_van       from '../../../assets/vehicle_van.png'
import vehicle_hatchback from '../../../assets/vehicle_hatchback.png'
import vehicle_su        from '../../../assets/vehicle_su.png'
import { Driver } from './sub-components/driver'

const Marker2 = (MapView as any).Marker;
// follow instruction from official website react-native-snap-carousel to have spacing between slides
const  horizontalMargin  = 30
const  slideWidth        = 64
export const sliderWidth = Dimensions.get('window').width
export const itemWidth   = slideWidth + horizontalMargin * 2
const  itemHeight        = 156

export const data = [
  { title: 'Shedan'    , price: '2.98', source: vehicle_shedan    },
  { title: 'Hatchback' , price: '1.98', source: vehicle_hatchback },
  { title: 'Van'       , price: '4.98', source: vehicle_van       },
  { title: 'Su'        , price: '4.98', source: vehicle_su        },
]

interface State {
  status: 'initial' | 'enter locations' | 'driver'
}

interface Action {
  type: string
}

const initialRegion = {
  latitude      : 16.4619,
  longitude     : 107.59546,
  latitudeDelta : 0.0922,
  longitudeDelta: 0.0421,
};

export function Dashboard() {
  const [region, setRegion] = useState(initialRegion);
  const [marker, setMarker] = useState({
    latitude: 16.4619, longitude: 107.59546,
  });

  const initialState: State = {
    status: 'initial',
  }

  const [state, dispatch] = useReducer<
    (prevState: State, action: Action) => State
  >(function reducer(prevState, action) {
    switch (action.type) {
      case 'initial':
        return {
          ...prevState,
          status: 'initial',
        }
      case 'enter locations':
        return {
          ...prevState,
          status: 'enter locations',
        }
      case 'driver':
        return {
          ...prevState,
          status: 'driver',
        }
      default:
        return prevState
    }
  }, initialState)


  function onRegionChange(region) {
    setRegion(region)
  }

  return (
    <View
      style={{ minHeight: 580, position: 'relative' }}
      onLayout={event => console.log('-> onLayout', event.nativeEvent.layout)}
    >
      <MapView
        style={ styles.map }
        region={region}
        onRegionChange={onRegionChange}
        initialRegion={initialRegion}
      >
        <Marker2 draggable coordinate={marker} onDragEnd={e => {
          setMarker(e.nativeEvent.coordinate )
        }} />
      </MapView>
      {
              state.status == 'initial'

                        ?
              <>
                <InputLocation
                  type="location1"
                  value="Your Location"
                  onChangeText={() => {}} style={styles.locate}
                />
                <InputLocation
                  type="location2"
                  value="Destination Please. ?"
                  style={styles.destination}
                  onFocus={() => dispatch({ type: 'enter locations'})}
                />
              </>
                        :

                    undefined
      }
      {
              state.status == 'enter locations'

                        ?

              <>
                <InputLocations />
                <BottomSheet onDismiss={() => dispatch({ type: 'initial' })}>
                  <View style={carouselStyles.container}>
                    <Carousel
                      data={data}
                      renderItem={renderItem}
                      itemWidth={itemWidth}
                      sliderWidth={sliderWidth}
                      inactiveSlideScale={1}
                      inactiveSlideOpacity={1}
                      activeSlideAlignment="start"
                      removeClippedSubviews={false}
                    />
                  </View>
                  <View style={buttonStyles.container}>
                    <TouchableOpacity onPress={() => dispatch({ type: 'driver' })}>
                      <Text style={buttonStyles.text}>Confirm Pickup</Text>
                    </TouchableOpacity>
                  </View>
                </BottomSheet>
              </>

                        :

                     undefined
      }
      {
                state.status == 'driver'

                        ?

                    <Driver dispatch={dispatch} />

                        :

                     undefined
      }
    </View>
  );

  function renderItem(data) {
    const { item, index } = data
    return (
      <View style={carouselStyles.slide}>
        <View style={carouselStyles.slideInnerContainer}>
          <Text style={carouselStyles.header}>{item.title}</Text>
          <View style={[carouselStyles.body, index == 0 ? carouselStyles.bodyActive : {}]}>
            <Image source={item.source} style={carouselStyles.image} />
          </View>
          <Text style={[carouselStyles.footer, index == 0 ? carouselStyles.footerActive : {}]}>${item.price}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locate: {
    // position: 'absolute',
    // top: 20,
    minWidth: 335,
    alignSelf: 'center',
  },
  destination: {
    // position: 'absolute',
    // bottom: 20,
    minWidth: 335,
    alignSelf: 'center',
  },
 });

 export const carouselStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 6,
    ...debug('tomato'),
    overflow: 'scroll',
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    paddingTop: 20,
  },
  slideInnerContainer: {
    minWidth: slideWidth,
    flex: 1,
    alignItems: 'center',
  },
  slideWrapper: {
    height: 168,
    width: 335,
  },
  header: {
    backgroundColor: '#323643',
    color: '#fff',
    fontSize: 8,
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: 4,
    paddingBottom: 6,
    borderRadius: 3,
    paddingHorizontal: 6,
    overflow: 'hidden',
  },
  body: {
    marginTop: 10,
    width: 64,
    height: 64,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },
  bodyActive: {
    borderColor: '#323643',
    backgroundColor: '#fff',
  },
  image: {
    width: 39,
    height: 16,
  },
  footer: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    color: '#CED0D2',
  },
  footerActive: {
    color: '#606470',
  },
})


const buttonStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 6,
    marginVertical: 20,
    overflow: 'hidden',
  },
  text: {
    backgroundColor: '#3277D8',
    fontSize: 16,
    paddingVertical: 15,
    color: '#fff',
    textAlign: 'center',
  },
})