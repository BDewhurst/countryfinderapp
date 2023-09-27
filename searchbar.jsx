import { StyleSheet, TextInput, View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { searchCountries } from './api';

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchedCountries, setSearchedCountries] = useState([]);
  
    const handleSearch = (query) => {
      setSearchQuery(query);
    };
  
    useEffect(() => {
      if (searchQuery) {
        searchCountries(searchQuery).then((data) => {
          setSearchedCountries(data);
        });
      } else {
        setSearchedCountries([]);
      }
    }, [searchQuery]);
  
  

return (
    <View>
    <TextInput 
    placeholder ="Search" 
    clearButtonMode="always"
    style ={styles.searchBox}
    autoCapitalize='none'
    autoCorrect={false}
    onChangeText= {(query) => {handleSearch(query)}}/>
    {searchedCountries.map(country => (
    <View key={country.cca2} style={styles.countryContainer}>
          <Text>{country.name.common}</Text>
          <Image source={{ uri: country.flags.png }} style={styles.flag} />
        </View>
    ))}
    </View>
  )}


const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc", 
        borderRadius: 8,
        borderWidth: 1,
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
})


export default SearchBar;