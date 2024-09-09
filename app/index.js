import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
/*
vermelho: #D93250
vinho: #732743
preto: #030F26
#030410
branco: #F2F2F2
*/ 

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

      </View>
      <View style={styles.textContainer}>
        <Text style={styles.txtentrar}>Cinefiction</Text>
        <Text style={styles.descentrar}>Bem vindo ao cinefiction! O app de cinema que foi feito para você!</Text>
        <Link href="/login" asChild><TouchableOpacity style={styles.btentrar}>Login</TouchableOpacity></Link>
        <Link href="/cadastrar" asChild><TouchableOpacity style={styles.btcadastrar}>Cadastrar</TouchableOpacity></Link>
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
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderColor: "#ddd",
    borderTopWidth: 3,
    width: "80%",
  },
  imageContainer:
  {
    flex: 3,
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
    marginTop: 160,
    marginBottom: 30,
  },
  btcadastrar:
  {
    paddingHorizontal: 100,
    paddingVertical: 18,
    borderRadius: 50,
    backgroundColor: "#f2f2f2",
    color: "#d93250",
    borderColor: "#d93250",
    borderWidth: 3,
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginBottom: 20,
  },
  txtentrar:
  {
    color: "#030410",
    fontSize: 32,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginBottom: 20,
  },
  descentrar:
  {
    width: 400,
    color: "#aaa",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "400",
    textAlign: "center",
  }
});
