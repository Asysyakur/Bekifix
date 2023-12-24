import React, { useState } from "react";

import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={[styles.container, { backgroundColor: "#528BF9" }]}>
      <Image source={require("../assets/BeKi.png")} style={styles.logo} />

      <TextInput
        style={[styles.input, { borderRadius: 10}]}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={[styles.input, { borderRadius: 10 }]}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  logo: {
    width: 120,
    height: 160,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },

  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "#528BF9",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
