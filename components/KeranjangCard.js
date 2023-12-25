import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { KeranjangList, MenuList, colors } from '../Constant';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const KeranCard = ({userId}) => {
  const [keranjangList, setKeranjangList] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchData(); // Mengambil data transaksi saat komponen di-mount
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/keranjang/${userId}`);
      console.log("Response status:", response.status); // Log HTTP status
  
      const data = await response.json();
      console.log("Fetched data:", data); // Log fetched data
  
      setKeranjangList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Deletekeran = async (itemid) => {
    try {
      // Mendapatkan CSRF token
  
      // Melakukan POST request ke endpoint registrasi dengan CSRF token
      const response = await axios.delete(
        `http://127.0.0.1:8000/keranjang/${itemid}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('keranjang berhasil:', response.data);
      fetchData();
      // Lakukan navigasi atau logika setelah registrasi berhasil
    } catch (error) {
      console.error('keranjang gagal:', error);
      // Tambahkan logika penanganan kesalahan
    }
  };
  const handleIncrement = (item) => {
    setQuantity(item + 1);
  };

  const handleDecrement = (item) => {
    if (item > 1) {
      setQuantity(item - 1);
    }
  };
  
  const findProductById = (productId) => {
    return keranjangList.produk.find((product) => product.id === productId);
  };
  
  return (
    <View style={styles.container}>
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
            }}>
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
              }}>{product.name}
              <br></br>
              <Text style={{ color: '#528BF9' }}>Rp. {product.harga}</Text>
              <br></br>
              <View style={{ flexDirection: 'row', marginBottom: 20}}>

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
      
    </View>
  );
};


export default KeranCard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  pesanButton: {
    backgroundColor: '#528BF9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  wrapperImageCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  button: {
    borderRadius: 15,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
  buttonexit: {
    borderWidth: 0.5,
    borderRadius: 15,
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
    marginLeft: 110,
  },
  iconPlus: {
    color: 'black',
    fontWeight: '600',
  },
  wrapperCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
});