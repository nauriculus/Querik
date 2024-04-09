import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { addToQuestList } from '../../../assets/Redux/Actions/QuestList';

const RecentlyViewedCard = ({ isWishList, onWishList, setIsWishList }) => {
  const recentlyViewed = useSelector((state) => state.recent);
  const questlist = useSelector((state) => state.questlist);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <>
      {recentlyViewed.length > 0 ? (
        <FlatList
          data={recentlyViewed}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={({ item }) => {
            return (
              <ProductCard
                item={item}
                onPress={() => {
                  navigation.navigate('ProductScreen', { Product: item });
                }}
        
                onWishList={() => {
                  dispatch(addToQuestList(item));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 20,
          }}
        >
          <View style={{ width: 200, height: 200, marginBottom: 10 }}>
            <Lottie
              source={require('../../../assets/animations/NotFound.json')}
              autoPlay
              loop
            />
          </View>
          <Text style={{ fontFamily: 'Inter', fontSize: 20 }}>
            No Recently Viewed Quests
          </Text>
        </View>
      )}
    </>
  );
};

export default RecentlyViewedCard;
