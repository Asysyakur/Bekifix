import axios from 'axios';
import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Fungsi untuk melakukan registrasi dengan menggunakan token CSRF
  const handleRegister = async () => {
    try {
      // Mendapatkan CSRF token
  
      // Melakukan POST request ke endpoint registrasi dengan CSRF token
      const response = await axios.post(
        'http://127.0.0.1:8000/registers',
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Registrasi berhasil:', response.data);
      // Lakukan navigasi atau logika setelah registrasi berhasil
    } catch (error) {
      console.error('Registrasi gagal:', error);
      // Tambahkan logika penanganan kesalahan
    }
  };
  

  const navigateToLogin = () => {
    navigation.navigate('Login'); // Navigasi kembali ke halaman login
  };

  return (
      <View style={[styles.container, { backgroundColor: "#528BF9" }]}>
      <Image
          source={require('../assets/BeKi.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Registrasi</Text> {/* Match title style */}
        {/* Use the same TextInput style as Login */}
        <TextInput
          style={[styles.input, { borderRadius: 10 }]}
          placeholder="Nama Lengkap"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={[styles.input, { borderRadius: 10 }]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={[styles.input, { borderRadius: 10 }]}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        {/* Use the same TouchableOpacity style as Login */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.registerText}>Sudah punya akun? Masuk di sini</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white', // Match color to Login component
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#04B4A2',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerText: {
    color: 'white', // Match color to Login component
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default Register;
