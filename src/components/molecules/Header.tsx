import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { defaultTheme } from '../defaultTheme';
import { FlexBox, Box } from '../styled-components/Box';
import { MaterialCommunityIcon } from '../icons/materialCommunityIcon';
import { Text } from '../styled-components/Text';
import { TouchableOpacity } from 'react-native';

export interface HeaderProps {
  onRightPress?: () => void;
  onLeftPress?: () => void;
}

export const Header = (props: HeaderProps) => {
  const { onRightPress, onLeftPress } = props;
  const sideMarginWidth = wp('3.4%')
  const bottomGap = hp('2%')
  return (
    <FlexBox
      paddingTop={hp('2.7%')}
      flexDirection='row'
      alignItems='flex-end'
      backgroundColor={defaultTheme.color.teal}
      height={hp('11.5%')}>
      <FlexBox backgroundColor={'pink'} width={wp('100%')} alignItems='center' paddingBottom={bottomGap}>
        <Text
          fontFamily={defaultTheme.fontFamily.roboto}
          fontSize={defaultTheme.fontSize.title}
          fontWeight='400'
          color={defaultTheme.color.white}>Birthdays</Text>
      </FlexBox>
      <Box backgroundColor={'blue'} position={'absolute'} left={sideMarginWidth} bottom={bottomGap}>
        <MaterialCommunityIcon
          onPress={onLeftPress}
          name={'cog'}
          size={27}
          color={defaultTheme.color.white} />
      </Box>
      <Box position={'absolute'} right={sideMarginWidth} bottom={bottomGap}>
        <MaterialCommunityIcon
          onPress={onRightPress}
          name={'plus'}
          size={27}
          color={defaultTheme.color.white} />
      </Box>
    </FlexBox>
  )
}