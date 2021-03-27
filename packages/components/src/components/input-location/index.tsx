import React from 'react';
import { View, Image, TextInput , ImageSourcePropType, ViewStyle, StyleProp, StyleSheet } from 'react-native';
import pic_compass from '../../../assets/compass.png';
import pic_locate  from '../../../assets/locate.png';

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
    <View style={[styles.container, style]}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius : 4,
    borderColor  : '#CED0D2',
    borderWidth  : 1,
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
    <InputBase
      style={style}
      source={source}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      imageStyle={{ width, height }}
    />
  );
}

interface PropType {
  style?      : StyleProp<ViewStyle>;
  type        : 'location1' | 'location2',
  value       : string;
  placeholder?: string;
  onChangeText: ((text: string) => void) | undefined;
}