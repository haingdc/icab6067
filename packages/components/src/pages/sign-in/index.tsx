import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import greenCar from '../../../assets/green-car.png';
import { InputApp } from '../../components/input';

export function Login() {
  const [data, setData] = useState({
    mail: '',
    pass: '',
  })
  return (
    <View style={styles.container} nativeID="todo">
      <Image source={greenCar as any} style={styles.img} />
      <Text style={[styles.text1, styles.welcome]}>Welcome Back!</Text>
      <Text style={[styles.text2, styles.desc]}>Login to continue using iCab</Text>
      <InputApp
        type="emailAddress"
        value={data.mail}
        placeholder="Email"
        onChangeText={text => {
          setData(v => ({
            ...v,
            mail: text,
          }))
        }}
        style={styles.mail}
      />
      <InputApp
        type="password"
        value={data.mail}
        placeholder="Password"
        onChangeText={text => {
          setData(v => ({
            ...v,
            pass: text,
          }))
        }}
        style={styles.pass}
      />
      <Text style={[ styles.text2, styles.forgot]}>Forgot password?</Text>
      <TouchableOpacity style={{ borderRadius: 6, overflow: 'hidden', marginTop: 33 }} onPress={() => {}}>
        <Text style={styles.submit}>Login</Text>
      </TouchableOpacity>
      <Text style={[styles.text2, styles.bottomText]}>
        New User?
        <TouchableOpacity>
          <Text style={styles.signup}>
            Sign up for a new acccount
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 126,
    width: 375,
    alignSelf: 'center'  ,
  },
  img: {
    width: 195,
    height: 80,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 22,
    color: '#323643'
  },
  text2: {
    fontSize: 16,
    color: '#606470',
  },
  welcome: {
    marginTop: 30,
    alignSelf: 'center',
  },
  desc: {
    marginTop: 14,
    alignSelf: 'center',
  },
  mail: {
    marginTop: 148,
  },
  pass: {
    marginTop: 20,
  },
  forgot: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  submit: {
    backgroundColor: '#3277D8',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 6,
    lineHeight: 48,
  },
  bottomText: {
    alignSelf: 'center',
    marginTop: 40,
  },
  signup: {
    color: '#3277D8',
    marginLeft: 5,
  },
});