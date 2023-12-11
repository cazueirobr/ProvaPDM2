import {Image, View, Text, TextInput, StyleSheet, Touchable, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';

interface LoginFormProps {
  login: () => void
}




export default function LoginForm({login}:LoginFormProps) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');


 // const login = () => {
  //  console.log("Executei a função");
   // if(usuario == "teste" && senha == "123"){
    //  router.push("/login/socata")
     // }
 // }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Usuário' onChangeText={newText => setUsuario(newText)} value={usuario}></TextInput>
      <TextInput secureTextEntry={true} style={styles.input} placeholder='Senha' onChangeText={newPassword => setSenha(newPassword)} value={senha}></TextInput>
      <TouchableOpacity onPress={login} testID='submitButton'>
        <Image style={styles.image} source={require("../../../assets/images/enviareditado.png")}></Image>

      </TouchableOpacity>
    </View>
  )

}
const styles = StyleSheet.create(
    {
        container:{
            flexDirection: "column",
            justifyContent: 'space-evenly',
            alignContent: "center",
        },
        input:{
            marginTop: 60,
            width: 250,
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10

        },
          image: {
            marginTop: 60,
            width: 250,
            height: 50
          },

    }
  );