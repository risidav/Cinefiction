import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
/*
vermelho: #D93250
vinho: #732743
preto: #030F26
#030410
branco: #F2F2F2
*/ 

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtentrar}>Cinefiction - Home</Text>
      {/* <Link href="/home" asChild><TouchableOpacity style={styles.btentrar}>Entrar</TouchableOpacity></Link> */}
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
    marginTop: "auto",
    marginBottom: 50,
  },
 txtentrar:
  {
    color: "#030410",
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginTop: "auto",
    marginBottom: "auto",
  }
});
