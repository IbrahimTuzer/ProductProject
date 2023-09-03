
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SecondPage = ({ navigation,route }) => {
  const { ProductList } = route.params; 
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: ProductList.image }}
        style={styles.image}
      />
      <Text style={styles.title}>Başlık: {ProductList.title}</Text>
      <Text style={styles.price}>Fiyat: ${ProductList.price}</Text>
      <Text style={styles.description}>Açıklama: {ProductList.description}</Text>
      <Text style={styles.category}>Kategori: {ProductList.category}</Text>
      <Text style={styles.rating}>Ortalama Puan: {ProductList.rating.rate}</Text>
      <Text style={styles.ratingCount}>Oy Sayısı: {ProductList.rating.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
  },
  category: {
    fontSize: 14,
  },
  rating: {
    fontSize: 14,
  },
  ratingCount: {
    fontSize: 14,
  },
});

export default SecondPage;
