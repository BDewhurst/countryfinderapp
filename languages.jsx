import { useNavigation } from "@react-navigation/native";
import {Button} from "react-native"
import { StyleSheet, TextInput, View, Text, Image,  FlatList, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { searchLanguages} from './api';
import { formatCountryName } from './Feed';
import useDebounce from "./hooks/debounce";

export default function Languages() {
    const {navigate} = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');
    const [searchedCountries, setSearchedCountries] = useState([]);

 
    const debouncedSearchValue = useDebounce(searchQuery, 1000)

    const handleSearch = (query) => {

        setSearchQuery(query);
      };

 

      useEffect(() => {
        if (debouncedSearchValue) {
          searchLanguages(debouncedSearchValue)
            .then((data) => {
              setSearchedCountries(data);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          setSearchedCountries([]);
        }
      }, [debouncedSearchValue]);
    return (
            <View>
            <TextInput 
            placeholder ="Search" 
            clearButtonMode="always"
            style ={styles.searchBox}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText= {(query) => {handleSearch(query)}} />
                <FlatList
                  data={searchedCountries}
                  contentContainerStyle={styles.container}
                  keyExtractor={(item) => item.cca2}
                  numColumns={2} 
                  renderItem={({ item }) => (
                    <Pressable onPress={() => {navigate("Country", {item})}}>
                    <View key={item.cca2} style={styles.countryContainer}>
                      <Text>{formatCountryName(item.name.common)}</Text>
                      <Image source={{ uri: item.flags.png }} style={styles.flag} />
                      <Text> Capital : {item.capital}</Text>
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
              flag: {
                width: 100,
                height: 100,
                resizeMode: 'contain',
                margin: 10,
            },
            countryName: {
              textAlign: 'center',
            },
        })
        
    
