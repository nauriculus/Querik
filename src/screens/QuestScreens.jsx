import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import CategoryHeader from '../Components/CategoryHeaderComponent/CategoryHeader';
import { useNavigation } from '@react-navigation/native';
import Products from '../../assets/Datas/Products';
import ProductCard from '../Components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToRecentlyViewed } from '../../assets/Redux/Actions/RecentlyViewedAction';
import { addToQuestList } from '../../assets/Redux/Actions/QuestList';

const QuestScreens = () => {
  const navigation = useNavigation();
  const questList = useSelector((state) => state.questlist);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View>
        <CategoryHeader
          title="Quests"
        />
      </View>

      {/* Products of Category Flowers */}
      <View>
        <FlatList
          data={Products}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <>
                {item.category === 'Quest' ? (
                  <ProductCard
                    item={item}
                    onPress={() => {
                      dispatch(addToRecentlyViewed(item));
                      navigation.navigate('ProductScreen', { Product: item });
                    }}
                    //isWishList={wishlist.includes(item)}
                    onQuestList={() => dispatch(addToQuestList(item))}
                  />
                ) : null}
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default QuestScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: 20,
  },
});
