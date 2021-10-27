import React from 'react';
import { defaultTheme } from '../defaultTheme';
import { Box, FlexBox } from '../styled-components/Box';
import { Text } from '../styled-components/Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export interface BirthdayListItemProps {
  name: string;
  birthday: Date;
}

export const BirthdayListItem = (props: BirthdayListItemProps) => {
  const { name, birthday } = props;
  const today = new Date();
  // TODO Write unit test
  // TODO Add floor if want whole days
  const birthdayThisYear = birthday.setFullYear(today.getFullYear());
  const daysUntil = (birthdayThisYear.valueOf() - today.valueOf()) / 3600000 / 24; // valueOf() returns ms, convert to days
  const edgeMargin = wp('0.3%')
  const sideBoxWidth = wp('17%')
  const middleBoxWidth = wp('100%') - 2 * sideBoxWidth
  return (
    <FlexBox
      flexDirection='row'
      borderBottomWidth='2px'
      borderColor={defaultTheme.color.superLightGray}>

      {/* Left: Birthday Date */}
      <FlexBox
        flexDirection='column'
        alignItems='center'
        width={sideBoxWidth}
        marginTop='3px'>
        <Text
          fontFamily={defaultTheme.fontFamily.openSans}
          color={defaultTheme.color.teal}
          fontSize={defaultTheme.fontSize.sm}>
          {birthday.toLocaleString('default', { month: 'short' }).toUpperCase()}
        </Text>
        <Text
          fontFamily={defaultTheme.fontFamily.openSans}
          color={defaultTheme.color.teal}
          fontSize={defaultTheme.fontSize.lg}
          fontWeight='800'>{birthday.getUTCDate()}
        </Text>
      </FlexBox>

      {/* Center: Name */}
      <FlexBox
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        width={middleBoxWidth}>
        <Text
          fontSize={defaultTheme.fontSize.m}
          color={defaultTheme.color.darkGray}>
          {name}
      </Text>
      </FlexBox>

      {/* Right: Days Until */}
      <FlexBox
        flexDirection='column'
        alignItems='center'
        width={sideBoxWidth}
        position='absolute'
        right={edgeMargin}>
        <Text
          fontFamily={defaultTheme.fontFamily.openSans}
          color={defaultTheme.color.lightGray}
          fontSize={defaultTheme.fontSize.lg}
          fontWeight='800'>
            {daysUntil.toFixed(1)}
          </Text>
        <Text
          fontFamily={defaultTheme.fontFamily.openSans}
          color={defaultTheme.color.lightGray}
          fontSize={defaultTheme.fontSize.sm}>
          DAYS
          </Text>
      </FlexBox>
      
    </FlexBox>
  );
}