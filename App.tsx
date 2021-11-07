import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { BirthdaysNavContainer } from './src/components/pages/BirthdaysView';
import { AddEditNavContainer } from './src/components/pages/AddEditView';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Birthdays: undefined;
  AddEdit: undefined;
}

export const RootStackScreens = () => {

  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Birthdays"
          component={BirthdaysNavContainer} />
        <RootStack.Screen name="AddEdit" component={AddEditNavContainer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {

  return (
    RootStackScreens()
  );
};

export default App;
