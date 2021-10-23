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
import { AddEditView } from './src/components/pages/AddEditView';
import { BirthdaysView } from './src/components/pages/BirthdaysView';

const App = () => {

  return (
    <AddEditView />
  );
};

export default App;
