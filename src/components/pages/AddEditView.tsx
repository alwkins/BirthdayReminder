import React from 'react';
import { TextInput, View } from 'react-native';
import { defaultTheme } from '../defaultTheme';
import { Header } from '../molecules/Header';
import { FlexBox } from '../styled-components/Box';
import { Text } from '../styled-components/Text';

export const AddEditView = () => {
  const [text, onChangeText] = React.useState("Albert Einstein");
  const [number, onChangeNumber] = React.useState(null);
  const styles = {
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: defaultTheme.color.lightGray,
      padding: 10,
    },
  }
  return(
    <View>
      <Header />
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  )
}