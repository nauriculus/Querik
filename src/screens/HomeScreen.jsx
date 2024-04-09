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
    { id: 1, uri: "https://cms.stakingrewards.com/wp-content/uploads/2019/05/staking_facilities-e1566399146836.png", text: "Staking Facilities", description: `At Staking Facilities, we dream of a digital realm powered by native, neutral property rights systems. These systems create opportunities for novel collaborations, smart capital allocation, and unique value creation avenues to combat global challenges. We foresee:

A world where anyone with electricity and a smartphone becomes a part of the global economy
    ‍
A landscape offering equitable opportunities, resisting the hijack attempts of rogue entities
    
A preference for stakeholders' well-being over mere shareholder profits, emphasizing a triple bottom line over unchecked growth
We firmly believe this world stands on the pillars of web3, with blockchain technology at its core.` },
    { id: 2, uri: "https://de.superteam.fun/st-flag-logo.png", text: "Superteam Germany" },
    { id: 3, uri: "https://cdn.discordapp.com/attachments/1161769361334341664/1226921744820862996/blocksmithlabs.png?ex=662686eb&is=661411eb&hm=bbef1b5b57130145f80d46da38d272b711bfe3e8fd8f18b892d0cc03b7a85a76&", text: "Blocksmith Labs" },
    { id: 4, uri: "https://www.civic.com/wp-content/uploads/2022/06/cropped-favicon-512-192x192.png", text: "Civic Pass" },
    { id: 5, uri: "https://assets.coingecko.com/coins/images/34594/large/saros-token-logo.png?1705476813", text: "Saros Finance", description: `Backed by the likes of Solana Ventures and Alameda Research, Saros Finance is a trail-blazing DeFi protocol built on the Solana blockchain. Users gain access to the protocol's 3 major products: SarosFarm, SarosStake, and SarosSwap. Each of the products as mentioned earlier were for automated market making, staking, and swapping respectively. It also has a tool called SarosSnapshot that traders can use to track competition.` },,
  ];

  const CategoryItem = ({ categories }) => {
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
   
    navigation.navigate('ProductScreen', {
      Product: category,
    });
  };


  return (
    <View style={[styles.container]}>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View style={styles.searchBar}>
        </View>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('QuestScreens')}>
            <View style={styles.category}>
            <Octicons name="log" size={34} color={colors.pink} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Text style={styles.categoryText}>Quests</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfilePageScreen')}
          >

            <View style={styles.category}>
              <Octicons name="person" size={34} color={colors.pink} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Text style={styles.categoryText}>Account</Text>
            </View>
            
          </TouchableOpacity>
         
        </View>
        {/*  Offer Section Header */}
        <SectionHeader title="Offers" />
        {/* OfferCard */}
        <View>
          <FlatList
            data={offers}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <OfferCard item={item} />;
            }}
          />
        </View>

        <SectionHeader title="Forums" />

        <View>
          <FlatList
            data={ForumItems}
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

        <SectionHeader title="Popular" />

        <View style={{ flex: 1 }}>
      <CategoryItem categories={data}/>
    </View>
  
      
      </ScrollView>
    </View>
  );
};

export default HomeScreen;


const stylesProjects = StyleSheet.create({
  container: {
    marginTop: 12,
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
