// PesanSekarang.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const PesanSekarang = ({ route }) => {
  const { item, quantity } = route.params;
  const [recipientAddress, setRecipientAddress] = useState('');
  const [paymentProof, setPaymentProof] = useState('');
  const [product, setProduct] = useState();

  useEffect(() => {
    // Gunakan useEffect untuk mengambil data produk dari API saat komponen dimount
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/produksend/${item.id}`);
        // Memperbarui state produk dengan data yang diterima dari API
        setProduct(response.data);
        console.log(product);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [item]);
  console.log(item);

  const totalPayment = item.harga * quantity;

  const handleBayar = () => {
    // Implement logic to process the payment
    console.log(`Paid for ${quantity} ${item.name} - Total: ${totalPayment}`);
  };
console.log(totalPayment);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={{uri:item?.gambar}}
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'cover',
          }}
        />
        <Text style={styles.productName}>{item?.name}</Text>
        <Text style={styles.productPrice}>Rp. {item.harga}</Text>
        <Text style={styles.totalOrder}>Total Pesanan: {quantity}</Text>
        <Text style={styles.totalOrder}>Total Harga: {totalPayment}</Text>

        <Text style={styles.label}>Alamat Penerima</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan alamat penerima"
          value={recipientAddress}
          onChangeText={(text) => setRecipientAddress(text)}
        />

        <Text style={styles.label}>Bukti Pembayaran</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan bukti pembayaran"
          value={paymentProof}
          onChangeText={(text) => setPaymentProof(text)}
        />

        <TouchableOpacity style={styles.bayarButton} onPress={handleBayar}>
          <Text style={styles.bayarButtonText}>Bayar: {totalPayment}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  productName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  totalOrder: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  bayarButton: {
    backgroundColor: '#528BF9',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  bayarButtonText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default PesanSekarang;
