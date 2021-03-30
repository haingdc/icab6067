import React, { useReducer, useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BottomSheet } from '../../components/bottom-sheet';
import { InputLocation } from '../../components/input-location';
import { debug, InputLocations } from '../../components/input-multi-locations';

const Marker2 = (MapView as any).Marker;
console.log('dimensionsss', Dimensions.get('window'));

interface State {
  status: 'initial' | 'enter locations';
}

interface Action {
  type: string
}

const initialRegion = {
  latitude: 16.4619,
  longitude: 107.59546,
  latitudeDelta: 0.0922,
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
                  <Text style={{ ...debug('purple', 3) }}>Tet that hao huc</Text>
                  <Text style={{ ...debug('purple', 3) }}>Tet that hao huc</Text>
                  <Text style={{ ...debug('purple', 3) }}>Tet that hao huc</Text>
                  <Text style={{ ...debug('purple', 3) }}>Tet that hao huc</Text>
                  <Text style={{ ...debug('purple', 3) }}>Tet that hao huc</Text>
                </BottomSheet>
              </>

                        :

                     undefined
      }
    </View>
  );
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
    position: 'absolute',
    top: 20,
    minWidth: 335,
    alignSelf: 'center',
  },
  destination: {
    position: 'absolute',
    bottom: 20,
    minWidth: 335,
    alignSelf: 'center',
  },
 });