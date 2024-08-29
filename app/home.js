import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
/*
vermelho: #D93250
vinho: #732743
preto: #030F26
#030410
branco: #F1f1F1
*/ 

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Cinefiction - Home</Text>
        </View>
        <View style={styles.scroll}>
          <View style={styles.box}>

          </View>
        </View>
      </View>
      <View style={styles.bar}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  content:
  {
    display: "flex",
    flexDirection: 'column',
    flex: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  header:
  {
    flex: 1,
    width: "100%",
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  scroll:
  {
    width: "100%",
    alignItems: "center",
    flex: 8,
  },
  box:
  {
    height: 200,
    width: "90%",
    marginTop: 25,
    backgroundColor: "#ddd",
  },
  bar:
  {
    flex: 1,
    height: "100px",
    backgroundColor: "#ccc",
  }
});
