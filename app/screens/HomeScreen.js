import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GenerateBarCode from "../components/GenerateBarCode";
import Scanner from "../components/Scanner";
import Screen from "./Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <Scanner />
      <GenerateBarCode />
    </Screen>
  );
}

const styles = StyleSheet.create({});
