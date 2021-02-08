import React from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';

import { PETS } from '../data/pets'
import PetItem from './PetItem';

const PetList = (props) => {
  const renderItem = ({ item }) => {
    if ((!props.types.length || props.types.includes(item.type)) &&
      (props.location === item.location || !props.location)) {
      return (
        <PetItem
          item={item}
          goToProfile={props.goToProfile}
        />
      )
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={PETS}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
});

export default PetList;