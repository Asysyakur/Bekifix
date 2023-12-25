import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../Constant';
import axios from 'axios';

function KeranjangScreen({ navigation, userId }) {
  const [keranjangList, setKeranjangList] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData(); // Fetch data again when the screen comes into focus
    });

    return unsubscribe;
  }, [navigation]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/keranjang/${userId}`);
      console.log("Response status:", response.status); // Log HTTP status

      console.log("Fetched data:", response.data); // Log fetched data

      setKeranjangList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Deletekeran = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/keranjang/${itemId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('keranjang berhasil:', response.data);
      fetchData();
    } catch (error) {
      console.error('keranjang gagal:', error);
    }
  };

  const calculateTotalPrice = () => {
    // Calculate total price of products in the cart
    let totalPrice = 0;
    keranjangList.keranjang.forEach((item) => {
      const product = findProductById(item.produk_id);
      totalPrice += product.harga * item.jumlah;
    });
    return totalPrice;
  };

  const findProductById = (productId) => {
    return keranjangList.produk.find((product) => product.id === productId);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={keranjangList.keranjang}
          renderItem={({ item }) => {
            const product = findProductById(item.produk_id);
            return (
              <View
                style={{
                  backgroundColor: colors.COLOR_LIGHT,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 7,
                  borderRadius: 10,
                  margin: 16,
                  padding: 10,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={product.gambar}
                  style={{
                    borderRadius: 10,
                    width: 80,
                    height: 80,
                    margin: 3,
                    resizeMode: 'cover',
                  }}
                />
                <Text
                  style={{
                    paddingLeft: 20,
                    marginBottom: 10,
                    flexDirection: "row",
                    fontFamily: 'Poppins',
                  }}
                >
                  {product.name}
                  <br></br>
                  <Text style={{ color: '#528BF9' }}>Rp. {product.harga}</Text>
                  <br></br>
                  <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={{ fontSize: 14, marginHorizontal: 10 }}>Jumlah item: {item.jumlah}</Text>
                  </View>
                </Text>
                <TouchableOpacity onPress={() => Deletekeran(item.id)} style={styles.buttonexit}>
                  <Text style={{ fontWeight: '300' }}>x</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
      {/* Tombol Pesan Sekarang */}
      <TouchableOpacity
        style={styles.pesanButton}
        onPress={() => {
          const totalPrice = calculateTotalPrice();
          navigation.navigate('Pesan Keranjang', { item:keranjangList, totalPayment:totalPrice });
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  pesanButton: {
    backgroundColor: '#528BF9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
});

export default KeranjangScreen;
