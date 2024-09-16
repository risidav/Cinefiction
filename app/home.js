import { TouchableOpacity, Text, View, StyleSheet, ScrollView } from "react-native";
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
          <Link href="/page" asChild><View style={styles.box}><Text style={styles.title}>filme</Text></View></Link>
          <Link href="/page" asChild><View style={styles.box}><Text style={styles.title}>filme</Text></View></Link>
          <Link href="/page" asChild><View style={styles.box}><Text style={styles.title}>filme</Text></View></Link>
          <Link href="/page" asChild><View style={styles.box}><Text style={styles.title}>filme</Text></View></Link>
          <Link href="/page" asChild><View style={styles.box}><Text style={styles.title}>filme</Text></View></Link>
          <Link href="/page" asChild><View style={styles.box}><Text style={styles.title}>filme</Text></View></Link>
          <Link href="/page" asChild><View style={styles.box}><Text style={styles.title}>filme</Text></View></Link>
          <Link href="/page" asChild><View style={styles.box}><Text style={styles.title}>filme</Text></View></Link>
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
    justifyContent: "space-around",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 12,
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  box:
  {
    borderRadius: 10,
    height: 320,
    width:  200,
    marginVertical: 25,
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bar:
  {
    flex: 1,
    backgroundColor: "#ccc",
  }
});
