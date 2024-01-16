import { SafeAreaView, View, Text, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import {s} from "../../styles/Home";
import { colors } from "../../constants/colors";

export function Home(){
    return(
        <KeyboardAvoidingView behavior="smooth" style={s.containerHome}>

            <View style={{height:"22%", backgroundColor:"grey",marginTop:64}}>                
                <View style={{height:"50%", backgroundColor:"darkgreen", flexDirection:"row"}}>
                    <View style={{width:"80%", backgroundColor:"grey"}}>
                    </View>
                    <TouchableOpacity style={{backgroundColor:"purple", width:"20%"}}>
                    </TouchableOpacity>
                </View>
                <View style={{height:"50%", backgroundColor:"darkblue", flexDirection:"row"}}>
                    <Text style={{color:colors.white, width:"80%", alignSelf: "center", textAlign: "center"}}>Recommendation</Text>
                    <TouchableOpacity style={{backgroundColor:"green",width:"20%"}}>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}