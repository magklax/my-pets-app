import React, { useState } from 'react';
import { View } from 'react-native';

import ProfileContent from '../components/ProfileContent';
import Gallery from '../components/Gallery';

const ProfileScreen = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [pictures, setPictures] = useState([]);

  const handlePress = (index, pictures) => {
    if (!modalVisible) {
      setIndex(index);
      setPictures(pictures);
    }

    setModalVisible(!modalVisible);
  }

  return (
    <View style={{ flex: 1 }}>
      <ProfileContent item={route.params.item} handlePress={handlePress} />
      <Gallery
        visible={modalVisible}
        handlePress={handlePress}
        index={index}
        pictures={pictures}
      />
    </View>
  )
}

export default ProfileScreen;
