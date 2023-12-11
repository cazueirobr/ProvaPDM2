import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';
import { Button, Text, Image } from 'react-native';

export default function AppContainer() {
  return (
    <ActionSheetProvider>
      <Stack>
      </Stack>
    </ActionSheetProvider>
  );
}