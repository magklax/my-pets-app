import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';
import colors from '../config/colors';

const DATA = [
  {
    title: 'Pets make you happy',
    body: 'Living with pets will make you a happier human being. They bring more meaning to your life. Who doesn’t love that?',
  },
  {
    title: 'They keep you active',
    body: 'Many pets love to run, walk and wander. That’s why having pets around will keep you active. Dog owners, for example, walk 79% more every day.',
  },
  {
    title: 'And keep you healthy, too',
    body: 'Because having pets encourages you to be constantly active, you’ll enjoy the health benefits.'
  }
];

const Slide = (elem, index) => {
  return (
    <View key={index} style={styles.slide}>
      <Text style={styles.textTitle}>{elem.title}</Text>
      <Text
        numberOfLines={3}
        style={styles.textBase}
      >{elem.body}</Text>
    </View>
  )
}

const SwiperComponent = () => {
  return (
    <Swiper
      containerStyle={styles.container}
      activeDotStyle={styles.activeDot}
    >
      { DATA.map((elem, index) => Slide(elem, index))}
    </Swiper >
  )
}

export default SwiperComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textBase: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  textTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '800',
  },
  activeDot: {
    backgroundColor: colors.gigas,
  }
});
