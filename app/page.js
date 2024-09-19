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
      <View style={styles.content}>
        <View style={styles.topContainer}>
          <View style={styles.imagebox}><Text>filme</Text></View>
          <View style={styles.titlebox}>
            <Text style={styles.title}>TITULO DO FILME</Text>
            <Text style={styles.gender}>genero - genero - genero</Text>
            <Text style={styles.sinopse}>Sinopse</Text><Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in ultrices elit. Praesent id hendrerit nulla, vitae lobortis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget ullamcorper magna.</Text>
          </View>
        </View>
        <View style={styles.midContainer}></View>
      </View>
      <View style={styles.bar}>
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
  },
  content:
  {
    flex: 12,
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  topContainer:
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "top",
    alignItems: "left",
    backgroundColor: "#f2f2f2",
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
    backgroundColor: "#ddd",
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
    fontSize: 25,
    fontWeight: "600",
  },
  gender:
  {
    fontSize: 16,
    fontWeight: "350",
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#ddd",
  },
  sinopse:
  {
    fontSize: 16,
    fontWeight: "500",
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "justify"
  },
  desc:
  {
    fontSize: 16,
    fontWeight: "350",
    textAlign: "justify"
  },
  bar:
  {
    flex: 1,
    backgroundColor: "#ccc",
  }
});
