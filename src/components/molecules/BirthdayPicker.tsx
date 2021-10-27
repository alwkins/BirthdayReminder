import React, { useState } from 'react';

import Picker from '@gregfrench/react-native-wheel-picker'
import { FlexBox } from '../styled-components/Box';
import { View } from 'react-native';
var PickerItem = Picker.Item;

export interface BirthdayPickerProps {
  initialItems: Array<string>;
}

export const BirthdayPicker = (props: BirthdayPickerProps) => {
  const { initialItems } = props;
  const [selectedItem, setSelectedItem] = useState(5); // Start on June
  const [itemList, setItemList] = useState(initialItems);

  return (
    <FlexBox flexDirection='row'>
      <View>
        <Picker
          style={{ width: 150, height: 180 }}
          lineColor="#000000" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedItem}
          itemStyle={{ color: 'black', fontSize: 26 }}
          onValueChange={(index) => setSelectedItem(index)}>
          {itemList.map((value, i) => (
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
          selectedValue={selectedItem}
          itemStyle={{ color: 'black', fontSize: 26 }}
          onValueChange={(index) => setSelectedItem(index)}>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i} />
          ))}
        </Picker>
      </View>
    </FlexBox>
  );
};