import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';

const PetItem = (props) => {
  const item = props.item;
  const [like, setLike] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.item, styles.boxShadows]}
      onPress={() => props.goToProfile(item)}
    >
      <View style={styles.imageWrapper}>
        <Image source={item.src[0]} style={styles.image} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textBreed}>{item.breed}</Text>
        <Text style={styles.textTitle}>{item.name}</Text>
        <Text style={styles.textLocation}>
          <Ionicons name="location-outline" color={colors.gigas} />
          {item.location}
        </Text>
        <Text style={styles.textBody} numberOfLines={2}>{item.info}</Text>
      </View>
      <TouchableOpacity
        style={[styles.likeWrapper, styles.boxShadows]}
        onPress={() => setLike(!like)}
      >
        <Ionicons name={like ? 'heart' : 'heart-outline'} size={12} color={colors.redorange} />
      </TouchableOpacity>
    </TouchableOpacity >
  )
}

export default PetItem;

const styles = StyleSheet.create({
  item: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 25,
    paddingRight: 20,
    backgroundColor: colors.whisper,
    borderRadius: 16,
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
  imageWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  textWrapper: {
    marginLeft: 150,
    paddingVertical: 16,
  },
  textTitle: {
    color: colors.mineshaft,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '800',
  },
  textBreed: {
    fontSize: 12,
    lineHeight: 16,
  },
  textLocation: {
    color: colors.gray,
    fontSize: 12,
    lineHeight: 18,
  },
  textBody: {
    color: colors.emperor,
    fontSize: 14,
    lineHeight: 20,
  },
  likeWrapper: {
    position: 'absolute',
    top: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: colors.whisper,
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
});