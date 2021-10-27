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
import WheelPicker from '../atoms/WheelPicker';

export const AddEditView = () => {
  const [text, onChangeText] = React.useState("Albert Einstein");
  const [number, onChangeNumber] = React.useState(null);
    const marginLeft = wp('3.5%')
    const styles = {
    input: {
      height: 40,
      margin: marginLeft,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: defaultTheme.color.lightGray,
      padding: 10,
    },
  }
  const [selectedItem, setSelectedItem ] = useState(2);
  const [itemList , setItemList ] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const sectionLabel = (labelText: string, labelColor: string) => (
    <Box marginLeft={marginLeft}>
      <Text fontFamily={defaultTheme.fontFamily.roboto}
        color={labelColor}
        fontSize={defaultTheme.fontSize.label}
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
      <WheelPicker />
    </View>
  )
}