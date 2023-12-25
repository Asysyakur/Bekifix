import axios from 'axios';
import React, { useState } from 'react';
import { ImageBackground, Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation, setIsLoggedIn, setUserId  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/logins',
        {
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
      setIsLoggedIn(true);
      const userId = response.data.user.id;; // Assuming user data includes an 'id' field

        // Set the user ID and set isLoggedIn to true
        setUserId(userId);
        navigation.navigate('Home');
      // Lakukan navigasi atau logika setelah registrasi berhasil
    } catch (error) {
      console.error('Registrasi gagal:', error);
      // Tambahkan logika penanganan kesalahan
    }
  };

  const handleRegister = () => {
    // Navigasi ke halaman Register
    navigation.navigate('Register'); // Ganti 'Register' dengan nama screen/halaman Registrasi
  };

  return (
      <View style={[styles.container, { backgroundColor: "#528BF9" }]}>
        <Image
          source={require('../assets/BeKi.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Masuk</Text>
        <TextInput
          style={[styles.input, { borderRadius: 10 }]}
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
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.loginText}>Belum punya akun? Buat di sini</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Warna putih dengan tingkat transparansi 0.8
    padding: 16,
    borderRadius: 10,
    width: '80%', // Sesuaikan dengan kebutuhan
    alignItems: 'center', // Agar kontennya berada di tengah secara horizontal
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain', // Menggunakan 'contain' agar gambar tetap proporsional di dalam kotak
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
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#528BF9',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    color: 'white', // Match color to Login component
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;