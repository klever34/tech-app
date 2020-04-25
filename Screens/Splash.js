import React from "react";
import { StyleSheet, ActivityIndicator, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/images/vampfi.png")}
        />
      </View>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1984E6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    alignItems: "center",
    margin: 50,
    width: 20,
  },
});
