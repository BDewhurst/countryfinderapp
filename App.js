import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import CountryListScreen from './countrycard'
import SearchBar from './searchbar'

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
<CountryListScreen></CountryListScreen>
      <StatusBar style="auto" />
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
