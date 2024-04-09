import 'react-native-get-random-values';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import Lottie from 'lottie-react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const OnBoardSCreen = () => {
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
      <View style={styles.animContainer}>
        
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Shipooor</Text>
        <Text style={styles.text2}> Your gateway to exploring the Solana ecosystem and gathering insights.</Text>
      </View>
      <CustomButton
        text="Get Started"
        onPress={() => navigation.navigate('Start')}
      />
    </View>
  );
};

export default OnBoardSCreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animContainer: {
    height: 300,
    width: 400,
    marginTop: height * 0.0009,
  },
  textContainer: {
    width: 300,
    marginTop: height * 0.04,
    marginBottom: height * 0.04,
  },
  text: {
    fontSize: 28,
    color: colors.black,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  text2: {
    marginTop: 10,
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
  },
});
