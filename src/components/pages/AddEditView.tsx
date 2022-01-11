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

const monthOptions = MONTHS_SHORT.map(
  (month, index) => {
    return({label: month, value: index})
  }
)

const newNumDays = 31 //TODO Use DAYS_PER_MONTH[index] to dynamically change list size
const arrayOfDays = [...Array(newNumDays).keys()].map(i => i + 1);
const dayOptions = arrayOfDays.map(
  (day, index) => {
    return ({ label: day, value: index })
  }
)

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
  const dataStore = DataStorageStore.getInstance();
  const marginLeft = wp('3.5%')
  const [monthOpen, setMonthOpen] = useState(false);
  const [monthValue, setMonthValue] = useState(0);
  const [monthItems, setMonthItems] = useState(monthOptions);
  const [dayOpen, setDayOpen] = useState(false);
  const [dayValue, setDayValue] = useState(0);
  const [dayItems, setDayItems] = useState(dayOptions);

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
      let dateSelected = new Date;
      dateSelected.setMonth(monthValue, (dayValue + 1));
      dataStore.addBirthday({
        name: text,
        birthday: {
          month: (monthValue + 1),
          day: (dayValue + 1),
        }
      })
      Toast.show('Birthday Saved', Toast.SHORT);
      console.log(dateSelected.toString())
    }
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
      <FlexBox
        flexDirection='column'
        marginTop={hp('1.7%')}>
        <Box height={hp('1.7%')}></Box>
        {sectionLabel("Name", defaultTheme.color.plantGreen)}
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text} />
      </FlexBox>
      {sectionLabel("Birthday", defaultTheme.color.royalBlue)}
      <FlexBox 
        flexDirection='row'
        marginLeft={wp('4%')}>
        <DropDownPicker
          open={monthOpen}
          value={monthValue}
          items={monthItems}
          setOpen={setMonthOpen}
          setValue={setMonthValue}
          setItems={setMonthItems}
          containerStyle={{ width: wp('30%'), paddingTop: hp('1.5%') , paddingRight: wp('3%') }}
        />
        <DropDownPicker
          open={dayOpen}
          value={dayValue}
          items={dayItems}
          setOpen={setDayOpen}
          setValue={setDayValue}
          setItems={setDayItems}
          containerStyle={{ width: wp('28%'), paddingTop: hp('1.5%') }}
        />
      </FlexBox>
    </View>
  )
}