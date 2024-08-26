import { Stack } from "expo-router";

/*
vermelho: #D93250
vinho: #732743
preto: #030404
#030410
branco: #F2F2F2
*/ 

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#030410",
        },
        headerTintColor: "#F2F2F2",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", 
      }}
    >
      <Stack.Screen name="index" options={{ title: "Cinefiction" }} />
      <Stack.Screen name="home" options={{ title: "Home" }} />
    </Stack>
  );
}
