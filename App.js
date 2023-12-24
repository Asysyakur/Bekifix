import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Homescreen from "./screens/Homescreen";
import ProfilScreen from "./screens/ProfilScreen";
import KeranjangScreen from "./screens/KeranjangScreen";
import RiwayatPesan from "./screens/RiwayatPesan";
import RiwayatPesanSudahBayar from "./screens/RiwayatPesanSudahBayar";
import ProductDetail from "./components/ProductDetail";
import Navigation from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StatusPembayaran from "./screens/StatusPembayaran";
import AboutStoreScreen from "./screens/AboutStoreScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import PesanSekarang from "./components/PesanSekarang";
import StatusPembayaranSelesai from "./screens/StatusPembayaranSelesai";
import Login from "./screens/Login";
import FAQList from "./components/FAQList";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function RiwayatTransaksiStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Riwayat Pesan"
        component={RiwayatPesan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Riwayat Pesan Sudah Bayar"
        component={RiwayatPesanSudahBayar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StatusPembayaranStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Status Pembayaran"
        component={StatusPembayaran}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Status Pembayaran Selesai"
        component={StatusPembayaranSelesai}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function RiwayatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profil" component={ProfilScreen} />
      <Stack.Screen
        name="Riwayat Transaksi"
        component={RiwayatTransaksiStack}
      />
      <Stack.Screen
        name="Status Pembayaran"
        component={StatusPembayaranStack}
      />
      <Stack.Screen name="Tentang Toko" component={AboutStoreScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="Edit Profil" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Pesan Sekarang" component={PesanSekarang} />
      <Stack.Screen name="FAQ" component={FAQList} />
    </Stack.Navigator>
  );
}

function KeranjangStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Keranjang" component={KeranjangScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Keranjang") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Profil") {
              iconName = focused ? "person" : "person-outline";
            }

            const iconColor = focused ? "red" : "gray";
            // You can return any component here as the tab icon
            return <Ionicons name={iconName} size={size} color="#528BF9" />;
          },
          tabBarLabel: () => null, // Hide the label
        })}
        initialRouteName="Home"
      >
        <Tab.Screen name="Keranjang" component={KeranjangStack} />
        <Tab.Screen name="Home" component={MenuStack} />
        <Tab.Screen name="Profil" component={RiwayatStack} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
