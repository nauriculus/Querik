import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';

const ForumCard = ({ onPress, onQuestList, item, isQuestList }) => {
  const questlist = useSelector((state) => state.questlist);
  const [fonts] = useFonts({
    Pacifico: require('../../../assets/fonts/Pacifico-Regular.ttf'),
    Inter: require('../../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../../assets/fonts/Inter-Light.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.OfferCardContainer}>
      <View style={{ flexDirection: 'row' }}>
        
      {item.id === 1 ? (
          <Image source={item.image} style={styles.img} resizeMode="contain" />
        ) : (
          <Image source={item.image} style={styles.img2} resizeMode="contain" />
        )}

        <View style={styles.TextContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        
      </View>
    </View>
  );
};

export default ForumCard;

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
    marginTop: 30,
  },
  description: {
    fontFamily: 'InterLight',
    marginLeft: 15,
    fontSize: 15,
    marginTop: 0,
  },
  TextContainer: {
    width: 150,
    marginBottom: 30,
  },
  img: {
    marginLeft: 15,
    height: 90,
    width: 90,
    marginTop: 15,
  },
  img2: {
    marginLeft: 15,
    height: 80,
    width: 80,
    marginTop: 15,
  },
});
