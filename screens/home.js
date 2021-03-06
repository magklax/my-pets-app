import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import SwiperComponent from '../components/Swiper';
import ButtonElement from '../components/Button';

import cat from '../assets/images/cat.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={cat} />

      <SwiperComponent />

      <ButtonElement text="Skip" onPress={() => navigation.navigate('Catalog')} />

    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
});
