import { TouchableOpacity, Text, View, StyleSheet, TextInput } from "react-native";
import { Link } from "expo-router";
import * as React from 'react';
/*
vermelho: #D93250
vinho: #732743
preto: #030F26
#030410
branco: #F2F2F2
*/ 

export default function Cadastrar() {
  const [text, setText] = React.useState({nome: '', senha: '', email: '' });
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.txtentrar}>Cadastrar</Text>
        <View style={styles.boxlogin}>
          <TextInput style={styles.input} mode="outlined" value={text.nome} placeholder="Digite seu nome" onChangeText={text => setText(text)}/>
          <TextInput style={styles.input} mode="outlined" value={text.email} placeholder="Digite seu email" onChangeText={text => setText(text)}/>
          <TextInput style={styles.input} mode="outlined" value={text.senha} placeholder="Digite sua senha" onChangeText={text => setText(text)}/>
        </View>
        <Link href="/home" asChild><TouchableOpacity style={styles.btentrar}>Criar conta</TouchableOpacity></Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  textContainer:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
  btentrar:
  {
    paddingHorizontal: 120,
    paddingVertical: 18,
    borderRadius: 50,
    backgroundColor: "#d93250",
    color: "#f2f2f2",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginTop: 100,
  },
  txtentrar:
  {
    color: "#030410",
    fontSize: 32,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxlogin:
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 400,
    paddingTop: 60,
    borderColor: "#ddd",
    borderTopWidth: 3,
  },
  input: {
    width: 400,
    height: 50,
    margin: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    fontSize: 17,
    color: "#404040",
  },
});
