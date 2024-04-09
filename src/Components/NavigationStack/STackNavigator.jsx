import { View, Text } from 'react-native';
import React from 'react';
import OnBoardSCreen from '../../screens/OnBoardSCreen';
import CreateAccontScreen from '../../screens/CreateAccontScreen';
import HomeScreen from '../../screens/HomeScreen';
import Analytics from '../../screens/Analytics';
import QuestScreens from '../../screens/QuestScreens';
import ProductScreen from '../../screens/ProductScreen';
import ProjectCatalog from '../../screens/ProjectCatalog';
import Tools from '../../screens/Tools';
import ProfilePageScreen from '../../screens/ProfilePageScreen';
import QuestPage from '../../screens/QuestPage';
import TabNav from '../../screens/TabNav';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const STackNavigator = () => {
  const Stack = createSharedElementStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tabs">
       

      <Stack.Screen name="Onboard" component={OnBoardSCreen} />
      <Stack.Screen name="Catalog" component={ProjectCatalog} />
      <Stack.Screen name="Start" component={CreateAccontScreen} />

      <Stack.Screen name="ProfilePageScreen" component={ProfilePageScreen} />
      <Stack.Screen name="Analytics" component={HomeScreen} />
      <Stack.Screen name="Home" component={Analytics} />
      <Stack.Screen name="Tools" component={Tools} />
      <Stack.Screen
        name="QuestScreens"
        component={QuestScreens}
      />

      <Stack.Screen name="QuestPage" component={QuestPage}/>

      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="Tabs" component={TabNav} />
    
      </Stack.Navigator>
  );
};

export default STackNavigator;
