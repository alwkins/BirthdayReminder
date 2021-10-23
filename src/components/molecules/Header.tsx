import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { defaultTheme } from '../defaultTheme';
import { FlexBox, Box } from '../styled-components/Box';
import { MaterialCommunityIcon } from '../icons/materialCommunityIcon';
import { Text } from '../styled-components/Text';

export const Header = () => {
  // TODO Find a more robust way to space items out on bar
  return (
    <FlexBox
      paddingTop={hp('2.7%')}
      flexDirection='row'
      alignItems='center'
      backgroundColor={defaultTheme.color.teal}
      height={hp('11.5%')}>
      <Box marginLeft={wp('3.4%')}>
        <MaterialCommunityIcon
          name={'cog'} size={27}
          color={defaultTheme.color.white} />
      </Box>
      <Box marginLeft={wp('25%')}>
        <Text
          fontFamily={defaultTheme.fontFamily.roboto}
          fontSize={defaultTheme.fontSize.title}
          fontWeight='400'
          color={defaultTheme.color.white}>Birthdays</Text>
      </Box>
      <Box marginLeft={wp('25%')}>
        <MaterialCommunityIcon name={'plus'} size={27} color={defaultTheme.color.white} />
      </Box>
    </FlexBox>
  )
}