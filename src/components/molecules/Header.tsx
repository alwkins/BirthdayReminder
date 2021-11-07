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
  leftIcon?: iconNames;
  rightIcon?: iconNames;
}

export type iconNames = 'cog'| 'plus'| 'chevron-left';

export const Header = (props: HeaderProps) => {
  const { onRightPress, onLeftPress, leftIcon, rightIcon } = props;
  const sideMarginWidth = wp('3.4%')
  const bottomGap = hp('2%')
  return (
    <FlexBox
      paddingTop={hp('2.7%')}
      flexDirection='row'
      alignItems='flex-end'
      backgroundColor={defaultTheme.color.teal}
      height={hp('11.5%')}>
      <FlexBox width={wp('100%')} alignItems='center' paddingBottom={bottomGap}>
        <Text
          fontFamily={defaultTheme.fontFamily.roboto}
          fontSize={defaultTheme.fontSize.title}
          fontWeight='400'
          color={defaultTheme.color.white}>Birthdays</Text>
      </FlexBox>
      <Box position={'absolute'} left={sideMarginWidth} bottom={bottomGap}>
        {leftIcon ?
          (<TouchableOpacity activeOpacity={0.5} onPress={onLeftPress}>
            <MaterialCommunityIcon
              name={leftIcon}
              size={27}
              color={defaultTheme.color.white} />
          </TouchableOpacity>)
          : null}
      </Box>
      <Box position={'absolute'} right={sideMarginWidth} bottom={bottomGap}>
        {rightIcon ?
          (<TouchableOpacity activeOpacity={0.5} onPress={onRightPress}>
            <MaterialCommunityIcon
              name={rightIcon}
              size={27}
              color={defaultTheme.color.white} />
          </TouchableOpacity>)
          : null}
      </Box>
    </FlexBox>
  )
}