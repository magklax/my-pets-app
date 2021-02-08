import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import colors from '../config/colors';

const TYPES = ['cats', 'dogs', 'birds', 'other'];

const FilterElement = (type, callback) => {
  const [isOn, toggleIsOn] = useState(false);

  const toggle = () => {
    toggleIsOn(!isOn);
    callback(type);
  }

  return (
    <TouchableOpacity
      key={type}
      style={[
        styles.filterWrapper,
        styles.boxShadows,
        isOn ? styles.filterWrapperPurple : styles.filterWrapperWhite
      ]}
      onPress={toggle}
    >
      <Text style={isOn ? styles.filterTextWhite : styles.filterText}>{type}</Text>
    </TouchableOpacity>
  )
}

const FilterBar = ({ updateTypes }) => {
  return (
    <View style={styles.bar}>
      {TYPES.map((type) => FilterElement(type, updateTypes))}
    </View >
  )
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  filterWrapper: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  filterWrapperWhite: {
    backgroundColor: colors.whisper,
  },
  filterWrapperPurple: {
    backgroundColor: colors.kimberly,
  },
  filterText: {
    color: colors.kimberly,
  },
  filterTextWhite: {
    color: colors.whisper,
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
})

export default FilterBar;
