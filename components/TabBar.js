import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';

const TabItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.page) {
          props.handlePress(props.page);
        }
      }}
      style={
        [
          styles.roundWrapper,
          styles.iconWrapper,
          styles.boxShadows,
        ]}
    >
      <AntDesign name={props.name} size={20} color={colors.gigas} />
    </TouchableOpacity >
  )
}

const TabBar = ({ handlePress }) => {
  return (
    <View style={styles.bar}>
      <TabItem name="home" handlePress={handlePress} page="Home" />
      <TabItem name="message1" />
      <TabItem name="hearto" />
      <TabItem name="user" />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    paddingVertical: 15,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  roundWrapper: {
    width: 50,
    height: 50,
    borderWidth: 4,
    borderRadius: 50,
  },
  boxShadows: {
    shadowColor: colors.logan,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 15,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.whisper,
    backgroundColor: colors.whisper,
  },
});

export default TabBar;
