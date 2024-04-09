import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../assets/Theme/colors';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import CustomButton from '../Components/CustomButton';
import Products from '../../assets/Datas/Products';
import ProductCard from '../Components/ProductCard/ProductCard';
import { addToRecentlyViewed } from '../../assets/Redux/Actions/RecentlyViewedAction';
import { useDispatch, useSelector } from 'react-redux';
import { addToQuestList } from '../../assets/Redux/Actions/QuestList';
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-navigation-shared-element';

const ProductScreen = ({ route }) => {
  const item = route.params.Product;
  console.log(item);

  const [isModal, setIsModal] = useState(false);
  const questList = useSelector((state) => state.questList);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [fonts] = useFonts({
    AlluraRegular: require('../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../assets/fonts/Inter-Medium.ttf'),
    InterSemi: require('../../assets/fonts/Inter-SemiBold.ttf'),
    Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }
  
  return (
    <View style={[styles.container]}>
      {/*  share model */}
      <View id="general">
        

        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={44} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <SharedElement id={item.image}>
            <Image
              source={{ uri: item.uri }}
              resizeMode="cover"
              style={styles.image}
            />
          </SharedElement>
          {/* Name Section */}

          <View style={styles.NameSectionContainer}>
            <View style={styles.NameSection}>
              <View id={item.text}>
                <Text
                  style={styles.name}
             
                >
                  {item.text}
                </Text>
              </View>
              <View
             
              >
               
              </View>

              
            </View>

            <View
              style={styles.ratingContainer}
        
            >
              <FontAwesome name="star" size={18} color={colors.yellow} />
              <Text style={styles.ratingText}>( 4.5 )</Text>
            </View>
           
          </View>

         

          {/* Description Section */}

          <View style={styles.descriptionContainer}>
            
            <Text
              style={styles.description}>
              {item.description}
            </Text>
          </View>

         
         
        </ScrollView>
      </View>
    </View>
  );
};

ProductScreen.sharedElements = (route, otherRoute, showing) => {
  const item = route.params.Product;

  return [
    {
      id: item.image,
   
      resize: 'clip',
    },
    {
      id: item.productName,
 
      resize: 'clip',
    },
    {
      id: item.price,

      resize: 'clip',
    },
    {
      id: item.general,
    },
  ];
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  NameSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    color: colors.pink,
    marginLeft: 20,
    marginRight: 15,
  },
  NameSection: {
    flexDirection: 'row',
    width: 130,
    color: colors.pink,
    gap: 5,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter',
    flexDirection: 'row', 
    color: colors.pink,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  circle1: {
    width: 25,
    height: 25,
    backgroundColor: colors.pink,
    borderRadius: 25,
  },
  circle2: {
    width: 25,
    height: 25,
    backgroundColor: colors.yellow,
    borderRadius: 25,
  },
  circle3: {
    width: 25,
    height: 25,
    backgroundColor: '#cabad3',
    borderRadius: 25,
  },
  PriceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 15,
    marginTop: 10,
  },
  priceText: {
    fontFamily: 'Inter',
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingText: {
    color: colors.grey,
    fontFamily: 'InterLight',
  },
  descriptionHeader: {
    fontFamily: 'InterSemi',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
  },
  description: {
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'InterLight',
    lineHeight: 20,
  },
  descriptionContainer: {
    marginRight: 15,
  },
  reviewContainer: {
    marginTop: 10,
  },
  ratingCard: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginRight: 200,
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
  },
  suggestionText: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Inter',
  },
});
