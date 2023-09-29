import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import SearchBar from "./searchbar";
import CountryScreen from "./CountryScreen";
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Languages from "./languages";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function LanguageStack () {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Language Search" component={Languages} options={{headerShown: false, tabBarLabel: 'Search'}} />
        <Stack.Screen name="Country" component={CountryScreen} 
         options={{presentation: "modal"}}/>
    </Stack.Navigator>
    )  
}

function SearchStack () {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Country Search" component={SearchBar} options={{headerShown: false, tabBarLabel: 'Search'}} />
        <Stack.Screen name="Country" component={CountryScreen} 
         options={{presentation: "modal"}}/>
    </Stack.Navigator>
    )
}
function HomeStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={Feed} options={{headerShown: false, tabBarLabel: 'Home'}} />
            <Stack.Screen name="Country" component={CountryScreen}
            options={{presentation: "modal"}} />
        </Stack.Navigator>
    )
}

function TabGroup() {
   return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack}
        options={{tabBarIcon: () => <FontAwesome name="home" size={24} color="black"/>}}/>
        <Tab.Screen name="Search" component={SearchStack}
        options={{tabBarIcon: () => <FontAwesome name="search" size={24} color="black"/>}}/>
    </Tab.Navigator>
   ) 
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="TabGroup" component={TabGroup}
             options={{
                title: 'Countries',
              }}/>
            <Drawer.Screen name="Languages"component={LanguageStack}/>
        </Drawer.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <DrawerGroup />
        </NavigationContainer>
    )
}