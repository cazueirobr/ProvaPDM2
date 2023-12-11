import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { useActionSheet } from '@expo/react-native-action-sheet';
import { router } from 'expo-router';

export default function HeaderSocata() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ['Sobre', 'Logout'];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex
    }, (selectedIndex?: number) => {
      switch (selectedIndex) {
        case 0:
          // Save
          router.push('/login/sobre')
          break;

        case destructiveButtonIndex:
          router.replace('/');
          break;

        case cancelButtonIndex:
          // Canceled
      }});
  }
  return (
    <View>
      <Feather onPress={onPress} name="menu" size={24} color="black" />
    </View>
  )
}