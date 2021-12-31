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
import { RootStackParamList } from '../../../App';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import DataStorageStore from '../../store/dataStorageStore';
import Toast from 'react-native-simple-toast';
import DropDownPicker from 'react-native-dropdown-picker';

const options = [
  { value: 0, label: 'Jan' },
  { value: 1, label: 'Feb' }
];

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
  const [text, setText] = React.useState(contactEditing);
  const [month, setMonth] = React.useState(null);
  const dataStore = DataStorageStore.getInstance();
  const marginLeft = wp('3.5%')
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

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
    if (text) {
      dataStore.addBirthday({ name: text, birthday: new Date })
      Toast.show('Birthday Saved', Toast.SHORT);
    }
    if (navigation) {
      navigation.push('Birthdays')
    }
  }
  const handleMonthChange = (selectedOption) => {
    console.log(selectedOption);
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
        onChangeText={setText}
        value={text} />
      {sectionLabel("Birthday", defaultTheme.color.royalBlue)}
      <FlexBox flexDirection='row'>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </FlexBox>
    </View>
  )
}