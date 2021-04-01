import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import redCar from '../../../assets/red-car.png';
import { Input } from '../../components/input';
import { AuthContext } from '../../contexts/auth';
import { Link } from '../../Router';

export function SignUp() {
  const { signUp     } = React.useContext(AuthContext);
  const [data, setData] = useState({
    name : '',
    phone: '',
    mail : '',
    pass : '',
  });
  function handleChange(field: string) {
    return function onChange(text) {
      setData(v => ({
        ...v,
        [field]: text
      }));
    }
  }
  return (
    <View style={styles.container} nativeID="todo">
      <Image source={redCar as any} style={styles.img} />
      <Text style={[styles.text1, styles.welcome]}>Welcome Aboard!</Text>
      <Text style={[styles.text2, styles.desc]}>Signup with iCab in simple steps</Text>
      <Input
        type="username"
        value={data.name}
        placeholder="Name"
        onChangeText={handleChange('name')}
        style={styles.name}
      />
      <Input
        type="telephoneNumber"
        value={data.phone}
        placeholder="Phone Number"
        onChangeText={handleChange('phone')}
        style={styles.phone}
      />
      <Input
        type="emailAddress"
        value={data.mail}
        placeholder="Email"
        onChangeText={handleChange('mail')}
        style={styles.phone}
      />
      <Input
        type="password"
        value={data.pass}
        placeholder="Password"
        onChangeText={handleChange('pass')}
        style={styles.phone}
      />
      <TouchableOpacity style={{ borderRadius: 6, overflow: 'hidden', marginTop: 33 }} onPress={() => signUp(data)}>
        <Text style={styles.submit}>Signup</Text>
      </TouchableOpacity>
      <Text style={[styles.text2, styles.bottomText]}>
        Already a User?
        <Link to="/signin">
          <Text style={styles.signup}>
            Login now
          </Text>
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 96,
    paddingHorizontal: 30,
    width: 375,
    alignSelf: 'center'  ,
  },
  img: {
    width: 192,
    height: 60,
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
    marginTop: 6,
    alignSelf: 'center',
  },
  name: {
    marginTop: 43,
  },
  phone: {
    marginTop: 20,
  },
  pass: {
    marginTop: 20,
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
    marginTop: 10,
  },
  signup: {
    color: '#3277D8',
    marginLeft: 5,
  },
});