import { StyleSheet, TextInput, View, Text, Image,  FlatList, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { searchCountries } from './api';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchedCountries, setSearchedCountries] = useState([]);
  
    const { navigate } = useNavigation();
    
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
        <FlatList
          data={searchedCountries}
          contentContainerStyle={styles.container}
          keyExtractor={(item) => item.cca2}
          numColumns={2} 
          renderItem={({ item }) => (
            <Pressable onPress={() => {navigate("Country", {item})}}>
            <View key={item.cca2} style={styles.countryContainer}>
              <Text>{item.name.common}</Text>
              <Image source={{ uri: item.flags.png }} style={styles.flag} />
              <Text> Capital : {item.capital}</Text>
              <Text> Region : {item.region}</Text>
            </View>
            </Pressable>
          )}
        />
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
      marginTop: 10,
    },
})


export default SearchBar;