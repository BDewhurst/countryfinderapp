import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import SearchBar from "./searchbar";
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabGroup() {
   return (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed}
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