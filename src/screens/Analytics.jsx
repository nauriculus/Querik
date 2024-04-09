import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../assets/Theme/colors';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import SectionHeader from '../Components/SectionHeaderComponent/SectionHeader';
import OfferCard from '../Components/OfferCard/OfferCard';
import Staking from '../../assets/Datas/Staking';
import ProductCard from '../Components/ProductCard/ProductCard';
import ForumCard from '../Components/ProductCard/ForumCard';
import popularProducts from '../../assets/Datas/PopularProducts';
import Program from '../../assets/Datas/Program';
import Defi from '../../assets/Datas/Defi';
import { addToRecentlyViewed } from '../../assets/Redux/Actions/RecentlyViewedAction';
import RecentlyViewedCard from '../Components/RecentlyViewedCard/RecentlyViewedCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToQuestList } from '../../assets/Redux/Actions/QuestList';
import { SharedElement } from 'react-navigation-shared-element';

const HomeScreen = () => {
  const [isModal, setIsModal] = useState(true);

  const dispatch = useDispatch();
  const questList = useSelector((state) => state.questList);
  const navigation = useNavigation();
  const [fonts] = useFonts({
    AlluraRegular: require('../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../assets/fonts/Inter-Medium.ttf'),
    Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }

  const data = [
    { id: 1, uri: "https://cms.stakingrewards.com/wp-content/uploads/2019/05/staking_facilities-e1566399146836.png", text: "Staking Facilities" },
    { id: 2, uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/05cc4f9000aec546208a2270aec10adbd8ee32cf79d576b36c9aea5b18e4e45c?apiKey=31d7a20f8f074e7d99732391a216f47a&", text: "Crypto Revolution" },
    { id: 3, uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/38f38ed539d7d17f60b782e520578a1e77af00e55304ffe5cc21dc4ffadd3cba?apiKey=31d7a20f8f074e7d99732391a216f47a&", text: "Crypto Revolution" },
    { id: 4, uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/011378b01208c57a333effc794394f0f1fa5f94479b4be7257008f0b93fb0be6?apiKey=31d7a20f8f074e7d99732391a216f47a&", text: "Cannabiz" },
    { id: 5, uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4507079dd19f369d9fd123b3ca1aaee14a358b2d1e9978da93fcff082719481f?apiKey=31d7a20f8f074e7d99732391a216f47a&", text: "Flow" },
    { id: 6, uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d604f8f61288aba3f79cc046d11c57761f4df90f064da8c1e0cfb89f7e946bed?apiKey=31d7a20f8f074e7d99732391a216f47a&", text: "Delivery" },
  ];

  const CategoryItem = ({ categories, onPressCategory }) => {
    // Split categories into two arrays, each representing a row
    const firstRowCategories = categories.slice(0, Math.ceil(categories.length / 2));
    const secondRowCategories = categories.slice(Math.ceil(categories.length / 2));
  
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={stylesProjects.container}
      >
        {/* Render first row of categories */}
        <View style={stylesProjects.rowContainer}>
          {firstRowCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressCategory(category)}
              style={[stylesProjects.categoryContainer, { backgroundColor: colors.white }]}
            >
              <Image
                source={{ uri: category.uri }}
                style={stylesProjects.categoryImage}
              />
              <Text style={stylesProjects.categoryText}>{category.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
  
        {/* Render second row of categories */}
        <View style={stylesProjects.rowContainer}>
          {secondRowCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressCategory(category)}
              style={[stylesProjects.categoryContainer, { backgroundColor: colors.white }]}
            >
              <Image
                source={{ uri: category.uri }}
                style={stylesProjects.categoryImage}
              />
              <Text style={stylesProjects.categoryText}>{category.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  const handlePress = (text) => {
    Alert.alert("Clicked on", text);
  };


  return (
    <View style={[styles.container]}>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
       
       <View style={{marginTop: 60}}>

        </View>
        <SectionHeader title="Staking Data" />
        <View>
          <FlatList
            data={Staking}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <OfferCard item={item} />;
            }}
          />
        </View>

       

        <SectionHeader title="Program Data" />

        <View>
          <FlatList
            data={Program}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <ForumCard item={item} />;
            }}
          />
        </View>

        <View>


        </View>

        <SectionHeader title="DeFi Data" />

        <View>
          <FlatList
            data={Defi}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <ForumCard item={item} />;
            }}
          />
        </View>

      
      </ScrollView>
    </View>
  );
};

export default HomeScreen;


const stylesProjects = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 16,
  },
  rowContainer: {
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 8,
    paddingHorizontal: 9,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: 'rgba(244, 246, 249, 1)',
    backgroundColor: 'white', // Default white background color for each category item
  },
  categoryImage: {
    width: 45,
    height: 45,
    marginRight: 8,
  },
  categoryText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



/* font sizes */
export const FontSize = {
  headlineH2_size: 32,
  buttonLarge_size: 18,
  bodyDefault_size: 16,
  buttonMini_size: 12,
  bodySmall_size: 14,
  headlineH4_size: 24,
};
/* Colors */
export const Color = {
  light60: "#fff",
  dark30: "#878c90",
  dark60: "#17181a",
  colorGray_100: "rgba(0, 0, 0, 0.1)",
  light40: "#f4f6f9",
  yellow10: "#fff3d4",
  green10: "#d8f8e4",
  colorBlack: "#000",
  green60: "#23c562",
};
/* Paddings */
export const Padding = {
  p_5xl: 24,
  p_lg: 18,
  p_5xs: 8,
  p_xl: 20,
  p_base: 16,
  p_xs: 12,
};
/* border radiuses */
export const Border = {
  br_13xl: 32,
  br_81xl: 100,
  br_29xl: 48,
  br_21xl: 40,
  br_xl: 20,
  br_23xl: 42,
  br_18xl: 37,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
  searchBar: {
    marginTop: 60,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    marginLeft: 15,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 25,
    backgroundColor: colors.white,
    
  },
  imageIcon: {
    height: 32,
  },
  label1: {
    lineHeight: 18,
    marginLeft: 10,
    textAlign: "center",
    fontWeight: "500",
  },
  buttonFill: {
    borderWidth: 2,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_xs,
    justifyContent: "center",
    borderColor: Color.light40,
    borderStyle: "solid",
    height: 48,
    borderRadius: Border.br_29xl,
    flexDirection: "row",
  },
  buttonLabelParent: {
    flexDirection: "row",
  },
  buttonLabel1: {
    marginLeft: 8,
    flexDirection: "row",
  },
  label7: {
    marginLeft: 8,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.bodyDefault_size,
  },
  buttonLabelGroup: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: 12,
  },
});
