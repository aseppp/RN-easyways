import * as React from "react";
import "react-native-gesture-handler";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { CountProvider } from "./src/context/Count";
import Container from "./Container";
import { ModalProvider } from "./src/context/Modal";

export default function App() {
  return (
    <SafeAreaView>
      <ModalProvider>
        <CountProvider>
          <View style={{ backgroundColor: "#202020", height: "100%" }}>
            <StatusBar backgroundColor="#202020" barStyle="light-content" />

            <Container />
          </View>
        </CountProvider>
      </ModalProvider>
    </SafeAreaView>
  );
}
