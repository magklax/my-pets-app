import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import colors from '../config/colors';

const ButtonElement = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: colors.gigas,
    borderRadius: 32,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.whisper,
    textAlign: 'center',
  },
});

export default ButtonElement;