import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Barcode from "react-native-qrcode-svg";

const value = {
  f: "Ismail",
  l: "Dalhatu",
  e: "ismaildalhatu442@gmail.com",
  c: "LinkUs.inc",
};

export default function GenerateBarCode() {
  return (
    <View>
      <Barcode value={JSON.stringify(value)} />
    </View>
  );
}

const styles = StyleSheet.create({});
