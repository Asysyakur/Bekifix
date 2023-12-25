import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

function StatusPembayaranSelesai({ navigation, userId }) {
  const [kategori, setKategori] = useState([
    {
      keterangan: "Validasi Admin",
    },
    {
      keterangan: "Selesai",
    },
  ]);

  const [seleksiKategori, setSeleksiKategori] = useState({
    keterangan: "Validasi Admin",
  });

  const [dataBarang, setDataBarang] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchData(); // Mengambil data transaksi saat komponen di-mount
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/pembayaransudah/${userId}`);
      console.log("Response status:", response.status); // Log HTTP status
  
      const data = await response.json();
      console.log("Fetched data:", data); // Log fetched data
  
      setDataBarang(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const findProductById = (productId) => {
    return dataBarang.produk.find((product) => product.id === productId);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View style={{ flexDirection: "row" }}>
        {/* Menambahkan item kosong untuk membuat ruang
                <View style={{ flex: 1 }} /> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("Status Pembayaran")}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            elevation: 3,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "#000000", fontFamily: "Poppins", textAlign: "center" }}>
            Validasi Admin
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#528BF9",
            elevation: 3,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontFamily: "Poppins", textAlign: "center" }}>Selesai Validasi</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          /*yg list riwayat pesanan*/
          data={dataBarang.transactions}
          showsVerticalScrollIndicator={false}
          style={{ fontSize: 1 }}
          renderItem={({ item }) => {
            const product = findProductById(item.produk_id);
            return (
              <View>
            <TouchableOpacity
            onPress={() => {
              setModal(true);
              setSelectedItemId(item.id);
            }}
              style={{
                backgroundColor: "#FFFFFF",
                elevation: 3,
                marginBottom: 10,
                marginVertical: 16,
                paddingHorizontal: 20, // Mengurangi padding agar muat dalam layout
                paddingVertical: 5,
                flexDirection: "row", // Mengatur layout secara horizontal
                alignItems: "center", // Untuk mengatur vertikal alignment
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "cover",
                  marginRight: 10, // Jarak antara gambar dan teks
                }}
                source={{ uri: product ? product.gambar : defaultImage }}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{ color: "#212121", fontFamily: "Poppins", fontSize: 14, fontWeight: "bold" }}
                >
                  {product ? product.name : "Product not found"}
                </Text>
                <Text
                  style={{
                    color: "#212121",
                    fontFamily: "Poppins",
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                >
                  jumlah pesanan : {item.total_pesanan}
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text
                  style={{ color: "#528BF9", fontFamily: "Poppins", fontSize: 18, fontWeight: "bold" }}
                >
                   Rp. {item.total_harga}
                </Text>
                <Text
                  style={{ color: "#528BF9", fontFamily: "Poppins", fontSize: 12, fontWeight: "medium" }}
                >
                  validasi admin: {item.status}
                </Text>
              </View>
            </TouchableOpacity>
            <Modal isVisible={modal && selectedItemId === item.id}>
        <View style={{
            backgroundColor: '#FFFFFF', 
            paddingVertical: 50, 
            paddingHorizontal: 50,
            borderRadius: 8}}>
        
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{
                //foto atau logo yg atasnya//
                width: 120, 
                height: 120, 
                borderRadius: 60, 
                borderWidth: 5, 
                borderColor: '#FFFFFF', 
                backgroundColor: '#FFFFFF', 
                borderColor: '#FFFFFF',
                position: 'absolute',
                zIndex: '1',
                bottom: -5
            }} 
                source={require('../assets/pay1.png')}/>
        </View>
          <Text style={{
            //tulisan paling atas//
            fontWeight: 'bold', 
            color: '#212121', 
            textAlign: 'center',
            marginTop: 10, 
            fontSize: 25
            }}>Riwayat Produk!</Text>
          <Text style={{
            fontWeight: 'bold', 
            color: '#212121', 
            textAlign: 'left', 
            fontSize: 18, 
            marginTop: 40,
            marginBottom: 10
            }}>Rincian Transaksi</Text>
            <Text style={{
            fontWeight: 'normal', 
            color: '#212121', 
            textAlign: 'left', 
            fontSize: 14, 
            marginTop: 10
            }}>ID Transaksi: {item.id}</Text>
          <Text style={{
            //tulisan yg keterangannya//
            fontWeight: 'normal', 
            color: '#212121', 
            textAlign: 'left', 
            fontSize: 14, 
            marginTop: 10
            }}>Nama Produk: {product.name}</Text>
          <Text style={{
            fontWeight: 'normal', 
            color: '#212121', 
            textAlign: 'left', 
            fontSize: 14, 
            marginTop: 10
            }}>Jumlah Pesanan : {item.total_pesanan}</Text>
          <Text style={{
            fontWeight: 'normal', 
            color: '#212121', 
            textAlign: 'left', 
            fontSize: 14, 
            marginTop: 10
            }}>Total Harga : Rp. {item.total_harga}</Text>
          <Text style={{
            fontWeight: 'normal', 
            color: '#212121', 
            textAlign: 'left', 
            fontSize: 14, 
            marginTop: 10
            }}>Status : Bukti Pembayaran Valid</Text>
          
          
          <TouchableOpacity style={{
            //*yg tombol klik bawahnya (1)*//
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: 20, 
            backgroundColor: '#80AAFC', 
            paddingVertical: 10, 
            borderRadius: 50, 
            elevation: 8,
            fontSize: 15
            }}>
            <Text onPress={()=> setModal(false)} style={{color: '#FFFFFF'}}>Kembali</Text>
          </TouchableOpacity>
        </View>
      </Modal>
            </View>
           );
          }}
        />
      </View>
    </View>
  );
}

export default StatusPembayaranSelesai;