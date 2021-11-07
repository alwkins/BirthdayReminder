import React, {useState} from 'react';
import { TextInput, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { defaultTheme } from '../defaultTheme';
import { Header } from '../molecules/Header';
import { Box, FlexBox } from '../styled-components/Box';
import { Text } from '../styled-components/Text';
import { MONTHS_SHORT, DAYS_PER_MONTH, testBirthdayData } from '../util';
import { BirthdayPicker } from '../molecules/BirthdayPicker';
import { RootStackParamList } from '../../../App';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import DataStorageStore from '../../store/dataStorageStore';

export const AddEditNavContainer = (props: NativeStackScreenProps<RootStackParamList, 'AddEdit'>) => {
  const { navigation, route } = props;
  return (
    <AddEditView {...route.params} navigation={navigation} />
  )
}

export interface AddEditViewProps {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'AddEdit'>
  contactEditing?: string;
}

export const AddEditView = (props: AddEditViewProps) => {
  const { navigation, contactEditing } = props;
  const [text, onChangeText] = React.useState(contactEditing);
  const dataStore = DataStorageStore.getInstance();
  const marginLeft = wp('3.5%')
  const styles = { // TODO Make font medium-large
    input: {
      height: 40,
      margin: marginLeft,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: defaultTheme.color.lightGray,
      padding: 10,
    },
  }
  const navBack = () => {
    dataStore.addBirthday({name: text, birthday: new Date})
    // TODO Add toast to say saved
    if (navigation) {
      navigation.push('Birthdays')
    }
  }
  const sectionLabel = (labelText: string, labelColor: string) => (
    <Box marginLeft={marginLeft}>
      <Text fontFamily={defaultTheme.fontFamily.roboto}
        color={labelColor}
        fontSize={defaultTheme.fontSize.mlg}
        fontWeight='600'>
        {labelText}
      </Text>
    </Box>
  )
  return (
    <View>
      <Header text="Add Birthday" onRightPress={navBack} onLeftPress={navBack} leftIcon='chevron-left' />
      <Box height={hp('1.7%')}></Box>
      {sectionLabel("Name", defaultTheme.color.plantGreen)}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text} />
      {sectionLabel("Birthday", defaultTheme.color.royalBlue)}
      <FlexBox flexDirection='row'>
        <BirthdayPicker />
      </FlexBox>
    </View>
  )
}