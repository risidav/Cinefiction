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
      <View style={styles.loginContainer}>
        <Text style={styles.txtentrar}>Cinefiction - Login</Text>
        <Link href="/home" asChild><TouchableOpacity style={styles.btentrar}>Entrar</TouchableOpacity></Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2"
  },
  loginContainer:
  {
    width: 400,
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderBottomWidth: 4,
    borderColor: "#d93250",
  },
  btentrar:
  {
    paddingHorizontal: 90,
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor: "#d93250",
    color: "#f2f2f2",
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  txtentrar:
  {
    color: "#030410",
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  }
});
