import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { InputLocation, NewLocation } from '../../components/input-location';

const Marker2 = (MapView as any).Marker;
console.log('dimensionsss', Dimensions.get('window'));

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export function Dashboard() {
  const [region, setRegion] = useState(initialRegion);
  const [marker, setMarker] = useState({
    latitude: 37.78825, longitude: -122.4324,
  });
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
      <NewLocation style={{}} />
      {/* <InputLocation type="location1" value="16th Avenue, 4th Cross Street, Chennai" onChangeText={() => {}} style={styles.locate} /> */}
      {/* <InputLocation
        type="location2"
        value="Destination Please. ?"
        onChangeText={() => {}}
        style={styles.destination}
      /> */}
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