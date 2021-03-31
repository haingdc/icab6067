import React from 'react';
import { View, Image, TextInput , ImageSourcePropType, ViewStyle, StyleProp, StyleSheet } from 'react-native';
import pic_mail  from '../../../assets/mail.png';
import pic_human from '../../../assets/human.png';
import pic_lock  from '../../../assets/lock.png';
import pic_phone from '../../../assets/phone.png';

function InputBase(props: {
  style?: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
  imageStyle: { width: number; height: number };
  value: string;
  placeholder?: string;
  type: 'password' | 'username' | 'emailAddress' | 'telephoneNumber';
  onChangeText: ((text: string) => void) | undefined;
}) {
  const { style, source, type, imageStyle, value, placeholder, onChangeText } = props
  return (
    <View style={[styles.container, style]}>
      <View style={{ padding: 17 }}>
        <Image source={source} style={imageStyle} />
      </View>
      <TextInput
        value={value}
        placeholder={placeholder}
        textContentType={type}
        onChangeText={onChangeText}
        secureTextEntry={type === 'password'}
        style={{ flex: 1, height: 48, borderWidth: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius : 4,
    borderColor  : '#CED0D2',
    borderWidth  : 1,
  }
});

const photoLookup: Record<string, [any, number, number]> = {
  password        : [pic_lock  , 12, 13],
  username        : [pic_human , 12, 13],
  emailAddress    : [pic_mail  , 17, 13],
  telephoneNumber : [pic_phone , 13, 13],
};

export function Input(props: PropType) {
  const { style, type, placeholder, value, onChangeText } = props;
  const [source, width, height] = photoLookup[type];
  return (
    <InputBase
      type={type}
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
  type        : 'password' | 'username' | 'emailAddress' | 'telephoneNumber';
  value       : string;
  placeholder?: string;
  onChangeText: ((text: string) => void) | undefined;
}