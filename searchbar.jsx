import { StyleSheet, TextInput, View } from 'react-native';
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
  
    useEffect(() => {
      console.log(searchedCountries); 
    }, [searchedCountries]);
  

return (
    <View>
    <TextInput 
    placeholder ="Search" 
    clearButtonMode="always"
    style ={styles.searchBox}
    autoCapitalize='none'
    autoCorrect={false}
    onChangeText= {(query) => {handleSearch(query)}}/>
    </View>
  )}


const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc", 
        borderRadius: 8,
        borderWidth: 1,
    }
})


export default SearchBar;