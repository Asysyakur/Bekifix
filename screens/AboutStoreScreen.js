import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AboutStoreScreen() {
  const [showDescription, setShowDescription] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case 'description':
        setShowDescription(!showDescription);
        break;
      case 'faq':
        setShowFAQ(!showFAQ);
        break;
      case 'schedule':
        setShowSchedule(!showSchedule);
        break;
      default:
        break;
    }
  };

  const renderArrowIcon = (section) => {
    const isSectionOpen = getSectionState(section);
    const iconName = isSectionOpen ? 'chevron-up' : 'chevron-down'; // Menggunakan ikon panah atas dan bawah
    return (
      <Ionicons name={iconName} size={20} color="#04B4A2" />
    );
  };

  const getSectionState = (section) => {
    switch (section) {
      case 'description':
        return showDescription;
      case 'faq':
        return showFAQ;
      case 'schedule':
        return showSchedule;
      default:
        return false;
    }
  };  

  const openGoogleMaps = () => {
    const address = 'Jalan Toko No. 123, Kota Anda, 12345'; // Ganti dengan alamat toko sesuai kebutuhan
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Logo Toko */}
      <Image
        source={require('../assets/Beki.png')} // Ganti dengan path yang sesuai
        style={styles.logo}
      />

      {/* Deskripsi Toko */}
      <TouchableOpacity onPress={() => toggleSection('description')}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Belanja Kilat</Text>
            <View style={styles.showMore}>
              {renderArrowIcon('description')}
            </View>
          </View>
          {showDescription && (
            <Text style={styles.description}>
              Belanja Kilat adalah aplikasi belanja online yang dirancang untuk
              memberikan pengalaman belanja yang cepat, mudah, dan menyenangkan
              kepada pengguna. Aplikasi ini menawarkan berbagai fitur unggulan
              untuk memenuhi kebutuhan belanja sehari-hari dengan efisiensi
              tinggi.
            </Text>
          )}
        </View>
      </TouchableOpacity>

      {/* FAQ */}
      <TouchableOpacity onPress={() => toggleSection('faq')}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>FAQ</Text>
            <View style={styles.showMore}>
              {renderArrowIcon('faq')}
            </View>
          </View>
          {showFAQ && (
            <>
              <Text style={styles.description}>1. Apa itu Aplikasi Belanja Kilat?</Text>
              <Text style={styles.description}>Belanja Kilat adalah aplikasi belanja online yang menyediakan
                pengalaman belanja yang cepat, mudah, dan menyenangkan. Dengan
                aplikasi ini, Anda dapat menemukan, memilih, dan membeli
                berbagai produk dengan efisiensi tinggi.</Text>
              <Text style={styles.description}>2. Bagaimana Cara Saya Memesan Produk?</Text>
              <Text style={styles.description}>Pilih produk yang Anda inginkan, tambahkan ke keranjang belanja,
                dan ikuti langkah-langkah pembayaran. Proses pemesanan ini
                dirancang untuk memudahkan Anda dalam mendapatkan produk dengan
                cepat.</Text>
              <Text style={styles.description}>3. Apa Keuntungan Belanja di Aplikasi Belanja Kilat?</Text>
              <Text style={styles.description}>euntungan termasuk pencarian cepat, promosi dan diskon
                eksklusif, pembayaran aman dan mudah, notifikasi real-time,
                serta dukungan pelanggan yang responsif.</Text>
              {/* Tambahkan FAQ lainnya sesuai kebutuhan */}
            </>
          )}
        </View>
      </TouchableOpacity>

      {/* Jadwal Toko */}
      <TouchableOpacity onPress={() => toggleSection('schedule')}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Jadwal Toko</Text>
            <View style={styles.showMore}>
              {renderArrowIcon('schedule')}
            </View>
          </View>
          {showSchedule && (
            <>
              <Text style={styles.description}>Senin - Jumat: 09.00 - 18.00</Text>
              <Text style={styles.description}>Sabtu: 10.00 - 16.00</Text>
              <Text style={styles.description}>Minggu: Libur</Text>
              {/* Tambahkan jadwal lainnya sesuai kebutuhan */}
            </>
          )}
        </View>
      </TouchableOpacity>

      {/* Alamat Toko */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Alamat Toko</Text>
        <Text style={styles.description}>Jl. Dr. Setiabudi No.229 </Text>
        <Text style={styles.description}>Kota Bandung, 40154</Text>
        {/* Tambahkan informasi alamat lainnya sesuai kebutuhan */}
      </View>

      {/* Footer dengan tombol Google Maps */}
      <TouchableOpacity style={styles.footerButton} onPress={openGoogleMaps}>
        <Text style={styles.footerButtonText}>Buka di Google Maps</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    resizeMode: "cover",
    borderRadius: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontFamily: "Poppins-Bold", // Use Poppins-Bold for bold
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    fontFamily: "Poppins-Regular", // Use Poppins-Regular for regular text
    fontSize: 16,
    lineHeight: 24,
    color: "#555555",
    textAlign: "justify",
  },
  showMore: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerButton: {
    backgroundColor: "#528BF9",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  footerButtonText: {
    fontFamily: "Poppins-Bold", // Use Poppins-Bold for bold
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});


export default AboutStoreScreen;