import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import HeaderPage from "../components/HeaderPage";

function RiwayatPesan({ navigation }) {
  const [kategori, setKategori] = useState([
    {
      keterangan: "Dalam Proses",
    },
    {
      keterangan: "Sudah Bayar",
    },
  ]);

  const [seleksiKategori, setSeleksiKategori] = useState({
    keterangan: "Dalam Proses",
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
          onPress={() => navigation.navigate("Riwayat Pesan")}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            elevation: 3,
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              color: "#528BF9",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
          >
            Dalam Proses
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
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
          >
            Sudah Bayar
          </Text>
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

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  // ... tambahkan gaya lain yang diperlukan di sini
});

export default RiwayatPesan;
