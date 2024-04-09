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
import styled from "styled-components";

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
  
  const styles = StyleSheet.create({
    view1: {
      display: "flex",
      maxWidth: 318,
      flexDirection: "column",
      alignItems: "stretch",
      fontSize: 10,
      color: "#000",
      fontWeight: "700",
    },
    view2: {
      borderRadius: 9,
      boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.25)",
      backgroundColor: "#FAFCFC",
      display: "flex",
      alignItems: "stretch",
      gap: 16,
      padding: "7px 23px 7px 7px",
    },
    image1: {
      boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.25)",
      position: "relative",
      width: 93,
      flexShrink: 0,
      aspectRatio: "0.94",
    },
    view3: {
      alignSelf: "start",
      display: "flex",
      marginTop: 10,
      flexDirection: "column",
      alignItems: "stretch",
    },
    view4: { font: "14px Roboto, sans-serif " },
    view5: {
      color: "rgba(0, 0, 0, 0.50)",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "400",
      marginTop: 12,
    },
    view6: {
      alignSelf: "end",
      display: "flex",
      marginTop: 23,
      alignItems: "stretch",
      gap: 19,
    },
    view7: {
      fontFamily: "Roboto, sans-serif",
      margin: "auto 0",
    },
    image2: { position: "relative", width: 12, flexShrink: 0, aspectRatio: "1" },
    view8: {
      borderRadius: 9,
      boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.25)",
      backgroundColor: "#FAFCFC",
      display: "flex",
      marginTop: 27,
      alignItems: "stretch",
      gap: 16,
      padding: "7px 23px 7px 7px",
    },
    image3: {
      boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.25)",
      position: "relative",
      width: 93,
      flexShrink: 0,
      aspectRatio: "0.94",
    },
    view9: {
      alignSelf: "start",
      display: "flex",
      marginTop: 10,
      flexDirection: "column",
      alignItems: "stretch",
    },
    view10: {
      font: "14px Roboto, sans-serif ",
    },
    view11: {
      color: "rgba(0, 0, 0, 0.50)",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "400",
      marginTop: 12,
    },
    view12: {
      alignSelf: "end",
      display: "flex",
      marginTop: 23,
      alignItems: "stretch",
      gap: 19,
    },
    view13: {
      fontFamily: "Roboto, sans-serif",
      margin: "auto 0",
    },
    image4: { position: "relative", width: 12, flexShrink: 0, aspectRatio: "1" },
    view14: {
      borderRadius: 9,
      boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.25)",
      backgroundColor: "#FAFCFC",
      display: "flex",
      marginTop: 27,
      alignItems: "stretch",
      gap: 16,
      padding: "7px 23px 7px 7px",
    },
    image5: {
      boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.25)",
      position: "relative",
      width: 93,
      flexShrink: 0,
      aspectRatio: "0.94",
    },
    view15: {
      alignSelf: "start",
      display: "flex",
      marginTop: 10,
      flexDirection: "column",
      alignItems: "stretch",
    },
    view16: {
      font: "14px Roboto, sans-serif ",
    },
    view17: {
      color: "rgba(0, 0, 0, 0.50)",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "400",
      marginTop: 12,
    },
    view18: {
      alignSelf: "end",
      display: "flex",
      marginTop: 23,
      alignItems: "stretch",
      gap: 19,
    },
    view19: {
      fontFamily: "Roboto, sans-serif",
      margin: "auto 0",
    },
    image6: { position: "relative", width: 12, flexShrink: 0, aspectRatio: "1" },
  });
  

  
  return (
    <View style={[styles.container]}>
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/65e896d083e1e5542b543e6ff5c8c3e4f7401fbdce0d6dd67f4bc0ae1ddd5464?apiKey=31d7a20f8f074e7d99732391a216f47a&",
          }}
          style={styles.image1}
        />
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Text>Animal Scientist Discovers:</Text>
          </View>
          <View style={styles.view5}>
            <Text>
              Researchers from the University of All
              <Text /> Knowing have discovered a new way to
              <Text /> breed farm animals.
            </Text>
          </View>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Text>Thur 09 2022</Text>
            </View>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e27f47c6c14c243736ce7d6470550780004bb30221d4bd778f8b55083f2bc79?apiKey=31d7a20f8f074e7d99732391a216f47a&",
              }}
              style={styles.image2}
            />
          </View>
        </View>
      </View>
      <View style={styles.view8}>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/20b7c4dde630ac7fc7127b7b806f1eea8827b467815183a6cff73d8add379acb?apiKey=31d7a20f8f074e7d99732391a216f47a&",
          }}
          style={styles.image3}
        />
        <View style={styles.view9}>
          <View style={styles.view10}>
            <Text>Animal Scientist Discovers:</Text>
          </View>
          <View style={styles.view11}>
            <Text>
              Researchers from the University of All
              <Text /> Knowing have discovered a new way to
              <Text /> breed farm animals.
            </Text>
          </View>
          <View style={styles.view12}>
            <View style={styles.view13}>
              <Text>Thur 09 2022</Text>
            </View>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/94aaa2251f7c8ea94e74fd5e18bcfee5d56342f302b488c9e214bec73d0f296e?apiKey=31d7a20f8f074e7d99732391a216f47a&",
              }}
              style={styles.image4}
            />
          </View>
        </View>
      </View>
      <View style={styles.view14}>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/91f643bc247c42545b3dbda0dbcc7b795040be1b3d832bdfeeeef86ba93625e7?apiKey=31d7a20f8f074e7d99732391a216f47a&",
          }}
          style={styles.image5}
        />
        <View style={styles.view15}>
          <View style={styles.view16}>
            <Text>Animal Scientist Discovers:</Text>
          </View>
          <View style={styles.view17}>
            <Text>
              Researchers from the University of All
              <Text /> Knowing have discovered a new way to
              <Text /> breed farm animals.
            </Text>
          </View>
          <View style={styles.view18}>
            <View style={styles.view19}>
              <Text>Thur 09 2022</Text>
            </View>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba247c6b01fd47b8441f6f24ba6539ea92d7c5e95002073fd77c2da71a84e396?apiKey=31d7a20f8f074e7d99732391a216f47a&",
              }}
              style={styles.image6}
            />
          </View>
        </View>
      </View>
    </View>
    </View>
  );
};


