import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import Analytics from '../screens/Analytics';
import colors from '../../assets/Theme/colors';
import Tools from '../screens/Tools';
import { useFonts } from 'expo-font';

const TabNav = () => {
  
  const [fonts] = useFonts({
    Inter: require('../../assets/fonts/Inter-Black.ttf'),
  });
  if (!fonts) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 75,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={24}
                color={focused ? colors.pink : colors.grey}
              />
            );
          },
        }}
      />

<Tab.Screen
        name="Tools"
        component={Tools}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="grid"
                size={24}
                color={focused ? colors.pink : colors.grey}
              />
            );
          },
        }}
      />
  
  <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="laptop"
                size={24}
                color={focused ? colors.pink : colors.grey}
              />
            );
          },
        }}
      />
  
    
    
    </Tab.Navigator>
  );
};

export default TabNav;