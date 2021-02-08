import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../config/colors';
import avatar from '../assets/images/avatar.png';
import { Ionicons } from '@expo/vector-icons';

const DATA = ['New York City', 'Tokyo', 'Delhi', 'Shanghai', 'Mexico City', 'Buenos Aires', 'Paris', 'London', 'Madrid'];

const UserBar = (props) => {
  const [notifications, setNotifications] = useState(true);

  const renderLocations = () => {
    const result = DATA.sort().map((value) => DATA.reduce((obj) => {
      [obj.value, obj.label] = [value, value];
      return obj;
    }, {}));
    result.splice(0, 0, { value: '', label: 'Show All' });

    return result;
  }

  return (
    <View style={styles.bar}>

      <View style={[
        styles.roundWrapper,
        styles.avatarWrapper,
        styles.boxShadows,
      ]}>
        <Image style={styles.avatar} source={avatar} />
      </View>

      <View style={styles.dropdownWrapper}>
        <Ionicons name="ios-location-sharp" size={24} color={colors.gigas} />
        <DropDownPicker
          items={renderLocations()}
          placeholder="Select location"
          dropDownMaxHeight={250}
          style={styles.dropdown}
          dropDownStyle={styles.dropdownInner}
          containerStyle={styles.dropdownContainer}
          itemStyle={styles.dropdownItem}
          labelStyle={styles.dropdownLabel}
          activeLabelStyle={{ color: colors.gigas }}
          arrowColor={colors.gigas}
          searchable={true}

          onChangeItem={item => props.updateLocation(item.value)}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.roundWrapper,
          styles.iconWrapper,
          styles.boxShadows,
        ]}
        onPress={() => setNotifications((state) => !state)}
      >
        <Ionicons name={notifications ? 'notifications-outline' : 'notifications-off'} size={24} color={colors.gigas} />

      </TouchableOpacity>
    </View>
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
    zIndex: 1,
  },
  avatarWrapper: {
    width: 50,
    height: 50,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  avatar: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
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
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: colors.whisper,
    borderWidth: 0,
  },
  dropdownInner: {
    backgroundColor: colors.whisper,
  },
  dropdownContainer: {
    width: 180,
    height: 40,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    paddingVertical: 25,
  },
  dropdownLabel: {
    color: colors.mineshaft,
    marginLeft: 0,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.whisper,
    backgroundColor: colors.whisper,
  },
});

export default UserBar;
