import React from 'react';
import { View, Text } from 'react-native';
import Infos from '../../src/components/info/InfoComponent';
import HeaderSocata from '../../src/components/socataMainPage/HeaderSocata';
import { Stack } from 'expo-router';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen
        options={{
          headerTitle: () => <Text>SÓCATA</Text>,
          headerRight: () => <HeaderSocata></HeaderSocata>,
        }}
      />
      <Infos
        title="Sócata"
        version="1.0"
        developerName="Matheus Sydor"
        githubLink="https://github.com/cazueirobr"
      />
    </View>
  );
}