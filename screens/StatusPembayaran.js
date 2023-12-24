import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";


function StatusPembayaran({ navigation }) {
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

  const [dataBarang, setDataBarang] = useState([
    {
      name: "Brownies Coklat",
      price: "Rp.116.000",
      date: "1 Nov 2023",
      image: "https://handletheheat.com/wp-content/uploads/2017/03/Chewy-Brownies-Square-1-768x768.jpg",
    },
    {
      name: "Bika Ambon",
      price: "Rp.115.000",
      date: "14 Nov 2023",
      image: "https://cdn1-production-images-kly.akamaized.net/ao5_G8FIUB5V3JLFfBDfndKy6nE=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/842440/original/083135300_1427970222-bikaambon.jpg",
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      
      <View style={{ flexDirection: "row" }}>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#528BF9",
            elevation: 3,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontFamily: "Poppins", textAlign: "center" }}>
            Validasi Admin
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Status Pembayaran Selesai")}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            elevation: 3,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "#000000", fontFamily: "Poppins", textAlign: "center" }}>Selesai</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          /*yg list riwayat pesanan*/
          data={dataBarang}
          showsVerticalScrollIndicator={false}
          style={{ fontSize: 1 }}
          renderItem={({ item }) => (
            <TouchableOpacity
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
                source={{ uri: item.image }}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{ color: "#212121", fontFamily: "Poppins", fontSize: 14, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "#212121",
                    fontFamily: "Poppins",
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                >
                  {item.date}
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text
                  style={{ color: "#528BF9", fontFamily: "Poppins", fontSize: 18, fontWeight: "bold" }}
                >
                  {item.price}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default StatusPembayaran;
