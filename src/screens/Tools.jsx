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
import ToolCard from '../Components/OfferCard/ToolCard';
import offers from '../../assets/Datas/offers';
import ProductCard from '../Components/ProductCard/ProductCard';
import ForumCard from '../Components/ProductCard/ForumCard';
import popularProducts from '../../assets/Datas/PopularProducts';
import ForumItems from '../../assets/Datas/ForumItems';
import { addToRecentlyViewed } from '../../assets/Redux/Actions/RecentlyViewedAction';
import RecentlyViewedCard from '../Components/RecentlyViewedCard/RecentlyViewedCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToQuestList } from '../../assets/Redux/Actions/QuestList';
import { SharedElement } from 'react-navigation-shared-element';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import { Entypo } from '@expo/vector-icons';

const Tools = () => {
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

  const ToolsItem = ({ categories, onPressCategory }) => {
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
             <Entypo
              name={category.icon}
              size={36}
              color={colors.pink}
              style={stylesProjects.icon}
            />
              <Text style={stylesProjects.categoryText}>{category.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
  
        <View style={stylesProjects.rowContainer}>
          {secondRowCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressCategory(category)}
              style={[stylesProjects.categoryContainer, { backgroundColor: colors.white }]}
            >
            <Entypo
        name={category.icon}
        size={36}
        color={colors.pink}
        style={stylesProjects.icon}
      />
      <Text style={stylesProjects.categoryText}>{category.text}</Text>

            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

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
              onPress={() => handlePress(category)}
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
              onPress={() => handlePress(category)}
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

  const handlePress = (category) => {
   
    navigation.navigate('Catalog', {
      Product: category,
    });
  };

  const data = [
    { id: 1, uri: "https://cms.stakingrewards.com/wp-content/uploads/2019/05/staking_facilities-e1566399146836.png", text: "Staking Facilities" },
    { id: 2, uri: "https://de.superteam.fun/st-flag-logo.png", text: "Superteam Germany" },
    { id: 3, uri: "https://cdn.discordapp.com/attachments/1161769361334341664/1226921744820862996/blocksmithlabs.png?ex=662686eb&is=661411eb&hm=bbef1b5b57130145f80d46da38d272b711bfe3e8fd8f18b892d0cc03b7a85a76&", text: "Blocksmith Labs" },
    { id: 4, uri: "https://www.civic.com/wp-content/uploads/2022/06/cropped-favicon-512-192x192.png", text: "Civic Pass" },
    { id: 5, uri: "https://assets.coingecko.com/coins/images/34594/large/saros-token-logo.png?1705476813", text: "Saros Finance" },
    { id: 6, uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d604f8f61288aba3f79cc046d11c57761f4df90f064da8c1e0cfb89f7e946bed?apiKey=31d7a20f8f074e7d99732391a216f47a&", text: "Delivery" },
  ];

  const toolsData = [
    { id: 1, icon: "drive", text: "RPC Checker" },
    { id: 2, icon: "rocket", text: "Token Launcher" },
  ];
    /* font sizes */
    const FontSize = {
      headlineH2_size: 32,
      buttonLarge_size: 18,
      bodyDefault_size: 16,
      buttonMini_size: 12,
      bodySmall_size: 14,
      headlineH4_size: 24,
    };
    /* Colors */
     const Color = {
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
    
     const Padding = {
      p_5xl: 24,
      p_lg: 18,
      p_5xs: 8,
      p_xl: 20,
      p_base: 16,
      p_xs: 12,
    };
    /* border radiuses */
     const Border = {
      br_13xl: 32,
      br_81xl: 100,
      br_29xl: 48,
      br_21xl: 40,
      br_xl: 20,
      br_23xl: 42,
      br_18xl: 37,
    };

    const stylesProjects = StyleSheet.create({
      container: {
        marginTop: 12,
        paddingHorizontal: 16,
      },
      icon: {
        marginRight: 10,
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
        backgroundColor: 'white',
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

  

  return (
    <View style={[styles.container]}>
      
        <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        >
    
      
        <View style={styles.searchBar}>
        <CustomTextInput text="Search" />
        </View>
        
        <SectionHeader title="Resources" />

        <View style={{ flex: 1 }}>
      <CategoryItem categories={data} />
       </View>
      
       <SectionHeader title="Tools" />

      <View style={{ flex: 1 }}>
      <ToolsItem categories={toolsData}  />
      </View>
      </ScrollView>
    </View>
  );
};

export default Tools;


  

