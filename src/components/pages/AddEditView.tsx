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
import { MONTHS_SHORT, DAYS_PER_MONTH } from '../util';
import { BirthdayPicker } from '../molecules/BirthdayPicker';
import { RootStackParamList } from '../../../App';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';


export const AddEditNavContainer = (props: NativeStackScreenProps<RootStackParamList, 'Birthdays'>) => {
  const { navigation, route } = props;
    return (
      <AddEditView {...route.params} navigation={navigation} />
    )
  }

export const AddEditView = () => {
  const [text, onChangeText] = React.useState("Albert Einstein");
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
      <Header />
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