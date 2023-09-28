import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet} from 'react-native';
import { fetchCountries } from './api'; 

const CountryListScreen = () => {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
      fetchCountries()
        .then((data) => {
          setCountries(data);
        })
        .catch((error) => {
          console.error('Error fetching countries:', error);
        });
      }, []);
  
  if (countries.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={countries}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.cca2}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.countryContainer}>
          <Image source={{ uri: item.flags.png }} style={styles.flag} />
          <Text>{item.name.common}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'grid',
    justifyContent: 'grid',
  },
  countryContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  flag: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});


export default CountryListScreen;
