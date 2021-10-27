import React, { useState } from 'react';
import { View } from 'react-native';

import Picker from '@gregfrench/react-native-wheel-picker'
var PickerItem = Picker.Item;

export interface WheelPickerProps {
  initialItems: Array<string>;
}

const WheelPicker = (props: WheelPickerProps) => {
  const { initialItems } = props;
  const [selectedItem, setSelectedItem ] = useState(5); // Start on June
  const [itemList , setItemList ] = useState(initialItems);

  return (
    <View>
      <Picker
        style={{width: 150, height: 180}}
        lineColor="#000000" //to set top and bottom line color (Without gradients)
        lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
        lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
        selectedValue={selectedItem}
        itemStyle={{color:'black', fontSize:26}}
        onValueChange={(index) => setSelectedItem(index) }>
        {itemList.map((value, i) => (
          <PickerItem label={value} value={i} key={i}/>
        ))}
      </Picker>
    </View>
  );
};

export default WheelPicker;