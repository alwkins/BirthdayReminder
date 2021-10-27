import React from 'react';
import { ScrollView, View } from "react-native"
import { defaultTheme } from '../defaultTheme';
import { BirthdayListItem } from "../molecules/BirthdayListItem"
import { Header } from "../molecules/Header"
import { Box } from '../styled-components/Box';
import { Text } from '../styled-components/Text';

export const BirthdaysView = () => {
  const birthdayData = [
    {
      name: "Alsion Wadkins",
      birthday: new Date("2021-10-31")
    },
    {
      name: "Wollum Wadkins",
      birthday: new Date("1992-11-26")
    },
    {
      name: "Hunter Wadkins",
      birthday: new Date("2011-12-15")
    }
  ]
  return (
    <View>
      <Header />
      <ScrollView>
        <Box
          borderBottomWidth='2px'
          borderColor={defaultTheme.color.superLightGray}
          padding='4px'>
          <Text
            color={defaultTheme.color.darkPurple}
            fontSize={defaultTheme.fontSize.m}
            fontWeight='700'>
            UPCOMING
          </Text>
        </Box>
        {birthdayData.map(
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