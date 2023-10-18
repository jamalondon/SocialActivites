import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../Data Management/AuthContext";
import { View, Text, StyleSheet } from "react-native";

const LockScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return (
    <View style={{}}>
      <Text style={{ fontSize: 20, alignSelf: "center" }}>LockScreen</Text>
    </View>
  );
};

export default LockScreen;
