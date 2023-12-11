import { View, Text,Button } from 'react-native'
import React from 'react'
import HeaderSocata from '../../src/components/socataMainPage/HeaderSocata'
import ListSocata from '../../src/components/socataMainPage/ListSocata'
import { Stack } from 'expo-router';
import { StyleSheet } from "react-native";

export default function socata() {
  return (
    <View style={styles.container}>
            <Stack.Screen
        options={{
          headerTitle: () => <Text>SÓCATA</Text>,
          headerRight: () => <HeaderSocata></HeaderSocata>,
        }}
      />
      <ListSocata></ListSocata>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#f2f2f2',
  },
})