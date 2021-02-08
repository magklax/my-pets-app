import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import UserBar from '../components/UserBar';
import FilterBar from '../components/FilterBar';
import PetList from '../components/PetList';
import TabBar from '../components/TabBar';
import colors from '../config/colors';

const CatalogScreen = ({ navigation }) => {
  const [types, setTypes] = useState([]);
  const [location, setLocation] = useState('');

  const updateTypes = (type) => {
    if (types.indexOf(type) < 0) {
      setTypes([...types, type]);
    } else {
      setTypes(types.filter(item => item !== type));
    }
  }

  const updateLocation = (loc) => {
    setLocation(loc);
  }

  const goToProfile = (pet) => {
    navigation.navigate('Profile', { item: pet });
  }

  return (
    <View style={styles.wrapper}>
      <UserBar updateLocation={updateLocation} />
      <FilterBar updateTypes={updateTypes} />
      <PetList
        types={types}
        location={location}
        goToProfile={goToProfile}
      />
      <TabBar />
    </View >
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.whisper,
  },
});

export default CatalogScreen;
