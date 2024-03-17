import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
  onLongPress: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      onLongPress={onLongPress}
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.buttonPresed]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5856d6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
  buttonPresed: {
    backgroundColor: '#4746ab',
  },
});
