import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../../assets/Theme/colors';
import AnimatedText from '../Components/AnimatedText/AnimatedText';
import { useFonts } from 'expo-font';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { Keypair } from '@solana/web3.js';

import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const WALLET_STORAGE_KEY = 'walletSecretKey';

const saveWalletSecretKey = async (wallet) => {
  try {
    await AsyncStorage.setItem(WALLET_STORAGE_KEY, wallet.secretKey.toString());
    console.log('Wallet secret key saved.');
  } catch (error) {
    console.error('Error saving secret key:', error);
  }
};

const loadWalletSecretKey = async () => {
  try {
    const secretKeyString = await AsyncStorage.getItem(WALLET_STORAGE_KEY);
    if (secretKeyString) {
      const secretKey = new Uint8Array(secretKeyString.split(',').map(Number));

      const wallet = Keypair.fromSecretKey(secretKey);
      console.log('Wallet secret key loaded:', wallet.publicKey);
      
      return wallet;
    } else {
      const wallet = Keypair.generate(); // Generate a new wallet
      saveWalletSecretKey(wallet); // Save the secret key
      console.log('New wallet generated and saved:', wallet.publicKey);

      
      return wallet;
    }
  } catch (error) {
    console.error('Error loading secret key:', error);
    return null;
  }
};

const CreateAccontScreen = () => {
  const [agree, setAgree] = useState(true);
  const [wallet, setWallet] = useState("");
  const navigation = useNavigation();
  const [fonts] = useFonts({
    AlluraRegular: require('../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../assets/fonts/Inter-Medium.ttf'),
  });
  if (!fonts) {
    return null;
  }

  loadWalletSecretKey();
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


      <View style={styles.container}>

    
        <View style={styles.animTextContainer}>
       

        </View>

      

        <Text style={styles.text}>Getting Started</Text>
        <CustomTextInput text="Username"/>
        <View style={styles.agreeContainer}>
          <TouchableOpacity
            onPress={() => setAgree(!agree)}
            style={[styles.agreeCircle, { opacity: agree ? 1 : 0.5 }]}
          >
            {agree ? (
              <Ionicons name="checkmark-sharp" size={14} color={colors.white} />
            ) : null}
          </TouchableOpacity>

          <Text style={styles.agreeText}>I agree to </Text>
          <Text style={[styles.agreeText, { textDecorationLine: 'underline' }]}>
            Terms and Conditions
          </Text>
        </View>
        <View style={styles.button}>
          <CustomButton
            text="Sign Up"
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        
      
      </View>

      
    </TouchableWithoutFeedback>
  );
};

export default CreateAccontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 35,
  },
  animTextContainer: {
    marginTop: SCREEN_HEIGHT * 0.1,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 18,
    color: colors.black,
    marginTop: SCREEN_HEIGHT * 0.04,
    fontWeight: '600',
    marginBottom: SCREEN_HEIGHT * 0.03,
  },
  agreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.01,
  },
  agreeCircle: {
    width: 20,
    height: 20,
    backgroundColor: colors.pink,
    borderRadius: 10,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agreeText: {
    fontFamily: 'InterLight',
    fontWeight: '600',
    color: colors.black,
  },
  button: {
    marginTop: SCREEN_HEIGHT * 0.03,
    alignItems: 'center',
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.03,
    marginLeft: 35,
  },
  accountText: {
    fontFamily: 'InterLight',
  },
});
