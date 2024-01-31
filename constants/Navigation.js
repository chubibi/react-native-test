import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Views/tabScreens/Home";
import { Explore } from "../Views/tabScreens/Explore";
import { Saved } from "../Views/tabScreens/Saved";
import { User } from "../Views/tabScreens/User";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "./colors";

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused, size }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Explore") {
                    iconName = focused ? "search" : "search-outline";
                } else if (route.name === "Saved") {
                    iconName = focused ? "airplane" : "airplane-outline";
                }
                return <Ionicons name={iconName} color={colors.secondaryColor} size={26} />
            },
            tabBarStyle: { position: 'absolute', backgroundColor: `${colors.white}` },
        })}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Explore" component={Explore}/>
            <Tab.Screen name="Saved" component={Saved}/>
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    );
}

export function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
}