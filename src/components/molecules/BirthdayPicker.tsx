import React, { useState } from 'react';

import Picker from '@gregfrench/react-native-wheel-picker'
import { FlexBox } from '../styled-components/Box';
import { View } from 'react-native';
import { DAYS_PER_MONTH, MONTHS_SHORT } from '../util';
var PickerItem = Picker.Item;

export interface BirthdayPickerProps {
}

export const BirthdayPicker = (props: BirthdayPickerProps) => {
  const [selectedMonth, setSelectedMonth] = useState(5); // Start on June
  const [monthList, setMonthList] = useState(MONTHS_SHORT);
  const [selectedDay, setSelectedDay] = useState(14); // Start on day 15
  const [dayList, setDayList] = useState(DAYS_PER_MONTH.map((e) => e.toString()));
  const onMonthChange = (index) => {
    setSelectedMonth(index);
    const newNumDays = DAYS_PER_MONTH[index];
    const newDayList = [ ...Array(newNumDays).keys() ].map( i => i+1);
    setDayList(newDayList.map((e) => e.toString()));
    if ((newNumDays - 1) < selectedDay) {
      // If month was changed and selected day no longer exists, go to largest day
      // e.g. Mar has 31 days, going to Apr should select 30 when 31 disappears
      setSelectedDay(newNumDays - 1)
      console.log(newNumDays)
    }
  };
  return (
    <FlexBox flexDirection='row'>
      <View>
        <Picker
          style={{ width: 150, height: 180 }}
          lineColor="#000000" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedMonth}
          itemStyle={{ color: 'black', fontSize: 26 }}
          onValueChange={onMonthChange}>
          {monthList.map((value, i) => (
            <PickerItem label={value} value={i} key={i} />
          ))}
        </Picker>
      </View>
      <View>
        <Picker
          style={{ width: 150, height: 180 }}
          lineColor="#000000" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedDay}
          itemStyle={{ color: 'black', fontSize: 26 }}
          onValueChange={(index) => setSelectedDay(index)}>
          {dayList.map((value, i) => (
            <PickerItem label={value} value={i} key={i} />
          ))}
        </Picker>
      </View>
    </FlexBox>
  );
};