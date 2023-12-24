import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderPage from '../components/HeaderPage';
import Icon from 'react-native-vector-icons/FontAwesome';

function EditProfileScreen({ navigation }) {
  const [name, setName] = useState('Ege Fernandes');
  const [email, setEmail] = useState('glorymu@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('08231239318');
  const [password, setPassword] = useState('Egesgese1');
  const [address, setAddress] = useState('Jl. Bebas kec situ kel sana no 1 ');

  const handleSaveChanges = () => {
    // Implement logic to save changes to the user profile
  };

  return (
    <View style={styles.container}>
      <View style={styles.editProfileContainer}>
        <View style={styles.editProfileField}>
          <Text style={styles.editProfileLabel}>Nama</Text>
          <TextInput
            style={styles.editProfileInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.editProfileField}>
          <Text style={styles.editProfileLabel}>Email</Text>
          <TextInput
            style={styles.editProfileInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.editProfileField}>
          <Text style={styles.editProfileLabel}>Nomor Telepon</Text>
          <TextInput
            style={styles.editProfileInput}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.editProfileField}>
          <Text style={styles.editProfileLabel}>Password</Text>
          <TextInput
            style={styles.editProfileInput}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.editProfileField}>
          <Text style={styles.editProfileLabel}>Alamat</Text>
          <TextInput
            style={styles.editProfileInput}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    paddingHorizontal: 10,
  },
  homeButton: {
    paddingHorizontal: 10,
  },
  homeButtonText: {
    fontFamily: 'Poppins',
    color: 'black',
    fontSize: 16,
  },
  editProfileContainer: {
    width: '100%',
    marginBottom: 20,
  },
  editProfileField: {
    marginBottom: 15,
  },
  editProfileLabel: {
    fontFamily: 'Poppins',
    fontSize: 18,
    marginBottom: 5,
  },
  editProfileInput: {
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    paddingVertical: 10,
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: '#528BF9',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  saveButtonText: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default EditProfileScreen;
