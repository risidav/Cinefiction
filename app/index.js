import { Pressable, Text, View, StyleSheet } from "react-native";

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
      <Text>Cinefiction</Text>
      <Pressable style={styles.btentrar}>Entrar</Pressable>
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
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "#d93250",
    color: "#f2f2f2",
    fontSize: 25,
    fontFamily: "sans-serif",
    marginTop: "auto",
    marginBottom: 50,
  }
});
