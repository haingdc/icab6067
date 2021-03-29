import React from 'react';
import { View, Image, TextInput , ImageSourcePropType, ViewStyle, StyleProp, StyleSheet, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import pic_compass from '../../../assets/compass.png';
import pic_locate  from '../../../assets/locate.png';

function InputBase(props: {
  style?: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
  imageStyle: { width: number; height: number };
  value: string;
  placeholder?: string;
  onChangeText: ((text: string) => void) | undefined;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}) {
  const { style, source, imageStyle, value, placeholder, onChangeText, onFocus } = props
  return (
    <View style={[itemStyles.container, style]}>
      <View style={{ padding: 17 }}>
        <Image source={source} style={imageStyle} />
      </View>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={onFocus}
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
  const { style, type, placeholder, value, onChangeText, onFocus } = props;
  const [source, width, height] = photoLookup[type];
  return (
    <View style={[styles.container, style]} >
      <InputBase
        source={source}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={onFocus}
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
  style?       : StyleProp<ViewStyle>;
  type         : 'location1' | 'location2',
  value        : string;
  placeholder? : string;
  onChangeText?: ((text: string) => void) | undefined;
  onFocus?     : (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}