// ProductDetail.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${item.name} to the cart`);
  };

  const handleOrderNow = () => {
    console.log(`Ordered ${quantity} ${item.name} now`);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <View
          style={{
            borderRadius: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 7,
            overflow: 'hidden',
          }}
        >
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'cover',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
          />
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 24, fontWeight: 'bold', margin: 16 }}>
            {item.name}
          </Text>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, marginBottom: 16, marginLeft: 16 }}>{item.price}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, marginLeft: 16 }}>
            <TouchableOpacity onPress={handleDecrement} style={{ padding: 10, backgroundColor: '#528BF9', borderRadius: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: '800', color:'white' }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, marginHorizontal: 10 }}>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrement} style={{ padding: 10, backgroundColor: '#528BF9', borderRadius: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: '800', color:'white' }}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, marginBottom: 16, marginLeft: 16, fontWeight: 'bold' }}>Tentang Produk</Text>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, marginBottom: 20, marginLeft: 16, marginRight: 16, textAlign: 'justify' }}>{item.description}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Keranjang")} 
            style={{
              flex: 1,
              fontFamily: 'Poppins-Regular',
              backgroundColor: 'white',
              paddingVertical: 24,
              borderColor: '#528BF9',
              borderWidth: 1,
            }}
          >
            <Text style={{ color: '#528BF9', textAlign: 'center', fontFamily: 'Poppins-Regular', fontSize: 16 }}>Tambah ke Keranjang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Pesan Sekarang", {item, quantity})}
            style={{
              flex: 1,
              fontFamily: 'Poppins-Regular',
              backgroundColor: '#528BF9',
              borderBlockColor: 'white',
              paddingVertical: 24,
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Regular', fontSize: 16 }}>Pesan Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
