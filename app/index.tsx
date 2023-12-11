import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import LoginForm from '../src/components/login/LoginForm';

export default function index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")}/>
      <LoginForm></LoginForm>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },


});
