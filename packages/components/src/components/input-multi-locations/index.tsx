import React from 'react';
import { View, Image, TextInput, Platform, StyleSheet } from 'react-native';
import pic_compass from '../../../assets/compass.png';
import pic_locate from '../../../assets/locate.png';
import pic_line from '../../../assets/line.png';
import pic_x from '../../../assets/x.png';
import { environments } from '../../environments';


export function InputLocations(props) {
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <View style={[styles.cell1, styles.cellIcon]}>
          <Image source={pic_locate as any} style={[styles.sign, { width: 11, height: 14 }]} />
        </View>
        <View style={[styles.cell1,]}>
          <View style={{ paddingVertical: 0.5 }}>
            <Image source={pic_line as any} style={[styles.sign, { width: 1, height: 29 }]} />
          </View>
        </View>
        <View style={[styles.cell1, styles.cellIcon]}>
          <Image source={pic_compass as any} style={[styles.sign, { width: 12, height: 12 }]} />
        </View>
      </View>
      <View style={styles.col2}>
        <View style={[styles.cellInput, { marginTop: 0 }]}>
          <TextInput style={styles.input} value="16th Avenue, 4th Cross Street, Chennai" />
          <View style={styles.closeWrapper}>
            <Image source={pic_x as any} style={styles.close} />
          </View>
        </View>
        <View style={[styles.cellInput]}>
          <TextInput style={styles.input} value="16th Avenue, 4th Cross Street, Chennai" />
          <View style={styles.closeWrapper}>
            <Image source={pic_x as any} style={styles.close} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    minWidth: 335,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    ...debug('red'),
  },
  col1: {
    width: 42,
    ...debug('red'),
    alignItems: 'center',
    paddingTop: 15,
  },
  cell1: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cellIcon: {
    height: 17,
    paddingVertical: 1,
    ...debug('blue'),
  },
  col2: {
    ...debug('purple'),
    flex: 1,
    paddingTop: 11,
  },
  sign: {
    paddingVertical: 5,
  },
  cellInput: {
    height: 30,
    alignItems: 'stretch',
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...debug('green'),
  },
  closeWrapper: {
    paddingVertical: 6,
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: 5,
    ...debug('brown'),
    alignSelf: 'flex-start',
  },
  close: {
    width: 13,
    height: 13,
    ...debug('silver'),
  },
  input: {
    height: 20,
    flex: 1,
    ...debug('purple'),
    ...Platform.OS == 'web' ? addBorderBottom() : {},
  },
});
export function debug(borderColor: string, borderWidth = 1) {
  return environments.debug ? { borderColor, borderWidth } : undefined;
}
function addBorderBottom() {
  return { borderBottomColor: '#ced0d2', borderBottomWidth: 1 };
}
