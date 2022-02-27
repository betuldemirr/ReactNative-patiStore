import * as React from 'react';
import { StyleSheet, Dimensions, View, TextInput, useState} from "react-native";

import styles from './SearchBar.style';

const SearchBar = ({ search, onSearch }) => {
  
    return (
        <View>
          <TextInput style={styles.search}
            placeholder="Ara..."
            placeholderTextColor= 'grey'
            onChangeText={onSearch}
          />
        </View>
      );
}
export default SearchBar;