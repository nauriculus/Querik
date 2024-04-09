import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import { Entypo } from '@expo/vector-icons';
import { Image } from 'react-native';

const ProfilePageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
       
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Nauriculus
        </Text>
        <Text style={{ color: colors.pink }}>Private Key</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
       
      
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Notifications</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
      
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Privacy</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Contact Us</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default ProfilePageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.lightGrey,
  },
  image: {
    width: 90,
    aspectRatio: 1,
    borderRadius: 50,
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: 100,
    gap: 15,
  },
});
