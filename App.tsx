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
import { BirthdaysView } from './src/components/pages/BirthdaysView';

const App = () => {

  return (
    <BirthdaysView />
  );
};

export default App;
