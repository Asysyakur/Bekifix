// PesanSekarang.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PesanSekarang = ({ route }) => {
  const { item, quantity } = route.params;
  const [recipientAddress, setRecipientAddress] = useState('');
  const [paymentProof, setPaymentProof] = useState('');
  const [notes, setNotes] = useState('');
  const [orderDate, setOrderDate] = useState('');

  const totalPayment = item.price * quantity;

  const handleBayar = () => {
    console.log(`Paid for ${quantity} ${item.name} - Total: ${totalPayment}`);
  };

  const handleDateChange = (date) => {
    setOrderDate(date);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'cover',
          }}
        />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.totalOrder}>Total Pesanan: {totalPayment}</Text>

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

        <Text style={styles.label}>Catatan</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Catatan"
          multiline
          value={notes}
          onChangeText={(text) => setNotes(text)}
        />

        <DatePicker
          selected={orderDate}
          onChange={handleDateChange}
          placeholderText="Pilih Tanggal Pemesanan"
          dateFormat="yyyy-MM-dd"
          todayButton="Hari Ini"
        />

        {orderDate && (
          <Text style={styles.selectedDateText}>Tanggal Pemesanan: {orderDate.toISOString().split('T')[0]}</Text>
        )}

        <TouchableOpacity style={styles.bayarButton} onPress={handleBayar}>
          <Text style={styles.bayarButtonText}>Booking: {totalPayment}</Text>
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
  selectedDateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginTop: 10,
  },
});

export default PesanSekarang;
