import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ setSearchQuery }) => {
  const navigation = useNavigation();
  const [searchQueryLocal, setSearchQueryLocal] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchQueryLocal);
    // Implement your search logic here
    console.log("Searching for:", searchQueryLocal);
  };

  return (
    <ImageBackground
      source={require("../assets/Header-Gradasi.png")} // Change the path to your local image
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headertext}>
          Hi, Pengguna
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("FAQ")} style={styles.chatIconContainer} >
        <Text style={styles.chatIcon}>💬</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.headerSearch}>
        {/* Replace text with image */}
        {/* <Image
          source={require("../assets/Beki.png")} // Specify the path to your local image
          style={styles.logoImage}
        /> */}

        {/* Search input */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            onChangeText={(text) => {
              setSearchQueryLocal(text);
              // Call search function immediately when text changes
              handleSearch();
            }}
            value={searchQueryLocal}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headertext: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "Poppins",
    color: "white",
    marginLeft: 32,
    marginTop: 24,
  },
  headerContainer: {
    backgroundColor: '#528BF9',
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSearch: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: "column",
    resizeMode: "cover",
  },
  logoImage: {
    width: 100,
    height: 120,
    alignSelf: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    borderRadius: 80,
    paddingLeft: 15,
    fontFamily: "Poppins",
    color: "gray",
  },
});

export default Header;