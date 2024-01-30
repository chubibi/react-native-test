import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Views/tabScreens/Home";
import { Explore } from "../Views/tabScreens/Explore";
import { Saved } from "../Views/tabScreens/Saved";
import { User } from "../Views/tabScreens/User";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from "./colors";

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator screenOptions={({route})=>({
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon: ({color, focused, size}) => {
                let iconName;
                if(route.name === "Home"){
                    iconName = "home";
                }
            },
            tabBarStyle: { position: 'absolute', backgroundColor: `${colors.white}` },
        })}>
            <Tab.Screen name="Home" component={Home} options={
                {
                   tabBarIcon: () => <AntDesign name="home" size={24} color={colors.secondaryColor}/>
                }
            } />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Saved" component={Saved} />
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