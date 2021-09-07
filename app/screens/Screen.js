import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, StatusBar as RNS, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../utils/colors";

const get = (a, b, c) => [a, b];

export default function Screen({ children, style = {} }) {
  return (
    <SafeAreaView
      style={get(styles.screen, styles.containerLight, styles.containerDark)}
    >
      <StatusBar style="auto" />
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    paddingTop: RNS.currentHeight + 10,
  },
  containerLight: {
    backgroundColor: colors.lightGray,
  },
  containerDark: {
    backgroundColor: colors.bgDark,
  },
});
