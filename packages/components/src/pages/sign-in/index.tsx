import React from 'react';
import { View, Text, Image } from 'react-native';
import greenCar from '../../../assets/green-car.png';

export function Login() {
  return (
    <View>
      <Image source={greenCar} width={195} height={80} />
    </View>
  );
}