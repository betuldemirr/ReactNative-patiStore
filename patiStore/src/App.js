import * as React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, Dimensions } from 'react-native';
import { useState } from "react";

import ProductCard from './components/ProductCard';
import ProductData from './components/ProductData';
import SearchBar from './components/SearchBar';

const App = () => {

  const [searchBarValue, setSearchBarValue] = useState("");

  const renderProducts = ({ item }) => <ProductCard products={item} />

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.headerTitle}>PATIKA STORE</Text>

      <View style={styles.search}>
        <SearchBar onSearch={setSearchBarValue} />
      </View>


      <FlatList
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={ProductData.filter((item) => item.title.includes(searchBarValue))}
        renderItem={renderProducts}
      />

    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE7D0",
    alignItems: 'center',
  },
  headerTitle: {
    width: Dimensions.get('window').width/1.17,
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 15,
    color: '#FC6E20',
  },
})