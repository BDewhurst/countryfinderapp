import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import SearchBar from "./searchbar";
import CountryScreen from "./CountryScreen";
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={Feed} options={{headerShown: false, tabBarLabel: 'Home'}} />
            <Stack.Screen name="CountryScreen" component={CountryScreen} />
        </Stack.Navigator>
    )
}

function TabGroup() {
   return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack}
        options={{tabBarIcon: () => <FontAwesome name="home" size={24} color="black"/>}}/>
        <Tab.Screen name="Search" component={SearchBar}
        options={{tabBarIcon: () => <FontAwesome name="search" size={24} color="black"/>}}/>
    </Tab.Navigator>
   ) 
}
export default function Navigation() {
    return (
        <NavigationContainer>
        <TabGroup />
        </NavigationContainer>
    )
}