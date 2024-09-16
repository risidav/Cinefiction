import { TouchableOpacity, Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Link } from "expo-router";
import * as React from 'react';
/*
vermelho: #D93250
vinho: #732743
preto: #030F26
#030410
branco: #F2F2F2
*/ 

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imagebox}><Text>filme</Text></View>
        <View style={styles.titlebox}><Text style={styles.title}>TITULO DO FILME</Text></View>
      </View>
      <View style={styles.midContainer}></View>
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
  topContainer:
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "top",
    alignItems: "left",
    backgroundColor: "#ddd",
    width: "100%",
    height: 500,
  },
  imagebox:
  {
    flex: 1,
    borderRadius: 10,
    minHeight: 320,
    minWidth:  200,
    maxHeight: 320,
    maxWidth:  200,
    marginLeft: 25,
    marginTop: 25,
    backgroundColor: "#aaa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titlebox:
  {
    flex: 1,
    margin: 25,
  },
  title:
  {
    fontSize: 35,
    fontWeight: "600",
  }
});