export default ProductScreen;


/* font sizes */
const FontSize = {
  bodyMini_size: 12,
  buttonSmall_size: 14,
  buttonLarge_size: 18,
  headlineH2_size: 32,
  bodyDefault_size: 16,
  headlineH4_size: 24,
};
/* Colors */
const Color = {
  light60: "#fff",
  dark30: "#878c90",
  dark60: "#17181a",
  colorGray_100: "rgba(0, 0, 0, 0.1)",
  colorMediumslateblue: "#1867ff",
  dark40: "#61656a",
  colorAliceblue: "#e8edf2",
  dark50: "#3c3f42",
  light40: "#f4f6f9",
  yellow10: "#fff3d4",
  green10: "#d8f8e4",
  colorBlack: "#000",
  green60: "#23c562",
};
/* Paddings */
const Padding = {
  p_xl: 20,
  p_9xl: 28,
  p_3xs: 10,
  p_4xs: 9,
  p_5xs: 8,
  p_5xl: 24,
  p_lg: 18,
  p_base: 16,
  p_xs: 12,
};
/* border radiuses */
const Border = {
  br_13xl: 32,
  br_base: 16,
  br_15xl: 34,
  br_29xl: 48,
  br_xl: 20,
  br_81xl: 100,
  br_21xl: 40,
  br_23xl: 42,
  br_18xl: 37,
};


const styles = StyleSheet.create({
  wallet5Layout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentPosition: {
    left: 0,
    alignItems: "center",
  },
  notchIconPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  timeLightPosition: {
    display: "none",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  frameParentFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  componentPosition: {
    top: "50%",
    flexDirection: "row",
  },
  buttonIconFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.light40,
    borderRadius: Border.br_29xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonFlexBox: {
    paddingBottom: Padding.p_4xs,
    paddingTop: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xl,
    borderRadius: Border.br_15xl,
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  label1Layout: {
    lineHeight: 18,
  },
  label2Clr: {
    color: Color.dark40,
    lineHeight: 18,
  },
  seekingAlphaContainerTypo: {
    marginTop: 8,
    fontSize: FontSize.bodyMini_size,
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    width: 375,
  },
  homeIndicator1: {
    marginLeft: -39.5,
    bottom: 16,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.dark60,
    width: 80,
    height: 3,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: 34,
    width: 375,
  },
  systemFooter: {
    bottom: 0,
    alignItems: "center",
    right: 0,
    position: "absolute",
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    right: 0,
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    display: "none",
    alignItems: "center",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
  systemStatus: {
    height: 44,
    right: 0,
    overflow: "hidden",
  },
  arrowLeft: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  componentElements: {
    left: 20,
    top: "50%",
    flexDirection: "row",
    marginTop: -20,
  },
  component3: {
    marginLeft: 10,
  },
  componentElements1: {
    right: 20,
    marginTop: -20,
    top: "50%",
    position: "absolute",
  },
  label: {
    fontSize: FontSize.buttonLarge_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.dark60,
    fontWeight: "500",
  },
  componentElements2: {
    marginTop: -12,
    marginLeft: -48,
    display: "none",
    position: "absolute",
    left: "50%",
    alignItems: "center",
  },
  navigation1: {
    top: 44,
    right: "0%",
    left: "0%",
    height: 64,
    position: "absolute",
    overflow: "hidden",
  },
  navigation: {
    height: 108,
    width: 375,
  },
  label1: {
    color: Color.light60,
    fontSize: FontSize.buttonSmall_size,
    textAlign: "center",
    fontWeight: "500",
  },
  buttonLabel: {
    backgroundColor: Color.dark50,
  },
  label2: {
    fontSize: FontSize.buttonSmall_size,
    textAlign: "center",
    fontWeight: "500",
  },
  buttonLabel1: {
    borderStyle: "solid",
    borderColor: Color.colorAliceblue,
    borderWidth: 1,
    marginLeft: 12,
  },
  segmented: {
    top: 116,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  marathonDigitalReports: {
    textAlign: "left",
    alignSelf: "stretch",
    lineHeight: 18,
    fontSize: FontSize.buttonSmall_size,
    color: Color.dark60,
    fontWeight: "500",
  },
  marathonDigitalsNasdaqmar: {
    alignSelf: "stretch",
    color: Color.dark40,
    lineHeight: 18,
  },
  seekingAlpha1: {
    color: Color.colorMediumslateblue,
  },
  text: {
    color: Color.dark60,
  },
  seekingAlpha: {
    lineHeight: 16,
    fontWeight: "500",
  },
  marathonDigitalReportsBitcoParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  imageIcon: {
    borderRadius: Border.br_base,
    width: 120,
    height: 100,
    marginLeft: 8,
    overflow: "hidden",
  },
  dividerIcon: {
    width: 335,
    height: 1,
    marginTop: 24,
  },
  frameContainer: {
    marginTop: 24,
  },
  frameParent: {
    top: 180,
    alignItems: "center",
    left: 0,
  },
  wallet5: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.light60,
    height: 807,
    overflow: "hidden",
    flex: 1,
  },
});
