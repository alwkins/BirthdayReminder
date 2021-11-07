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
import { BirthdaysNavContainer, BirthdaysViewProps } from './src/components/pages/BirthdaysView';
import { AddEditNavContainer, AddEditViewProps } from './src/components/pages/AddEditView';
import { NavigationContainer } from '@react-navigation/native';
import { birthdayEntry, testBirthdayData } from './src/components/util';
import DataStorageStore from './src/store/dataStorageStore';

export type RootStackParamList = {
  Birthdays: BirthdaysViewProps;
  AddEdit: AddEditViewProps;
}

export const RootStackScreens = () => {
  // Initialize data storage store
  DataStorageStore.getInstance().loadBirthdays();

  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Birthdays" component={BirthdaysNavContainer} />
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
