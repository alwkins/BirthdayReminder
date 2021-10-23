import React from 'react';
import { TextInput, View } from 'react-native';
import { Header } from '../molecules/Header';
import { FlexBox } from '../styled-components/Box';
import { Text } from '../styled-components/Text';

export const AddEditView = () => {
  return(
    <View>
      <Header />
      <TextInput />
    </View>
  )
}