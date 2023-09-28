import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import { fetchCountries } from './api'; 
import { useNavigation } from '@react-navigation/native';


const CountryListScreen = () => {
  const [countries, setCountries] = useState([]);

  const { navigate } = useNavigation();

  useEffect(() => {
      fetchCountries()
        .then((data) => {
          setCountries(data);
        })
        .catch((error) => {
          console.error('Error fetching countries:', error);
        });
      }, []);
      
      function formatCountryName(countryName) {
        if (countryName.length > 16) {

          return countryName.substring(0, 16) + '\n' + countryName.substring(16);
        }
        return countryName;
      }

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
        <Pressable onPress={() => {navigate("Country", {item})}}>
        <View style={styles.countryContainer}>
          <Image source={{ uri: item.flags.png }} style={styles.flag} />
          <Text style={styles.countryName}>{formatCountryName(item.name.common)}</Text>
        </View>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
    countryContainer: {
      flex: 1,
      flexDirection: 'grid',
      alignItems: 'center',
      margin: 20, 
    },
    countryContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      margin: 15, 
    },
    flag: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      margin: 10,
  },
  countryName: {
    textAlign: 'center',
  },
});


export default CountryListScreen;
