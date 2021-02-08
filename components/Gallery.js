import React from 'react';
import { View, Image, StyleSheet, Dimensions, Modal, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper/src';
import colors from '../config/colors';

import { MaterialIcons } from '@expo/vector-icons';

const GallerySwiper = (props) => {
  return (
    <Swiper
      loop={false}
      index={props.index}
    >
      {
        props.pictures.map((src, index) => {
          return (
            <View style={styles.slide} key={index}>
              <Image
                style={styles.picture}
                source={src}
              />
            </View>
          )
        })
      }
    </Swiper >
  )
}

const Gallery = (props) => {

  return (
    <Modal
      animationType="fade"
      visible={props.visible}
    >
      <TouchableOpacity
        onPress={props.handlePress}
        style={styles.closeButton}
      >
        <MaterialIcons
          name="close" size={36}
          color={colors.gigas}
        />
      </TouchableOpacity>

      <GallerySwiper
        index={props.index}
        pictures={props.pictures}
      />

    </Modal>
  )
}

export default Gallery;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: width,
    height: width,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
  },
});