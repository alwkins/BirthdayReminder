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

export type RootStackParamList = {
  Birthdays: BirthdaysViewProps;
  AddEdit: AddEditViewProps;
}

export const RootStackScreens = () => {

  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Birthdays" component={BirthdaysNavContainer} initialParams={{birthdays: testBirthdayData}} />
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
