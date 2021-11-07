import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, View } from "react-native"
import { defaultTheme } from '../defaultTheme';
import { BirthdayListItem } from "../molecules/BirthdayListItem"
import { Header } from "../molecules/Header"
import { Box } from '../styled-components/Box';
import { Text } from '../styled-components/Text';
import { RootStackParamList } from '../../../App';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { birthdayEntry } from '../util';

export const BirthdaysNavContainer = (props: NativeStackScreenProps<RootStackParamList, 'Birthdays'>) => {
  const { navigation, route } = props;
  return (
    <BirthdaysView {...route.params} navigation={navigation} />
  )
}

export interface BirthdaysViewProps {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Birthdays'>;
  birthdays: Array<birthdayEntry>;
}
export const BirthdaysView = (props: BirthdaysViewProps) => {
  const { navigation, birthdays } = props;
  const navToAdd = () => {
    if (navigation) { navigation.push('AddEdit') }
  }
  return (
    <View>
      <Header onRightPress={navToAdd} leftIcon='cog' rightIcon='plus' />
      <ScrollView>
        <Box
          borderBottomWidth={hp('1.2%')}
          borderColor={defaultTheme.color.superLightGray}
          marginTop={'8px'}
          marginLeft={'6px'} >
          <Text
            color={defaultTheme.color.darkPurple}
            fontSize={defaultTheme.fontSize.m}
            fontWeight='700'>
            UPCOMING
          </Text>
        </Box>
        {birthdays.map(
          (data, index) => (
            <BirthdayListItem
              name={data.name}
              birthday={data.birthday} 
              key={index} />
          )
        )}
      </ScrollView>
    </View>
  )
}