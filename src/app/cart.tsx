import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const CartScreen = () => {
  return (
    <View>
      <Text>cart </Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
