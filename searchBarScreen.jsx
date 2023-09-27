
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './searchbar';

function SearchBarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBarScreen;
