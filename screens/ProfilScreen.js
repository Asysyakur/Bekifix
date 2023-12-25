import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import HeaderPage from "../components/HeaderPage";
import DefaultProfileImage from "../assets/favicon.png";
import axios from "axios";

function ProfileScreen({ navigation , userId, route  }) {
  const [userProfile, setUserProfile] = useState(null);

  const handleLogout = () => {
    // Hapus data pengguna dari penyimpanan lokal/state jika perlu

    // Navigasi ke halaman login setelah logout berhasil
    navigation.replace("Login");
  };
  
  console.log(userId);
  useEffect(() => {
    // Fetch user profile data from the backend
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/profils/${userId}`);
        // Assuming the response data structure matches the expected user profile format
        setUserProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  },[route.params?.dataUpdated]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <HeaderPage title="Profil" />, // Menggunakan komponen Header dengan properti title
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
      <Image source={
          userProfile?.user?.gambar
            ? { uri: userProfile.user.gambar }
            : DefaultProfileImage
        } style={styles.profileImage} />
            <View style={styles.userInfo}>
              <Text style={styles.username}>{userProfile ? userProfile.user.name : "Loading..."}</Text>
              <Text style={styles.email}>{userProfile ? userProfile.user.email : "Loading..."}</Text>
            </View>
      </View>

      {/* Card Button untuk Pindah Halaman */}
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate("Edit Profil", { userId: userId })}
      >
        <Text style={styles.buttonText}>Edit Profil</Text>
        <svg
          style={styles.buttonImage}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate("Status Pembayaran", { userId: userId })}
      >
        <Text style={styles.buttonText}>Status Pembayaran</Text>
        <svg
          style={styles.buttonImage}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate("Riwayat Transaksi")}
      >
        <Text style={styles.buttonText}>Riwayat Transaksi</Text>

        <svg
          style={styles.buttonImage}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate("Tentang Toko")}
      >
        <Text style={styles.buttonText}>Tentang Toko</Text>
        <svg
          style={styles.buttonImage}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  userInfo: {
    justifyContent: "center",
  },
  username: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: "700",
  },
  email: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: "gray",
  },
  cardButton: {
    flexDirection: "row", // Membuat konten sejajar (horizontal)
    alignItems: "center", // Mengatur konten secara vertikal
    justifyContent: "space-between", // Menengahkan konten secara horizontal
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5, // Untuk bayangan
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
    width: "100%", // Membuat tombol selebar layar
  },
  logoutButton: {
    flexDirection: "row", // Membuat konten sejajar (horizontal)
    alignItems: "center", // Mengatur konten secara vertikal
    justifyContent: "center", // Menengahkan konten secara horizontal
    backgroundColor: "#528BF9",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5, // Untuk bayangan
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "100%", // Membuat tombol selebar layar
  },
  buttonImage: {
    width: 20, // Sesuaikan dengan ukuran yang diinginkan
    height: 20, // Sesuaikan dengan ukuran yang diinginkan
    marginRight: 10, // Jarak antara gambar dan teks
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
  logoutText: {
    fontFamily: 'Poppins',
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ProfileScreen;