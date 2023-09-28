import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import { fetchCountries } from './api'; 
import { useNavigation } from '@react-navigation/native';

const CountryListScreen = () => {
  const [countries, setCountries] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
      fetchCountries()
        .then((data) => {
          setCountries(data);
        })
        .catch((error) => {
          console.error('Error fetching countries:', error);
        });
      }, []);

      const handleCountryPress = (country) => {
        navigation.navigate('CountryScreen', { country });
      };
  
  if (countries.length === 0) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {countries.map((country) => (
        <TouchableOpacity
          key={country.cca2}
          style={styles.countryContainer}
          onPress={() => handleCountryPress(country)}
        >
          <Text>{country.name.common}</Text>
          <Image source={{ uri: country.flags.png }} style={styles.flag} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flag: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
});


export default CountryListScreen;