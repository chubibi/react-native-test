import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Home} from "../Views/tabScreens/Home";
import {Explore} from "../Views/tabScreens/Explore";
import {Saved} from "../Views/tabScreens/Saved";
import {User} from "../Views/tabScreens/User";

const Tab = createBottomTabNavigator();

function TabGroup (){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Explore" component={Explore}/>
            <Tab.Screen name="Saved" component={Saved}/>
            <Tab.Screen name="User" component={User}/>
         </Tab.Navigator>
    );
}

export function Navigation (){
    return(
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}