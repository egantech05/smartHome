import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function NavBar({navigationRef,active}){


    const btnStyle = (name) => (active === name ? styles.navButtonSelected : styles.navButton);
    const iconColor = (name) => (active === name ? "#292929" : "white");


    return(
        <View style={styles.container}>
        <Pressable style={btnStyle("Home")} onPress={() => navigationRef.navigate("Home")}>
            <Ionicons name="home-outline" size={24} color={iconColor("Home")} />
        </Pressable>

        <Pressable style={btnStyle("Temperature")} onPress={() => navigationRef.navigate("Temperature")}>
            <Ionicons name="thermometer-outline" size={24} color={iconColor("Temperature")} />
        </Pressable>

        <Pressable style={btnStyle("Electricity")} onPress={() => navigationRef.navigate("Electricity")}>
            <Ionicons name="flash-outline" size={24} color={iconColor("Electricity")} />
        </Pressable>

        <Pressable style={btnStyle("Water")} onPress={() => navigationRef.navigate("Water")}>
            <Ionicons name="water-outline" size={24} color={iconColor("Water")} />
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
  
    
        backgroundColor: "#292929",
        flexDirection:"row",
        borderRadius: 32,
        padding: 8,
        margin:8,
        alignSelf:"center",

    },

    navButton:{
        borderRadius: 16,
        padding: 8,
        margin: 8,
    },

    navButtonSelected:{
        backgroundColor: "#31FFD2",
        borderRadius: 16,
        padding: 8,
        margin: 8,
    },



});