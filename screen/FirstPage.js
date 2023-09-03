import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FirstPage = ({ navigation }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProduct(res.data)
      })
  }, [])

  const HandleButton = (value) => {
    navigation.navigate('SecondPage', {
      ProductList: value
    })
  }
  

  
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => HandleButton(item)}>
        <View style={styles.ReturnContainer}>
          <Text>{item.title}</Text>
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100 }}
          />
          <Text>Fiyat: ${item.price}</Text>
          <Text>Ortalama Puan: {item.rating.rate}</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <View style={styles.FirstContainer}>
      <FlatList
      horizontal
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({
  FirstContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'tomato',
    
  },
  ReturnContainer: {
    top: 300,
    width: 200,
    height: 200,
    marginHorizontal: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
