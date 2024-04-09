import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';

const ProductCard = ({ onPress, onQuestList, item, isQuestList }) => {
  const questlist = useSelector((state) => state.questlist);
  const [fonts] = useFonts({
    Pacifico: require('../../../assets/fonts/Pacifico-Regular.ttf'),
    Inter: require('../../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../../assets/fonts/Inter-Light.ttf'),
  });
  if (!fonts) {
    return null;
  }

  console.log(item);
  
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <SharedElement id={item.image}>
        <Image source={item.image} style={styles.Image} resizeMode="cover" />
      </SharedElement>
      {/* price Section */}
      <View style={styles.PriceContainer}>
        <View>
          <View id={item.text}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <View style={styles.ratingCard}>
                <View style={{ flexDirection: 'row', gap: 2}}>
                  <FontAwesome name="star" size={18} color={colors.yellow} />
                  <FontAwesome name="star" size={18} color={colors.yellow} />
                  <FontAwesome name="star" size={18} color={colors.yellow} />
                  <FontAwesome name="star" size={18} color={colors.yellow} />
                 
                  <FontAwesome
                    name="star-half-full"
                    size={18}
                    color={colors.yellow}
                  />
                    </View>
                    </View>
        </View>
        <TouchableOpacity onPress={onQuestList}>
          <AntDesign
            name={questlist.includes(item) ? 'heart' : 'hearto'}
            size={24}
            color={colors.pink}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: colors.white,
    width: 150,
    height: 210,
    borderRadius: 10,
    marginRight: 10,
  },
  ratingCard: {
    marginTop: 5,
    marginLeft: 8,
    borderRadius: 10,
  },
  Image: {
    marginTop: 20,
    width: 100,
    marginLeft: 25,
    marginBottom: 10,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }, 
  PriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  productName: {
    marginTop: 10,
    marginLeft: 8,
    fontFamily: 'InterLight',
    width: 100,
  },
  price: {
    marginTop: 5,
    marginLeft: 8,
    fontFamily: 'InterLight',
  },
});
