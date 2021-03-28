import React from 'react';
import { View, Image, TextInput , ImageSourcePropType, ViewStyle, StyleProp, StyleSheet } from 'react-native';
import pic_compass from '../../../assets/compass.png';
import pic_locate  from '../../../assets/locate.png';
import pic_line    from '../../../assets/line.png';
import pic_x       from '../../../assets/x.png';

function InputBase(props: {
  style?: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
  imageStyle: { width: number; height: number };
  value: string;
  placeholder?: string;
  onChangeText: ((text: string) => void) | undefined;
}) {
  const { style, source, imageStyle, value, placeholder, onChangeText } = props
  return (
    <View style={[itemStyles.container, style]}>
      <View style={{ padding: 17 }}>
        <Image source={source} style={imageStyle} />
      </View>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={{ flex: 1, height: 48, borderWidth: 0 }}
      />
    </View>
  )
}

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  }
});

const photoLookup: Record<string, [any, number, number]> = {
  location1: [pic_locate  , 10.14, 14],
  location2: [pic_compass , 10.14, 14],
};

export function InputLocation(props: PropType) {
  const { style, type, placeholder, value, onChangeText } = props;
  const [source, width, height] = photoLookup[type];
  return (
    <View style={[styles.container, style]} >
      <InputBase
        style={{ borderWidth: 1, borderColor: 'red'}}
        source={source}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        imageStyle={{ width, height }}
      />
      <InputBase
        style={{ borderWidth: 1, borderColor: 'red'}}
        source={source}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        imageStyle={{ width, height }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius : 6,
    borderColor  : '#CED0D2',
    borderWidth  : 1,
    overflow: 'hidden',
    paddingTop: 17,
  },
});

interface PropType {
  style?      : StyleProp<ViewStyle>;
  type        : 'location1' | 'location2',
  value       : string;
  placeholder?: string;
  onChangeText: ((text: string) => void) | undefined;
}

export function NewLocation(props) {
  return (
    <View style={newStyles.container}>
      <View style={newStyles.col1}>
        <View style={[newStyles.cell1, newStyles.cellIcon ]}>
          <Image source={pic_locate as any} style={[newStyles.sign, { width: 11, height: 14 }]} />
        </View>
        <View style={[newStyles.cell1, ]}>
          <View style={{ paddingVertical: 0.5 }}>
            <Image source={pic_line as any} style={[newStyles.sign, { width: 1, height: 29 } ]} />
          </View>
        </View>
        <View style={[newStyles.cell1, newStyles.cellIcon ]}>
          <Image source={pic_compass as any} style={[newStyles.sign, { width: 12, height: 12 } ]} />
        </View>
      </View>
      <View style={newStyles.col2}>
        <View style={[ newStyles.cellInput, { marginTop: 0} ]}>
          <TextInput style={newStyles.input} value="16th Avenue, 4th Cross Street, Chennai" />
          <View style={newStyles.closeWrapper}>
            <Image source={pic_x as any} style={newStyles.close} />
          </View>
        </View>
        <View style={[ newStyles.cellInput ]}>
          <TextInput style={newStyles.input} value="16th Avenue, 4th Cross Street, Chennai" />
          <View style={newStyles.closeWrapper}>
            <Image source={pic_x as any} style={newStyles.close} />
          </View>
        </View>
      </View>
    </View>
  );
}

const newStyles = StyleSheet.create({
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
  },
});

function debug(borderColor: string) {
  return globalThis.debug ? { borderColor, borderWidth: 1 } : undefined;
}