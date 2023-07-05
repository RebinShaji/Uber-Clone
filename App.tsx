import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./app/screens/HomeScreen";
import { store } from "./store";


export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  );
}

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
