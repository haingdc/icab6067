import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export function Dashboard() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState({
    latitude: 37.78825, longitude: -122.4324,
  });
  function onRegionChange(region) {
    setRegion(region)
  }
  return (
    <View
      style={{ minHeight: 400 }}
    >
      <MapView
        style={ styles.map }
        region={region}
        onRegionChange={onRegionChange}
      >
        <Marker draggable coordinate={marker} onDragEnd={e => setMarker(e.nativeEvent.coordinate )} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });