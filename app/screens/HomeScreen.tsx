import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View style={tw`bg-white h-full`}>
      <Image
      style={{
        width:100,
        height: 100,
        resizeMode: "contain",
      }}
      source={require("../assets/Uber-logo.jpg")}
      />
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "Blue",
  },
});
