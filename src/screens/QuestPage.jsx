import { StyleSheet, Text, View, Dimensions, StatusBar, Image } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import Lottie from 'lottie-react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const QuestPage =({ route })=> {
  const item = route.params;
  console.log(item);

  const navigation = useNavigation();
  const [fonts] = useFonts({
    Inter: require('../../assets/fonts/Inter-Black.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden={false} />
   
      <Image
      
              source={item.imagePageOne}
            
              style={styles.image}
            />
     
      <View style={styles.textContainer}>
        <Text style={styles.text}>Querrio</Text>
        <Text style={styles.text2}> Your gateway to exploring the Solana ecosystem and gathering insights.</Text>
      </View>
      
      <CustomButton
        text="Get Started"
        onPress={() => navigation.navigate('Start')}
      />
    </View>
  );
};

export default QuestPage;

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
    width: 180,
    height: 180,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  NameSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 20,
    marginRight: 15,
  },
  NameSection: {
    flexDirection: 'row',
    width: 130,
    gap: 5,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter',
    fontSize: 18,
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
    marginLeft: 20,
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
