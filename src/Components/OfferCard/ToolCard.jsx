import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { useFonts } from 'expo-font';

const OfferCard = ({ item }) => {
  const [fonts] = useFonts({
    AlluraRegular: require('../../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../../assets/fonts/Inter-Medium.ttf'),
    Pacifico: require('../../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.OfferCardContainer}>
      <View style={{ flexDirection: 'row' }}>
      <Image source={item.image} style={styles.img} resizeMode="contain" />
        <View style={styles.TextContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.description}</Text>
        </View>
         
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  OfferCardContainer: {
    backgroundColor: colors.white,
    width: 250,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Inter',
    color: colors.pink,
    fontSize: 20,
    marginLeft: 15,
    marginTop: 50,
  },
  TextContainer: {
    width: 150,
    marginBottom: 30,
  },
  img: {
    height: 30,
    width: 30,
    marginTop: 20,
  },
});
