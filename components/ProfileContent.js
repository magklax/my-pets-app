import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import ButtonElement from '../components/Button';

import { DOGS } from '../data/dogs';
import colors from '../config/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import bg from '../assets/images/profile-bg.png';

const Picture = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.callback(props.index, props.pictures);
      }}
      style={[
        styles.roundWrapper,
        styles.iconWrapper,
        styles.boxShadows,
      ]}
    >
      <Image style={styles.preview} source={props.src} />
    </TouchableOpacity>
  )
}

const ProfileContent = (props) => {
  const item = props.item;

  return (
    <ImageBackground source={bg} style={styles.bg}>
      <Image
        style={styles.image}
        source={item.src[0]}
      />
      <View style={styles.info}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <Text style={styles.textLocation}>
          <Ionicons name="location-outline" color={colors.gigas} />
          {item.location}
        </Text>
        <View style={styles.infoWrapper}>
          <View style={styles.block}>
            <View
              style={[
                styles.roundWrapper,
                styles.iconWrapper,
                styles.boxShadows,
              ]}
            >
              <Ionicons name="md-paw-outline" size={24} color={colors.corn} />
            </View>
            <Text style={styles.typeText}>{item.breed}</Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.roundWrapper,
                styles.iconWrapper,
                styles.boxShadows,
              ]}
            >
              <FontAwesome name="intersex" size={24} color={colors.pinksalmon} />
            </View>
            <Text style={styles.typeText}>{item.sex}</Text>
          </View>
        </View>

        <Text numberOfLines={4} style={styles.textDesc}>{item.info}</Text>
        <View style={styles.infoWrapper}>
          {item.src.map((src, index) => {
            return (
              <Picture
                callback={props.handlePress}
                src={src}
                pictures={item.src}
                key={index}
                index={index}
              />
            )
          })}
        </View>
        <ButtonElement text="Adopt now" onPress={() => console.log('adopt me')} />
      </View>
    </ImageBackground>
  )
}

export default ProfileContent;

const styles = StyleSheet.create({

  bg: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 260,
    height: 260,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
  },
  preview: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  info: {
    width: '100%',
    padding: 24,
    backgroundColor: colors.whisper,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    marginBottom: 10,
    color: colors.mineshaft,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '800',
  },
  typeText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '800',
  },
  textLocation: {
    marginBottom: 14,
    color: colors.gray,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
  },
  textDesc: {
    marginBottom: 20,
    color: colors.silverchalice,
    fontSize: 16,
    lineHeight: 24,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.whisper,
    backgroundColor: colors.whisper,
    marginRight: 16,
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
});
